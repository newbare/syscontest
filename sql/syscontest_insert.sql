
-- INSERT INTITUIÇÕES --
INSERT INTO INSTITUTION (name) VALUES('FUNDAÇÃO GERTÚLIO VARGAS');
INSERT INTO INSTITUTION (name) VALUES('UNIVERSIDADE ESTADUAL DA PARAIBA UEPB');
INSERT INTO INSTITUTION (name) VALUES('COMPROV');
INSERT INTO INSTITUTION (name) VALUES('FUNDAÇÃO CARLOS CHARGAS SOBRINHO');
INSERT INTO INSTITUTION (name) VALUES('UNIVERSIDADE FEDERAL DA PARAIBA');
INSERT INTO INSTITUTION (name) VALUES('PUC RIO');
-- INSERT INTITUIÇÕES --

-- INSERT DISCIPLINAS --
INSERT INTO DISCIPLINE (name) VALUES('LINGUA PORTUGUESA');
INSERT INTO DISCIPLINE (name) VALUES('MATEMÁTICA');
INSERT INTO DISCIPLINE (name) VALUES('CONHECIMENTOS GERAIS');
INSERT INTO DISCIPLINE (name) VALUES('CONHECIMENTOS ESPECÍFICOS');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO ADMINISTRATIVO');
INSERT INTO DISCIPLINE (name) VALUES('BANCO DE DADOS');
INSERT INTO DISCIPLINE (name) VALUES('LINGUA INGLESA');
INSERT INTO DISCIPLINE (name) VALUES('ÉTICA');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO CONSTITUCIONAL');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO PENAL');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO TRIBUTÁRIO');
INSERT INTO DISCIPLINE (name) VALUES('SOCIOLOGIA');
INSERT INTO DISCIPLINE (name) VALUES('HISTÓRIA');
INSERT INTO DISCIPLINE (name) VALUES('GEOGRAFIA');
INSERT INTO DISCIPLINE (name) VALUES('RACIOCÍNIO LÓGICO');
INSERT INTO DISCIPLINE (name) VALUES('ECONOMIA');
INSERT INTO DISCIPLINE (name) VALUES('INFORMÁTICA');
INSERT INTO DISCIPLINE (name) VALUES('LEGISLAÇÃO');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO PREVIDENCIARIO');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO DO CONSUMIDOR');
INSERT INTO DISCIPLINE (name) VALUES('DIREITO TRABALHISTA');
INSERT INTO DISCIPLINE (name) VALUES('BIOLOGIA');
INSERT INTO DISCIPLINE (name) VALUES('MEIO AMBIENTE');
INSERT INTO DISCIPLINE (name) VALUES('GENÉTICA');
INSERT INTO DISCIPLINE (name) VALUES('PROGRAMAÇÃO');
INSERT INTO DISCIPLINE (name) VALUES('DESENVOLVIMENTO WEB');
INSERT INTO DISCIPLINE (name) VALUES('REDES DE COMPUTADORES');
-- INSERT DISCIPLINAS --

-- INSERIR ASSUNTO (NAME, ID_DISCIPLINE) --
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('fonemas', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('tempos verbais', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('regras gramaticas', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('uso da crase', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('verbos', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('substantivos', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('adjetivos', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('adverbios', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('artigos indefinidos', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('artigos definidos', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('conjunções', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('análise sintática', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('adverbios de tempo', 1);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('plural', 1);

INSERT INTO SUBJECT (name, idDiscipline) VALUES ('funções', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('sistema lineares', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('equação do 1º grau', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('equação do 2º grau', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('matrizes', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('determinantes', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('vetores', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('polinômios', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('análise combinatória', 2);
INSERT INTO SUBJECT (name, idDiscipline) VALUES ('fatorial', 2);
-- INSERIR ASSUNTO (NAME, ID_DISCIPLINE) --

-- INSERIR PROVAS --
INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2014, 'SECRETÁRIO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (4, 2011, 'CONTADOR', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2012, 'ADMINISTRADOR PÚBLICO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (2, 2010, 'ARQUIVOLOGISTA', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (3, 2009, 'BIBLIOTECÁRIO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (6, 2013, 'SERVIDOR MUNCIPAL', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (5, 2014, 'AGENTE ADMINISTRATIVO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (5, 2014, 'MÉDICO DENTISTA', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (4, 2014, 'POLICIAL MILITAR', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (3, 2014, 'AGENTE GUARDA MUNCIPAL', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2014, 'AGENTE DE VIGILANCIA SANITÁRIA', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2000, 'AGENTE COMUNITÁRIO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2011, 'ENCANADOR', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2013, 'MOTORISTA', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2011, 'ELETRICISTA', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (1, 2012, 'SERVIDOR MUNCIPAL', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');
-- INSERIR PROVAS --

-- INSERT QUESTION  --
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Não é correto afirmar sobre as ideias do texto:', 'D', 'A', 'B', 'C', 'D', 'E');

INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Em: \'A mãe, muito contente, apesar do filho detestar a
 escola e ir mal nas letras.\' Marque a opção cuja reescrita da
 frase não prejudica o sentido:', 'E', 'A', 'B', 'C', 'D', 'E');

INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'No período: \'E o homem do machado descobriu que podia ganhar a vida 
com seu instrumento.\' A oração destacada pode ser classificada como:',
 'C', 'A', 'B', 'C', 'D', 'E');

INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Em qual das situações do texto, a vírgula foi usada para indicar uma elipse?',
 'B', 'A', 'B', 'C', 'D', 'E');

INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Assinale a opção em que há desvio da Gramatica Normativa:', 
'B', 'A', 'B', 'C', 'D', 'E');

INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Observe as afirmativas:', 'B', 'A', 'B', 'C', 'D', 'E');
-- INSERT QUESTION --


