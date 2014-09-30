<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$name = $data->name;
	$idDiscipline = $data->idDiscipline;
	
	//sql query
	$query = sprintf("INSERT INTO subject (name) values ('%s')",
		mysql_real_escape_string($name),
		mysql_real_escape_string($idDiscipline));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
		"idSubject" => mysql_insert_id(),
		"name" => $name)
	));