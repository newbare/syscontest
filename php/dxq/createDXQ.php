<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);

	$idDiscipline = $data->idDiscipline;
	$idQuestion = $data->idQuestion;
	
	//sql query
	$query = sprintf("INSERT INTO discipline_question values ('%d','%d')",
		mysql_real_escape_string($idDiscipline),
		mysql_real_escape_string($idQuestion));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idDiscipline" => $idDiscipline,
			"idQuestion" => $idQuestion)
	));