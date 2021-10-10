<?php

require("DbSql.inc.mysql.php");

Class SiteSQL extends DBSQL
{
   // the constructor
   function SiteSQL()
   {  }
   
  	
 	function getBoxList()
   {      
      $sql = "Call Inventory.BoxList";
      $result = $this->select($sql);      
      return $result;
   }  

   function getBoxProductDetails($BoxId,$ProductId)
   {      
      $sql = "Call Inventory.BoxProductDetails($BoxId, $ProductId)";
      $result = $this->select($sql);      
      return $result;
   }  


   function getProductList()
   {      
      $sql = "Call Inventory.ProductList();";
      $result = $this->select($sql);      
      return $result;
   }  

   function getProductBoxDetails($ProductId)
   {      
      $sql = "Call Inventory.ProductBoxDetails($ProductId);";
      $result = $this->select($sql);      
      return $result;
   }  

   function getSearch($query)
   {      

      $sql = "Call Inventory.searchProducts('$query');";
      $result = $this->select($sql);      
      return $result;
   }  
      
      
}

?>