<?php
	//chama o arquivo de conexão com o bd
	include("../connect.php");

	$info = $_POST['data'];


	$data = json_decode($info);

	$idDiscipline = $data->idDiscipline;
	$idQuestion = $data->idQuestion;

	//consulta sql
	$query = sprintf("DELETE FROM discipline_question WHERE idDiscipline=%d AND idQuestion=%d",
		mysql_real_escape_string($idDiscipline),
		mysql_real_escape_string($idQuestion));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
