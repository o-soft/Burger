
CREATE DATABASE burger_db;

USE burger_db;

-- USE heroku_;

CREATE TABLE `burgers`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`burger` varchar(144) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);