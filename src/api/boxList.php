<?php

require("../conf/SiteSql.inc.php");

$db = new SiteSQL();
$data =$db->getBoxList();
echo json_encode($data) ;

?>