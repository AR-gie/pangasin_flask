import os
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"
    user_id = db.Column(db.String(20), primary_key=True)
    name = db.Column(db.String(160), nullable=False)
    role = db.Column(db.Enum("coordinator", "admin"), nullable=False)
    admin_type = db.Column(db.Enum("municipal", "center"), nullable=True)
    municipality = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(160), nullable=False, unique=True)
    contact = db.Column(db.String(40), nullable=True)
    title = db.Column(db.String(80), nullable=True)

    def as_dict(self):
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}


class Submission(db.Model):
    __tablename__ = "submissions"
    submission_id = db.Column(db.String(30), primary_key=True)
    coordinator_id = db.Column(db.String(20), db.ForeignKey("users.user_id"), nullable=False)
    coordinator_name = db.Column(db.String(160), nullable=False)
    municipality = db.Column(db.String(120), nullable=False)
    period = db.Column(db.String(40), nullable=False)
    report_type = db.Column(db.Enum("Production", "Producers", "Income"), nullable=False)
    status = db.Column(db.Enum("Approved", "Pending", "Rejected"), nullable=False, default="Pending")
    submission_date = db.Column(db.String(40), nullable=False)
    month = db.Column(db.String(20), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    volume_mt = db.Column(db.Numeric(12, 2), nullable=True)
    farm_size_ha = db.Column(db.Numeric(12, 2), nullable=True)
    salt_beds = db.Column(db.Integer, nullable=True)
    production_method = db.Column(db.String(60), nullable=True)
    owner = db.Column(db.String(160), nullable=True)
    farm_manager = db.Column(db.String(160), nullable=True)
    manager_contact = db.Column(db.String(40), nullable=True)
    new_worker_count = db.Column(db.Integer, nullable=True)
    amount_sold_mt = db.Column(db.Numeric(12, 2), nullable=True)
    market_rate_php = db.Column(db.Numeric(12, 2), nullable=True)
    total_revenue_php = db.Column(db.Numeric(14, 2), nullable=True)
    buyer = db.Column(db.String(160), nullable=True)
    notes = db.Column(db.Text, nullable=True)

    def as_dict(self):
        result = {column.name: getattr(self, column.name) for column in self.__table__.columns}
        return {key: str(value) if value is not None and key.endswith("_php") else value for key, value in result.items()}


def create_app():
    app = Flask(__name__, static_folder=str(BASE_DIR / "frontend" / "dist"), static_url_path="")
    database_url = os.getenv("DATABASE_URL", "mysql+pymysql://root:password@localhost/pangasin")
    app.config.update(SQLALCHEMY_DATABASE_URI=database_url, SQLALCHEMY_TRACK_MODIFICATIONS=False)
    db.init_app(app)
    CORS(app)

    @app.get("/api/health")
    def health():
        return jsonify({"status": "ok", "service": "PangAsin Flask"})

    @app.get("/api/users")
    def users():
        role = request.args.get("role")
        query = User.query
        if role in {"coordinator", "admin"}:
            query = query.filter_by(role=role)
        return jsonify([user.as_dict() for user in query.order_by(User.name).all()])

    @app.get("/api/submissions")
    def submissions():
        query = Submission.query
        coordinator_id = request.args.get("coordinator_id")
        status = request.args.get("status")
        if coordinator_id:
            query = query.filter_by(coordinator_id=coordinator_id)
        if status:
            query = query.filter_by(status=status)
        return jsonify([submission.as_dict() for submission in query.order_by(Submission.year.desc()).all()])

    @app.post("/api/submissions")
    def create_submission():
        payload = request.get_json(silent=True) or {}
        required = {"submission_id", "coordinator_id", "coordinator_name", "municipality", "period", "report_type", "submission_date", "month", "year"}
        missing = sorted(required - payload.keys())
        if missing:
            return jsonify({"error": "Missing required fields", "fields": missing}), 400
        submission = Submission(**{column.name: payload[column.name] for column in Submission.__table__.columns if column.name in payload})
        db.session.add(submission)
        db.session.commit()
        return jsonify(submission.as_dict()), 201

    @app.patch("/api/submissions/<submission_id>")
    def update_submission(submission_id):
        submission = db.get_or_404(Submission, submission_id)
        payload = request.get_json(silent=True) or {}
        for field in ("status", "notes", "prescription_text"):
            if field in payload and hasattr(submission, field):
                setattr(submission, field, payload[field])
        db.session.commit()
        return jsonify(submission.as_dict())

    @app.get("/api/analytics/summary")
    def analytics_summary():
        approved = Submission.query.filter_by(status="Approved").all()
        total = sum(float(item.volume_mt or 0) for item in approved)
        municipalities = len({item.municipality for item in approved})
        return jsonify({"total_production_mt": total, "active_municipalities": municipalities, "approved_submissions": len(approved)})

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def frontend(path):
        candidate = Path(app.static_folder) / path
        if path and candidate.is_file():
            return send_from_directory(app.static_folder, path)
        return send_from_directory(app.static_folder, "index.html")

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host=os.getenv("FLASK_HOST", "127.0.0.1"), port=int(os.getenv("FLASK_PORT", "5000")), debug=os.getenv("FLASK_DEBUG", "0") == "1")