
ALTER TABLE EXAM DROP FOREIGN KEY examFKT;
ALTER TABLE QUESTION DROP FOREIGN KEY questionFKT;
ALTER TABLE DISCIPLINE_SUBJECT DROP FOREIGN KEY disciplineSubjectFKT;
ALTER TABLE DISCIPLINE_SUBJECT DROP FOREIGN KEY disciplineSubjectFKt2;

ALTER TABLE SUBJECT_QUESTION DROP FOREIGN KEY subjectQuestionFKT;
ALTER TABLE SUBJECT_QUESTION DROP FOREIGN KEY subjectQuestionFKt2;

DROP TABLE INSTITUTION;
DROP TABLE DISCIPLINE;
DROP TABLE SUBJECT;
DROP TABLE EXAM;
DROP TABLE QUESTION;
DROP TABLE DISCIPLINE_SUBJECT;
DROP TABLE SUBJECT_QUESTION;

-- DROP DATABASE SYSCONTEST;