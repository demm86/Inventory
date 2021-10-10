<?php

require("../conf/SiteSql.inc.php");

$db = new SiteSQL();

$query =$_GET['query'];

$data =$db->getSearch($query);
echo json_encode($data) ;

?>