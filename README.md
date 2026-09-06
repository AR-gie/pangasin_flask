# PangAsin Flask

This folder is the Flask/MySQL version of PangAsin. The original React source and public assets are kept under `frontend/src` and `frontend/public`; the Flask app serves the production build from `frontend/dist` so the visual system remains one-to-one with the source app.

## Setup

1. Install Python 3.11+ and MySQL 8+.
2. Create an environment: `python -m venv .venv`.
3. Activate it on Windows: `.venv\Scripts\activate`.
4. Install packages: `pip install -r requirements.txt`.
5. Copy `.env.example` to `.env` and set the MySQL credentials.
6. Create the database and tables with `mysql -u root -p < database/schema.sql`.
7. Seed the copied CSV data: `python database/seed.py`.
8. Build the exact frontend from `frontend/source`: `pnpm install` then `pnpm build`.
9. Start Flask: `python app.py`.

Open `http://127.0.0.1:5000/`. The API is under `/api`, with `/api/health` available for a smoke check.

Ready to use instructions (use this)

a. open windows PowerShell (optional: Admin)
b. cd (put path here ie: cd C:\Users\Name\Desktop\pangasin_flask)
c. enter: .\.venv\Scripts\Activate.ps1
d. enter: pip install flask-cors (if error occurs run: python.exe -m pip install --upgrade pip)
e. enter: python run.py
f. go to http://127.0.0.1:5000
g. ctrl + c to close