<?php

include("../conf/const.inc.php");

class DBSQL
{


   private static $instance;
   private $dbConn;
/*
   function DBSQLN()
   {


     
      $conn = sqlsrv_connect($serverName, $connectionInfo);

      if ($conn) {

         echo "Connection established.<br />";
      } else {
         echo "Connection could not be established.<br />";
         die(print_r(sqlsrv_errors(), true));
      }

      $this->CONN = $conn;
      return true;
   }
*/

   private static function getInstance(){
      if (self::$instance == null){
          $className = __CLASS__;
          self::$instance = new $className;
      }

      return self::$instance;
  }



   private static function initConnection()
   {

      $serverName = "dbkodigo.cnuhw09y2hfd.us-east-2.rds.amazonaws.com"; //serverName\instanceName

      // Since UID and PWD are not specified in the $connectionInfo array,
      // The connection will be attempted using Windows Authentication.
      $connectionInfo = array("Database" => "inventory", "UID" => "webuser", "PWD" => "webUser123@");

    


      $db = self::getInstance();

      $conn = new PDO( "sqlsrv:server=$serverName ; Database=inventory", "webuser", "webUser123@");  
      $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION ); 
    

      $db->dbConn = $conn;
   
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
      //$params = array($_POST['query']);

      $conn = $this->getDbConn();
      $results = $conn->prepare($sql);  
      $results->execute(); 
      $results = $results->fetchAll(PDO::FETCH_ASSOC);
     

      if ((!$results) or (empty($results))) {
         return false;
      }
   
      return $results;
   }
}

