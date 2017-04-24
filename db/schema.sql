
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	burger_name VARCHAR(100) NOT NULL,
	devoured boolean,
	burger_date TIMESTAMP
);