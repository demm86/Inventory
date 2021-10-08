<?php

require("DbSql.inc.sql.php");

Class SiteSQL extends DBSQL
{
   // the constructor
   function SiteSQL()
   {  }
   
  	
 	function getBoxList()
   {      
      $sql = "EXEC BoxList";
      $result = $this->select($sql);      
      return $result;
   }  

   function getBoxProductDetails($BoxId,$ProductId)
   {      
      $sql = "EXEC BoxProductDetails $BoxId, $ProductId";
      $result = $this->select($sql);      
      return $result;
   }  


   function getProductList()
   {      
      $sql = "EXEC ProductList";
      $result = $this->select($sql);      
      return $result;
   }  

   function getProductBoxDetails($ProductId)
   {      
      $sql = "EXEC ProductBoxDetails $ProductId";
      $result = $this->select($sql);      
      return $result;
   }  
      
}

?>