<?php

require("../conf/SiteSql.inc.php");

$db = new SiteSQL();
$data =$db->getProductList();
echo json_encode($data) ;

?>