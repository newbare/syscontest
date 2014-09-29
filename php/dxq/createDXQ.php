<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$name = $data->name;
	
	//sql query
	$query = sprintf("INSERT INTO institution (name) values ('%s')",
		mysql_real_escape_string($name));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idInstitution" => mysql_insert_id(),
			"name" => $name)
	));