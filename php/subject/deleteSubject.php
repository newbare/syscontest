<?php
	//chama o arquivo de conexão com o bd
	include("../connect.php");

	$info = $_POST['data'];

	$data = json_decode($info);

	$id = $data->idSubject;

	//consulta sql
	$query = sprintf("DELETE FROM subject WHERE idSubject=%d",
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
