CREATE DATABASE SYSCONTEST;

USE SYSCONTEST;

CREATE TABLE INSTITUTION (
	idInstitution 		INT 		NOT NULL AUTO_INCREMENT,
	name				NVARCHAR(55),
	CONSTRAINT institutionPKC PRIMARY KEY (idInstitution)
);

CREATE TABLE DISCIPLINE (
	idDiscipline 		INT 		NOT NULL AUTO_INCREMENT,
	name 				NVARCHAR(45),
	CONSTRAINT 	disciplinePCK PRIMARY KEY (idDiscipline)
);

CREATE TABLE SUBJECT (
	idSubject 			INT 		NOT NULL AUTO_INCREMENT,
	name				NVARCHAR(45),
	idDiscipline		INT,
	CONSTRAINT subjectPKC PRIMARY KEY (idSubject),
	CONSTRAINT subjectFKT FOREIGN KEY (idDiscipline) REFERENCES DISCIPLINE(idDiscipline)
);

CREATE TABLE EXAM (
	idExam				INT 		NOT NULL AUTO_INCREMENT,
	idInstitution		INT, 
	year				INT,
	role				NVARCHAR(45),
	level				NVARCHAR(20),
	organ				NVARCHAR(55),
	CONSTRAINT examPKC PRIMARY KEY (idExam),
	CONSTRAINT examFKT FOREIGN KEY (idInstitution) REFERENCES INSTITUTION(idInstitution)
);

CREATE TABLE QUESTION (
	idQuestion			INT 		NOT NULL AUTO_INCREMENT,
	idExam 				INT,
	statement 			NVARCHAR(8500),
	answer 				CHAR,
	optionA				NVARCHAR(2000),
	optionB				NVARCHAR(2000),
	optionC				NVARCHAR(2000),
	optionD				NVARCHAR(2000),
	optionE				NVARCHAR(2000),
	CONSTRAINT questionPKC PRIMARY KEY (idQuestion),
	CONSTRAINT questionFKT FOREIGN KEY (idExam) REFERENCES EXAM (idExam)
);

CREATE TABLE DISCIPLINE_QUESTION (
	idDiscipline 		INT 	NOT NULL,
	idQuestion			INT 	NOT NULL,
	CONSTRAINT disciplineQuestionPKC PRIMARY KEY (idDiscipline, idQuestion),
	CONSTRAINT disciplineQuestionFKT FOREIGN KEY (idDiscipline) REFERENCES DISCIPLINE (idDiscipline),
	CONSTRAINT disciplineQuestionFKT2 FOREIGN KEY (idQuestion) REFERENCES QUESTION (idQuestion) 
);