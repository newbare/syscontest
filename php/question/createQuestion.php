<?php
	//calling the connection file
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$idExam = $data->idExam;
	$statement = $data->statement;
	$answer = $data->answer;
	$optionA = $data->optionA;
	$optionB = $data->optionB;
	$optionC = $data->optionC;
	$optionD = $data->optionD;
 $optionE = $data->optionE;
	
	//sql query
	$query = sprintf("INSERT INTO question (idExam, statement, answer, optionA, optionB, optionC, optionD, optionE)
	 values ('%d','%s','%s','%s','%s','%s','%s','%s' )",
		mysql_real_escape_string($idExam),
		mysql_real_escape_string($statement),
		mysql_real_escape_string($answer),
		mysql_real_escape_string($optionA),
		mysql_real_escape_string($optionB),
		mysql_real_escape_string($optionC),
		mysql_real_escape_string($optionD),
		mysql_real_escape_string($optionE));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idQuestion" => mysql_insert_id(),
			"idExam" => $idExam,
			"statement" => $statement,
			"answer" => $answer,
			"optionA" => $optionA,
			"optionB" => $optionB,
			"optionC" => $optionC,
			"optionD" => $optionD,
			"optionE" => $optionE)
	));