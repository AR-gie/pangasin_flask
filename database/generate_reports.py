import csv
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PUBLIC_REPORTS = ROOT.parent / "frontend" / "public" / "data" / "submissions.csv"
REPORT_TYPES = ("Production", "Production", "Producers", "Income", "Income")
SUPPLEMENTAL_REPORT_TYPES = ("Production", "Income")
METHODS = ("Solar Evaporation", "Hybrid", "Cooking")
BUYERS = (
    "National Salt Traders Corp.",
    "Metro Salt Distributors Inc.",
    "Pangasinan Coastal Market Cooperative",
)


def month_range():
    for year in range(2020, 2027):
        last_month = 8 if year == 2026 else 12
        for month in range(1, last_month + 1):
            yield year, month


def load_rows(path):
    with path.open(newline="", encoding="utf-8-sig") as stream:
        return list(csv.DictReader(stream))


def load_coordinators():
    return [
        row
        for row in load_rows(ROOT / "users.csv")
        if row["role"] == "coordinator"
    ]


def generated_submission(coordinator, year, month, slot, report_types=REPORT_TYPES, prefix="G"):
    month_name = date(year, month, 1).strftime("%b")
    ordinal = (year - 2020) * 12 + month
    report_type = report_types[slot]
    seed = ordinal * 17 + int(coordinator["user_id"].split("-")[1]) * 11 + slot * 7
    status = "Rejected" if seed % 37 == 0 else "Pending" if seed % 13 == 0 else "Approved"
    report_id = f"{prefix}-{year}{month:02d}-{coordinator['user_id']}-{slot + 1:02d}"
    report_date = min(24, 8 + (seed % 17))
    method = METHODS[seed % len(METHODS)]
    base_volume = 68 + (seed % 104)
    farm_size = round(1.2 + (seed % 24) / 10, 1)
    salt_beds = 5 + (seed % 15)
    amount_sold = round(base_volume * (0.78 + (seed % 12) / 100), 2)
    market_rate = 145 + (seed % 66)

    row = {
        "submission_id": report_id,
        "coordinator_id": coordinator["user_id"],
        "coordinator_name": coordinator["name"],
        "municipality": coordinator["municipality"],
        "period": f"{month_name} {year}",
        "report_type": report_type,
        "status": status,
        "submission_date": f"{month_name} {report_date}, {year}",
        "month": month_name,
        "year": str(year),
        "volume_mt": "",
        "farm_size_ha": "",
        "salt_beds": "",
        "production_method": "",
        "owner": "",
        "farm_manager": "",
        "manager_contact": "",
        "new_worker_count": "",
        "amount_sold_mt": "",
        "market_rate_php": "",
        "total_revenue_php": "",
        "buyer": "",
        "notes": f"Synthetic historical report for {month_name} {year}; values follow the existing reporting profile.",
    }

    if report_type == "Production":
        row.update(
            volume_mt=str(base_volume),
            production_method=method,
            notes=f"Monthly production report for {month_name} {year}; {method.lower()} output recorded without anomalies.",
        )
    elif report_type == "Producers":
        row.update(
            farm_size_ha=f"{farm_size:.1f}",
            salt_beds=str(salt_beds),
            production_method=method,
            owner=coordinator["name"],
            farm_manager=coordinator["name"],
            manager_contact="Existing coordinator contact",
            new_worker_count=str(seed % 4),
            notes=f"Producer capacity report for {month_name} {year}; staffing and salt-bed inventory updated.",
        )
    else:
        row.update(
            amount_sold_mt=f"{amount_sold:.2f}",
            market_rate_php=f"{market_rate:.2f}",
            total_revenue_php=f"{amount_sold * market_rate:.2f}",
            buyer=BUYERS[seed % len(BUYERS)],
            notes=f"Income report for {month_name} {year}; sales reconciled with the monthly production record.",
        )
    return row


def should_generate(coordinator, year, month, slot, prefix):
    # Bolinao has occasional incomplete reporting periods instead of perfect coverage.
    if coordinator["municipality"] == "Bolinao":
        seed = (year - 2020) * 31 + month * 7 + int(coordinator["user_id"].split("-")[1]) * 13 + slot
        return seed % 5 != 0
    return True


def write_rows(path, rows):
    fieldnames = list(rows[0])
    with path.open("w", newline="", encoding="utf-8") as stream:
        writer = csv.DictWriter(stream, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    existing = [
        row
        for row in load_rows(ROOT / "submissions.csv")
        if not row["submission_id"].startswith(("G-", "H-"))
    ]
    baseline = [
        generated_submission(coordinator, year, month, slot)
        for year, month in month_range()
        for coordinator in load_coordinators()
        for slot in range(len(REPORT_TYPES))
        if should_generate(coordinator, year, month, slot, "G")
    ]
    supplemental = [
        generated_submission(
            coordinator,
            2026,
            month,
            slot,
            report_types=SUPPLEMENTAL_REPORT_TYPES,
            prefix="H",
        )
        for month in range(1, 8)
        for coordinator in load_coordinators()
        for slot in range(len(SUPPLEMENTAL_REPORT_TYPES))
        if should_generate(coordinator, 2026, month, slot, "H")
    ]
    rows = existing + baseline + supplemental
    write_rows(ROOT / "submissions.csv", rows)
    write_rows(PUBLIC_REPORTS, rows)
    print(f"Preserved {len(existing)} existing reports")
    print(f"Generated {len(baseline)} baseline reports")
    print(f"Generated {len(supplemental)} supplemental January-July 2026 reports")
    print(f"Wrote {len(rows)} total reports to both CSV copies")


if __name__ == "__main__":
    main()