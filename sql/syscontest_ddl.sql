CREATE DATABASE SYSCONTEST;

USE SYSCONTEST;

CREATE TABLE INSTITUTION (
	idInstitution 		INT 		NOT NULL AUTO_INCREMENT,
	name				NVARCHAR(55),
	CONSTRAINT institutionPKC PRIMARY KEY (idInstitution)
);

