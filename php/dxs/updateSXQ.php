<?php
	//calling the connection files
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);
 $idDXS = $data->idDXS;
	$idSubject = $data->idSubject;
	$idDiscipline = $data->idDiscipline;

	//sql  query
	$query = sprintf("UPDATE discipline_subject SET idSubject = '%d', idQuestion='%d' WHERE idDXS=%d",
		mysql_real_escape_string($idDiscipline),
		mysql_real_escape_string($idSubject),
		mysql_real_escape_string($idDXS));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idSubject" => $idDiscipline,
			"idQuestion" => $idSubject,
		 "idSXQ" => $idDXS)
	));