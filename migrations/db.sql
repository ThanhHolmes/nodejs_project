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

INSERT INTO `classesDB`.`students` (`id`, `fullname`, `age`, `gender`, `class_id`) VALUES ('12', 'Cristiano Ronaldo', '36', 'Male', '4');
INSERT INTO `classesDB`.`students` (`id`, `fullname`, `age`, `gender`, `class_id`) VALUES ('13', 'Daniel Alves', '38', 'Male', '4');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('James Vardy', '31', 'Male', '2');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Thiago Alcantara', '31', 'Male', '3');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Luis Diaz', '27', 'Male', '2');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Paulo Dybala', '29', 'Male', '4');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Kyliand', '22', 'Male', '2');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Mbappe', '21', 'Male', '1');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Di Maria', '32', 'Male', '1');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Lewandowski', '32', 'Male', '4');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('David Alaba', '31', 'Male', '3');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Angle Lissandra', '29', 'Female', '2');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Sena Lux', '22', 'Female', '1');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Annie Nguyen', '25', 'Female', '4');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Ring', '21', 'Female', '3');

INSERT INTO `classesDB`.`classes` (`classcode`, `classname`) VALUES ('INTE9', 'InterMilan');
INSERT INTO `classesDB`.`students` (`fullname`, `age`, `gender`, `class_id`) VALUES ('Aturo Vidal', '32', 'Male', '9');

INSERT INTO `classesDB`.`classes` (`id`, `classcode`, `classname`) VALUES ('1', 'FCB', 'Barcelona');
INSERT INTO `classesDB`.`classes` (`classcode`, `classname`) VALUES ('BDM', 'Borussia Dortmund');
INSERT INTO `classesDB`.`classes` (`classcode`, `classname`) VALUES ('PSG', 'Paris Saint Germain');
INSERT INTO `classesDB`.`classes` (`classcode`, `classname`) VALUES ('LIVFC', 'Liverpool');
INSERT INTO `classesDB`.`classes` (`classcode`, `classname`) VALUES ('CHEL', 'Chelsea');