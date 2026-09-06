CREATE DATABASE IF NOT EXISTS pangasin CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pangasin;

CREATE TABLE IF NOT EXISTS users (
  user_id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  role ENUM('coordinator', 'admin') NOT NULL,
  admin_type ENUM('municipal', 'center') NULL,
  municipality VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  contact VARCHAR(40),
  title VARCHAR(80)
);

CREATE TABLE IF NOT EXISTS submissions (
  submission_id VARCHAR(30) PRIMARY KEY,
  coordinator_id VARCHAR(20) NOT NULL,
  coordinator_name VARCHAR(160) NOT NULL,
  municipality VARCHAR(120) NOT NULL,
  period VARCHAR(40) NOT NULL,
  report_type ENUM('Production', 'Producers', 'Income') NOT NULL,
  status ENUM('Approved', 'Pending', 'Rejected') NOT NULL DEFAULT 'Pending',
  submission_date VARCHAR(40) NOT NULL,
  month VARCHAR(20) NOT NULL,
  year INT NOT NULL,
  volume_mt DECIMAL(12,2), farm_size_ha DECIMAL(12,2), salt_beds INT,
  production_method VARCHAR(60), owner VARCHAR(160), farm_manager VARCHAR(160),
  manager_contact VARCHAR(40), new_worker_count INT, amount_sold_mt DECIMAL(12,2),
  market_rate_php DECIMAL(12,2), total_revenue_php DECIMAL(14,2), buyer VARCHAR(160), notes TEXT,
  CONSTRAINT fk_submission_user FOREIGN KEY (coordinator_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS prescriptions (
  prescription_id VARCHAR(20) PRIMARY KEY,
  from_user_id VARCHAR(20) NOT NULL,
  from_name VARCHAR(160) NOT NULL,
  to_user_id VARCHAR(20) NOT NULL,
  to_name VARCHAR(160) NOT NULL,
  to_type ENUM('coordinator', 'admin') NOT NULL,
  municipality VARCHAR(120) NOT NULL,
  prescription_text TEXT NOT NULL,
  date_issued VARCHAR(40) NOT NULL,
  related_submission_id VARCHAR(30),
  FOREIGN KEY (from_user_id) REFERENCES users(user_id),
  FOREIGN KEY (to_user_id) REFERENCES users(user_id),
  FOREIGN KEY (related_submission_id) REFERENCES submissions(submission_id)
);

CREATE TABLE IF NOT EXISTS municipal_production_5y (
  id INT AUTO_INCREMENT PRIMARY KEY, fiscal_year VARCHAR(10) NOT NULL, municipality VARCHAR(120) NOT NULL,
  jul INT, aug INT, sep INT, oct INT, nov INT, `dec` INT, jan INT, feb INT, mar INT, apr INT, may INT, jun INT, annual_total_mt INT
);

CREATE TABLE IF NOT EXISTS farm_monthly_production (
  id INT AUTO_INCREMENT PRIMARY KEY, coordinator_id VARCHAR(20), coordinator_name VARCHAR(160), municipality VARCHAR(120), fiscal_year VARCHAR(10),
  jul INT, aug INT, sep INT, oct INT, nov INT, `dec` INT, jan INT, feb INT, mar INT, apr INT, may INT, jun INT, annual_total INT
);

CREATE TABLE IF NOT EXISTS production_methods (
  id INT AUTO_INCREMENT PRIMARY KEY, coordinator_id VARCHAR(20), coordinator_name VARCHAR(160), municipality VARCHAR(120), fiscal_year VARCHAR(10),
  sun_pct INT, cooked_pct INT, hybrid_pct INT
);