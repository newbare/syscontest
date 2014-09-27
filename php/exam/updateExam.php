<?php
	//calling the connection files
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$idExam = $data->idExam;
	$idInstitution = $data->idInstitution;
	$year = $data->year;
	$role = $data->role;
	$level = $data->level;
	$organ = $data->organ;


	//sql  query
	$query = sprintf("UPDATE exam SET idInstitution = '%d',
	year = '%d', role = '%s' , level = '%s' , organ = '%s'  WHERE idExam=%d",
		mysql_real_escape_string($idInstitution),
		mysql_real_escape_string($year),
		mysql_real_escape_string($role),
		mysql_real_escape_string($level),
		mysql_real_escape_string($organ),
		mysql_real_escape_string($idExam));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idExam" => $idExam,
			"idInstitution" => $idInstitution,
			"year" => $year,
			"role" => $role,
			"level" => $level,
			"organ" => $organ)
	  ));