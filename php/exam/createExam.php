<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

// (idInstitution, year, role, level, organ)
	$idInstitution = $data->idInstitution;
	$year = $data->year;
	$role = $data->role;
	$level = $data->level;
	$organ = $data->organ;

	//sql query
	$query = sprintf("INSERT INTO exam (idInstitution, year, role, level, organ)
	 values ('%d','%d','%s','%s','%s' )",
		mysql_real_escape_string($idInstitution),
  mysql_real_escape_string($year),
  mysql_real_escape_string($role),
  mysql_real_escape_string($level),
  mysql_real_escape_string($organ)
		);

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idExam" => mysql_insert_id(),
			"idInstitution" => $idInstitution,
			"year" => $year,
			"role" => $role,
			"level" => $level,
			"organ" => $organ
			)
	));