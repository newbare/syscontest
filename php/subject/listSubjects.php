<?php

 include('../connect.php');
 
  $start = $_REQUEST['start'];
  $limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM subject LIMIT $start,  $limit";

	//sql query
	$query = mysql_query($queryString) or die(mysql_error());

	//looping
	$subjects = array();
	while($subject = mysql_fetch_assoc($query)) {
	    $subjects[] = $subject;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM subject') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encode to JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"data" => $subjects
	));