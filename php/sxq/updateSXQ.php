<?php
	//calling the connection files
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);

	$idSubject = $data->idSubject;
	$idQuestion = $data->idQuestion;

	//sql  query
	$query = sprintf("UPDATE subject_question SET idSubject = '%d', idQuestion='%d' WHERE idSubject=%d AND idQuestion=%d",
		mysql_real_escape_string($idSubject),
		mysql_real_escape_string($idQuestion),
		mysql_real_escape_string($idSubject),
		mysql_real_escape_string($idQuestion));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idSubject" => $idSubject,
			"idQuestion" => $idQuestion)
	));