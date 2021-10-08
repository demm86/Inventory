<?php
$serverName = "LAPTOP-JTI57GQK\SQLEXPRESS"; //serverName\instanceName

// Since UID and PWD are not specified in the $connectionInfo array,
// The connection will be attempted using Windows Authentication.
$connectionInfo = array( "Database"=>"inventory","UID"=>"test", "PWD"=>"test");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
     echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}


$sql = "EXEC  BoxList";

$results = sqlsrv_query($conn,$sql);


while( $row = sqlsrv_fetch_array( $results, SQLSRV_FETCH_ASSOC) ) {
    echo $row['BoxCode'].", ".$row['BoxCode']."<br />";
}
     



?>