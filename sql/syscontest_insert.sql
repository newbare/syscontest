
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
VALUES (9, 2010, 'ARQUIVOLOGISTA', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (3, 2009, 'BIBLIOTECÁRIO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (6, 2013, 'SERVIDOR MUNCIPAL', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

INSERT INTO EXAM (idInstitution, year, role, level, organ)
VALUES (7, 2014, 'AGENTE ADMINISTRATIVO', 'MÉDIO', 'PREFEITURA MUNCIPAL DE CAMPINA GRANDE');

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
INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Não é correto afirmar sobre as ideias do texto:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Em: \'A mãe, muito contente, apesar do filho detestar a
 escola e ir mal nas letras.\' Marque a opção cuja reescrita da
 frase não prejudica o sentido:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'No período: \'E o homem do machado descobriu que podia ganhar a vida 
com seu instrumento.\' A oração destacada pode ser classificada como:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Em qual das situações do texto, a vírgula foi usada para indicar uma elipse?', 'B');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Assinale a opção em que há desvio da Gramatica Normativa:', 'B');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Observe as afirmativas:', 'B');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Esquadria que permite a ventilação no interior dos 
repartimentos da casa. É constituída de palhetas paralelas em posição
 inclinada de dentro para fora e do alto para baixo. Há também de palhetas móveis:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Obra de drenagem que se executa no terreno,
 quando qualquer obra de regularização ou movimento 
de terra interrompe o escoamento natural das águas.
 Em geral, são de tubos de concreto ou então de lajes de
 concreto apoiadas em pés direitos:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Ao se construir é necessário saber as forças externas,
 as forças internas e o material que poderá resistir a essas forças
 e tensões, para que se chegue ao fim desejado. Logo, é preciso que
 se conheça as propriedades físicas, químicas e mecânicas desse material. 
É exemplo de material com função estrutural:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Este serviço está previsto na legislação trabalhista brasileira
 e regulamentado pela portaria nº 3.214 de 08 de junho de 1978, considerando 
o disposto no art. 200, da consolidação das Leis do Trabalho, com redação
 dada pela Lei n.º 6.514, de 22 de dezembro de 1977 do Ministério do
 Trabalho e Emprego, por intermédio da Norma Regulamentadora nº 4 (NR-4) 
e as normas da ABNT referentes à segurança no trabalho. No Brasil, a segurança
 e saúde ocupacionais são regulamentadas na forma do:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Existe uma distinção clara entre o poder de polícia
 administrativa e o poder de polícia judiciária. 
São competências do poder de polícia administrativa, dada aos Agentes 
Fiscais de Poder de Polícia do Município, exceto:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'A Constituição Federal adotou o sistema de competências 
reservadas ou enumeradas para os Municípios. Neste teor, compete ao
 Município prover a tudo quanto respeite ao seu peculiar interesse e
 ao bem-estar de sua população, notadamente. São exemplos dessas competências, exceto:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Concedida na fase preliminar do planejamento do empreendimento
 ou atividade, aprovando sua localização e concepção, atestando a viabilidade
 ambiental e estabelecendo os requisitos básicos e condicionantes a 
serem atendidos nas próximas fases de sua implementação:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'A fiscalização é uma atividade técnica exercida para verificar 
as conformidades das obras e serviços executados com as exigências, normas
 e especificações aplicáveis. A fiscalização é exercida através de vistorias 
que envolvem aspectos técnicos e administrativos da execução das obras e 
serviços. São atribuições do Agente Fiscal de urbanismo e obra, exceto:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Deverão ser fiscalizados todos os serviços e obras públicas 
e particulares, concluídas ou em andamento, abrangendo também demolições, 
terraplenagens, parcelamento do solo, a colocação de tapumes, andaimes, 
telas, plataformas de proteção e as condições de segurança das edificações. 
Durante a ação fiscalizadora de obras de construção civil verificar:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Este documento tem por objetivo informar ao responsável pelo 
serviço/obra ou seu representante legal, sobre a existência de pendências
 e/ou indícios de irregularidades no empreendimento objeto de fiscalização. 
Serve, ainda, para solicitar informações, documentos e/ou providências,
 visando regularizar a situação dentro de um prazo estabelecido:', 'B');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Esquadria que permite a ventilação no interior dos repartimentos da casa.
É constituída de palhetas paralelas em posição inclinada de dentro para fora 
e do alto para baixo. Há também de palhetas móveis:', 'A');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Existe uma distinção clara entre o poder de polícia administrativa
 e o poder de polícia judiciária. São competências do poder de polícia administrativa,
 dada aos Agentes Fiscais de Poder de Polícia do Município, exceto:', 'A');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Segundo o IBGE, Bioma é um conjunto de vida
 (vegetal e animal) constituído pelo agrupamento de 
tipos de vegetação contíguos e identificáveis em escala 
regional, com condições geoclimáticas similares e história 
compartilhada de mudanças, o que resulta em uma diversidade 
biológica própria. São exemplos de Biomas terrestres, exceto:', 'A');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Superfície de limitação do terreno que se forma artificialmente
 pela movimentação das terras. Nos cortes e aterros são as superfícies 
laterais inclinadas mais ou menos conforme a natureza do terreno:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'O emboço é diretamente aplicado sobre o chapisco e 
depois de pronto deve apresentar uma superfície plana e áspera para
 facilitar a aderência do reboco. O emboço deve ser sarrafeado com 
régua, exceto em casos especiais, não deve ultrapassar a espessura de:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'É a operação final da obtenção do concreto que consiste em evitar 
a retração hidráulica nas primeiras idades, quando ainda não se desenvolveu 
resistência suficiente para evitar a formação de fissuras:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Através da vibração, o concreto tende a se 
tornar fluido nivelando-se por efeito da acomodação das partículas, 
expulsando o ar aprisionado. O vibrador de concreto é hoje equipamento
 obrigatório, mesmo que em pequenas obras. Existem vários tipos, 
são exemplos, exceto:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'O tijolo furado é empregado na construção das paredes
 em prédios altos, principalmente para reduzir o peso da alvenaria. 
São propriedades dos tijolos furados, exceto:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'É o período em que se manifestam as primeiras patologias,
 decorrentes de erros de projeto, execução ou manutenção, determinando,
 geralmente, degradação lenta e progressiva da estrutura da edificação:', 'B');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'É uma mistura composta de agregado graúdo, agregado miúdo e 
material de enchimento (filler mineral) e cimento asfáltico:', 'E');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'O Concreto simples é um material estrutural de importância fundamental
 nos nossos dias. As soluções em concreto vão desde estruturas simples até obras 
arrojadas, quase incríveis, cuja forma parece só estar limitada pela criatividade
 do homem. São vantagens do concreto, exceto:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Um grupo de C crianças brinca em torno de K cadeiras, sendo C e K 
inteiros positivos. Se duas crianças sentam em cada cadeira, uma criança fica de
 pé. Se três crianças sentam em cada cadeira, uma cadeira fica vazia. Então,
 podemos afirmar que C+K vale:', 'A');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Marque a opção em que o sinal indicativo de crase não está adequado:', 'D');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Assinale a opção em que há erro na escrita da palavra destacada:', 'C');

INSERT INTO QUESTION (idExam, statement, answer)
VALUES (1, 'Na frase escrita pela professora, do ponto de vista linguístico,
 assinale a opção incorreta:', 'D');
-- INSERT QUESTION --


