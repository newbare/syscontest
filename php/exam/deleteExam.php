<?php
	//chama o arquivo de conexão com o bd
	include("../connect.php");

	$info = $_POST['data'];

	//$data = json_decode(stripslashes($info));
	$data = json_decode($info);

	$idExam = $data->idExam;

	//consulta sql
	$query = sprintf("DELETE FROM exam WHERE idExam=%d",
		mysql_real_escape_string($idExam));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
