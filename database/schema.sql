CREATE DATABASE IF NOT EXISTS hamro_lunch_box
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hamro_lunch_box;

CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL UNIQUE,
  display_name VARCHAR(120) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin','reception','delivery') NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash CHAR(64) NOT NULL PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_sessions_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  KEY idx_sessions_expiry (expires_at)
);

-- The UI edits a shared business workspace as one state tree; this table stores
-- that tree in MySQL and the revision column provides optimistic locking for
-- concurrent saves. Entities can be extracted into relational tables as CRUD
-- endpoints are added.
CREATE TABLE IF NOT EXISTS business_state (
  id TINYINT UNSIGNED NOT NULL PRIMARY KEY,
  payload JSON NOT NULL,
  revision BIGINT UNSIGNED NOT NULL DEFAULT 0,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT chk_business_state_singleton CHECK (id = 1)
);

INSERT INTO business_state (id, payload)
VALUES (1, JSON_OBJECT(
  'orders', JSON_ARRAY(), 'stock', JSON_ARRAY(), 'customers', JSON_ARRAY(),
  'next', 1, 'menu', JSON_OBJECT(), 'staff', JSON_ARRAY(),
  'finishedStock', JSON_OBJECT(), 'productionRuns', JSON_ARRAY(),
  'stockMoves', JSON_ARRAY(), 'suppliers', JSON_ARRAY(), 'purchases', JSON_ARRAY(),
  'expenses', JSON_ARRAY(), 'reminders', JSON_ARRAY(), 'settings', JSON_OBJECT(
    'businessName', 'Hamro Lunch Box', 'address', '', 'phone', '', 'pan', '',
    'vatNumber', '', 'vatEnabled', FALSE, 'vatRate', 13, 'qrLabel', 'Scan to pay'
  )
)) ON DUPLICATE KEY UPDATE id = id;
