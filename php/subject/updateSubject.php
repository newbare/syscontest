<?php
	//calling the connection files
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);

	$name = $data->name;
	$id = $data->idSubject;

	//sql  query
	$query = sprintf("UPDATE subject SET name = '%s' WHERE idSubject=%d",
		mysql_real_escape_string($name),
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
		"idSubject" => $id,
		"name" => $name)
	  ));