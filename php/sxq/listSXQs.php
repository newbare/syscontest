<?php

 include('../connect.php');
 
  $start = $_REQUEST['start'];
  $limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM subject_question LIMIT $start,  $limit";


	//sql query
	$query = mysql_query($queryString) or die(mysql_error());

// ... array query
	$sxqs = array();
	while($sxq = mysql_fetch_assoc($query)) {
	    $sxqs[] = $sxq;
	}

	//total lines from table
	$queryTotal = mysql_query('SELECT count(*) as num FROM subject_question') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encode to JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"data" => $sxqs
	));