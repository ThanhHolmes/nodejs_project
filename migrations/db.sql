CREATE DATABASE classesDB;

CREATE TABLE classes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    classcode VARCHAR(255),
    classname VARCHAR(255),
    CONSTRAINT PK_classes PRIMARY KEY (id)
);

CREATE TABLE students (
	id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(255),
    age INT(3),
    gender VARCHAR(255),
    class_id INT(11),
    PRIMARY KEY (id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);   

INSERT INTO `classesDB`.`classes` (`id`, `classcode`, `classname`) VALUES ('1', 'BART1', 'Barcelona');
INSERT INTO `classesDB`.`classes` (`id`, `classcode`, `classname`) VALUES ('2', 'LIVT2', 'Liverpool');
INSERT INTO `classesDB`.`classes` (`id`, `classcode`, `classname`) VALUES ('3', 'BDMT4', 'Borussia Dortmund');
INSERT INTO `classesDB`.`classes` (`id`, `classcode`, `classname`) VALUES ('4', 'ACMT4', 'AC Milan');
