<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);

	$idDiscipline = $data->idDiscipline;
	$idSubject = $data->idSubject;
	
	//sql query
	$query = sprintf("INSERT INTO discipline_subject (idDicispline, idSubject) values ('%d','%d')",
		mysql_real_escape_string($idDicispline),
		mysql_real_escape_string($idSubject);

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idDXS" =>  mysql_insert_id(),
			"idDiscipline" => $idDicispline,
			"idSubject" => $idSubject)
	));