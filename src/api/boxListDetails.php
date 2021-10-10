<?php

require("../conf/SiteSql.inc.php");

$BoxId = $_GET['BoxId'];
$ProductId = $_GET['ProductId'];

$db = new SiteSQL();
$data = $db->getBoxProductDetails($BoxId, $ProductId);
echo json_encode($data);
