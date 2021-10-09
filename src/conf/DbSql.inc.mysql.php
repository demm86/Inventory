<?php

include("../conf/const.inc.php");

class DBSQL
{


   private static $instance;
   private $dbConn;

   private static function getInstance(){
      if (self::$instance == null){
          $className = __CLASS__;
          self::$instance = new $className;
      }

      return self::$instance;
  }



   private static function initConnection()
   {


      $db = self::getInstance();
    

      $db->dbConn = mysqli_connect('inventory.cnuhw09y2hfd.us-east-2.rds.amazonaws.com:3306', 'webuser', 'webuser123@');
   
      return $db;
   }

   /**FF
    * @return mysqli
    */
   public static function getDbConn()
   {
      try {
         $db = self::initConnection();
         return $db->dbConn;
      } catch (Exception $ex) {
         echo "I was unable to open a connection to the database. " . $ex->getMessage();
         return null;
      }
   }

   function select($sql = "")
   {

      if (empty($sql)) return false;

      $conn = $this->getDbConn();
      $results = mysqli_query($conn, $sql);

      if ((!$results) or (empty($results))) {
         return false;
      }
   
      $data = array();
      while ($row = mysqli_fetch_assoc($results)) {
         array_push($data,$row);
      }
      return $data;
   }
}