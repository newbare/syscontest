<?php

 include('../connect.php');
 
 $start = $_REQUEST['start'];
 $limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM question LIMIT $start,  $limit";

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