<?php
	//calling the connection files
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$name = $data->name;
	$id = $data->idInstitution;

	//sql  query
	$query = sprintf("UPDATE discipline SET name = '%s' WHERE idDiscipline=%d",
		mysql_real_escape_string($name),
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idDiscipline" => $id,
			"name" => $name)
	  ));