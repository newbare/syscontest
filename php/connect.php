<?php

//server name
$server = "localhost";

// database user name
$user = "root";

//database password
$password = '1234';

//database name
$dbName = 'syscontest';

$connection = mysql_connect($server, $user, $password) or die (mysql_error());


$database = mysql_select_db($dbName, $connection) or die (mysql_error());

