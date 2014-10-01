<?php

 include('../connect.php');
 
 $start = $_REQUEST['start'];
 $limit = $_REQUEST['limit'];

 $queryString = '';
 
 if (isset($_POST['discipline']) && isset($_POST['subject']) && isset($_POST['role'])){
  $discipline = $_POST['discipline'];
  $subject =  $_POST['subject'];
  $role = $_POST['role'];

  $queryString = "SELECT DISTINCT  Q.idQuestion, Q.idExam, Q.statement, Q.answer, Q.optionA, Q.optionB, Q.optionC, Q.optionD, Q.optionE
						FROM DISCIPLINE AS D, DISCIPLINE_SUBJECT AS D_S, SUBJECT AS S, QUESTION AS Q, EXAM AS E
						WHERE S.idSubject IN (SELECT DISTINCT idSubject 
						FROM DISCIPLINE_SUBJECT
						WHERE idDiscipline = $discipline ) AND
	  Q.idQuestion in (SELECT DISTINCT idQuestion 
					  FROM SUBJECT_QUESTION
					  WHERE idSubject = $subject ) AND
	  E.idExam in ( SELECT DISTINCT idExam 
					FROM EXAM
					WHERE role = '".$role."')
     ORDER BY RAND() LIMIT $start,  $limit";
 }
 else {
		 	$queryString = "SELECT * FROM question ORDER BY RAND() LIMIT $start,  $limit ";
 }


	//execute sql query
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$questions = array();
	while($question = mysql_fetch_assoc($query)) {
	    $questions[] = $question;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM question') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"data" => $questions
	));