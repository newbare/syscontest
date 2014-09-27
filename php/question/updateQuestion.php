<?php
	//calling the connection files
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$idQuestion = $data->idQuestion;
	$idExam = $data->idExam;
	$statement = $data->statement;
	$answer = $data->answer;
	$optionA = $data->optionA;
	$optionB = $data->optionB;
	$optionC = $data->optionC;
	$optionD = $data->optionD;
 $optionC = $data->optionE;

	//sql  query
	$query = sprintf("UPDATE question SET idExam = '%d', statement = '%s'
	, answer = '%s' , optionA = '%s' , optionB = '%s', optionC = '%s'
	, optionD = '%s', optionE = '%s' WHERE idQuestion=%d",
		mysql_real_escape_string($name),
		mysql_real_escape_string($idQuestion));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"data" => array(
			"idQuestion" => $id,
				"idExam" => $idExam,
			"statement" => $statement,
			"answer" => $answer,
			"optionA" => $optionA,
			"optionB" => $optionB,
			"optionC" => $optionC,
			"optionD" => $optionD,
			"optionE" => $optionE
	  ));