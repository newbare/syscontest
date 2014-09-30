<?php
	//chama o arquivo de conexão com o bd
	include("../connect.php");

	$info = $_POST['data'];


	$data = json_decode($info);

	$idSubject = $data->idDiscipline;
	$idDiscipline = $data->idSubject;

	//consulta sql
	$query = sprintf("DELETE FROM discipline_subject WHERE idDiscipline=%d AND idSubject=%d",
		mysql_real_escape_string($idDiscipline),
		mysql_real_escape_string($idSubject));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
