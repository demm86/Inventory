<?php

require("../conf/SiteSql.inc.php");

$db = new SiteSQL();

$ProductId =$_GET['ProductId'];

$data =$db->getProductBoxDetails($ProductId);
echo json_encode($data) ;

?>