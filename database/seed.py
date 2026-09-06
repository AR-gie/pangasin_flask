import csv
import sys
from pathlib import Path

from sqlalchemy import text

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from app import db, create_app


ROOT = Path(__file__).resolve().parent


def values(row):
    return {key: (value if value != "" else None) for key, value in row.items()}


def load_csv(connection, filename, table):
    with (ROOT / filename).open(newline="", encoding="utf-8-sig") as stream:
        rows = [values(row) for row in csv.DictReader(stream)]
    if not rows:
        return 0
    columns = list(rows[0])
    names = ", ".join(f"`{column}`" for column in columns)
    placeholders = ", ".join(f":{column}" for column in columns)
    connection.execute(text(f"INSERT IGNORE INTO `{table}` ({names}) VALUES ({placeholders})"), rows)
    return len(rows)


def main():
    app = create_app()
    with app.app_context(), db.engine.begin() as connection:
        counts = {
            "users": load_csv(connection, "users.csv", "users"),
            "submissions": load_csv(connection, "submissions.csv", "submissions"),
            "prescriptions": load_csv(connection, "prescriptions.csv", "prescriptions"),
            "municipal_production_5y": load_csv(connection, "municipal_production_5y.csv", "municipal_production_5y"),
            "farm_monthly_production": load_csv(connection, "farm_monthly_production.csv", "farm_monthly_production"),
            "production_methods": load_csv(connection, "production_methods.csv", "production_methods"),
        }
    for table, count in counts.items():
        print(f"{table}: {count} rows")


if __name__ == "__main__":
    main()