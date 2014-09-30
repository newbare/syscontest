<?php
	//chama o arquivo de conexão com o bd
	include("../connect.php");

	$info = $_POST['data'];


	$data = json_decode($info);

	$idSubject = $data->idSubject;
	$idQuestion = $data->idQuestion;

	//consulta sql
	$query = sprintf("DELETE FROM subject_question WHERE idSubject=%d AND idQuestion=%d",
		mysql_real_escape_string($idSubject),
		mysql_real_escape_string($idQuestion));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
