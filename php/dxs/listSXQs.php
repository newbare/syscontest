<?php

 include('../connect.php');
 
  $start = $_REQUEST['start'];
  $limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM discipline_subject LIMIT $start,  $limit";


	//sql query
	$query = mysql_query($queryString) or die(mysql_error());

// ... array query
	$dxss = array();
	while($dxs = mysql_fetch_assoc($query)) {
	    $dxss[] = $dxs;
	}

	//total lines from table
	$queryTotal = mysql_query('SELECT count(*) as num FROM discipline_subject') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encode to JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"data" => $dxss
	));