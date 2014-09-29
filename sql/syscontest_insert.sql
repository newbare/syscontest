
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
-- Q1
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Indique a alternativa em que o termo em destaque foi utilizado incorretamente:', 
'D',
 'É necessário bom [senso] e educação.',
 'Era muito [discreta] em relação a sua fortuna',
 'Na [iminência] da colisão, conseguiu brecar',
 'A participação nos lucros não [sortiu] efeito',
 '');
-- Q2
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Assinale a alternativa que não obedece às regras de concordância verbal:',
  'C',
 'Dentre os visitantes da feira, José é um dos que mais participam.', 
 'Após as chuvas, só me resta um fogão, uma cadeira.', 
 'Acredito que devem haver convites sendo vendidos pelos cambistas.', 
 'Não sei ao certo se faz uma ou duas semanas que eu o encontrei.', 
 '');

-- Q3
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Assinale a alternativa em que o verbo é intransitivo:',
 'A', 
'Vovó morreu feliz.',
'Os empregados encontram-se cansados.', 
'Ocorreu um fato surpreendente.',
 'Conhecimento é tudo.',
'');
 
-- Q4
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Indique a alternativa em que há uma oração sem sujeito',
 'C', 
'Alguém encontrará minha agenda.',
'Faltou-me paciência para esperar o resultado', 
'Há de haver uma saída!',
'Compraram aquele apartamento.', '');

-- Q5
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Não sei [se ele viajou]. A oração destacada se classifica como:', 
'C', 
' Subordinada substantiva subjetiva.', 
'Subordinada substantiva completiva nominal.',
 'Subordinada substantiva objetiva direta.', 
'Subordinada adverbial.', '');


-- Q6
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'A separação silábica de todas as palavras está correta em:', 
'B', 
'An-droi-de / in-tu-i-to / su-b-jul-gar.',
 'A-e-ros-sol / his-té-ri-co / ho-mos-se-xu-al',
 'Ava-ro / in-te-lec-ção / tec-no-lo-gia.', 
'Cáp-su-la / Al-co-ol / bió-ti-po.',
 '');

-- Q7
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Indique a alternativa que completa correta e respectivamente as lacunas abaixo:
Precisaremos _______ um novo laboratório para que pesquisas não sejam _____.', 
'D',
'Improvizar – extintas.', 
'Improvisar – estintas.', 
'Improvizar – estintas.',
'Improvisar – extintas.',  '');

-- Q8
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Num salão há 7 portas. De quantos modos distintos esse salão pode estar aberto?', 
'A',
'127', 
'128',
'132',
'133',
'');

-- Q9
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Dividir 120 em duas partes tais que 10 vezes a maior seja 
igual a 14 vezes o menor. Qual a maior delas', 
'C',
'65',
'75', 
'70', 
'80',
 '');

-- Q10
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Uma caixa d\'água tem 5 metros de comprimento, 6 m de
largura e 4 m de altura. Quantos carros pipas com 8.000
litros cada um são necessários para enchê-la?', 
'B',
'18',
'10', 
'15',
'12', '');

-- Q11
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Assinale a alternativa em que o adjetivo não corresponde
com a locução adjetiva:', 
'D', 
'De nuca – occipital.',
'De marfim – ebúrneo.', 
'De bispo – episcopal.',
'De gesso – níveo.', 
'');

-- Q12
INSERT INTO QUESTION (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
VALUES (1, 'Na oração Esqueci-me da prova, o verbo esquecer se
classifica como:', 
'C',
'Intransitivo.', 
'Transitivo direto.',
'Transitivo indireto.',
'Transitivo direto e indireto.', '');
-- INSERT QUESTION --

-- INSERT DISCIPLINA X QUESTION --
INSERT INTO DISCIPLINE_QUESTION VALUES (1,1);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,2);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,3);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,4);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,5);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,6);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,7);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,8);
INSERT INTO DISCIPLINE_QUESTION VALUES (1,9);
INSERT INTO DISCIPLINE_QUESTION VALUES (2,10);
INSERT INTO DISCIPLINE_QUESTION VALUES (2,11);
INSERT INTO DISCIPLINE_QUESTION VALUES (2,12);
-- INSERT DISCIPLINA X QUESTION --
