<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);

	$idSubject = $data->idSubject;
	$idQuestion = $data->idQuestion;
	
	//sql query
	$query = sprintf("INSERT INTO subject_question values ('%d','%d')",
		mysql_real_escape_string($idSubject),
		mysql_real_escape_string($idQuestion));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idSubject" => $idSubject,
			"idQuestion" => $idQuestion)
	));