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

      $serverName = "dbkodigo.cnuhw09y2hfd.us-east-2.rds.amazonaws.com"; //serverName\instanceName

      // Since UID and PWD are not specified in the $connectionInfo array,
      // The connection will be attempted using Windows Authentication.
      $connectionInfo = array("Database" => "inventory", "UID" => "webuser", "PWD" => "webUser123@");


      $db = self::getInstance();
    

      $db->dbConn = sqlsrv_connect($serverName, $connectionInfo);
   
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
      $results = sqlsrv_query($conn, $sql);

      if ((!$results) or (empty($results))) {
         return false;
      }
      $count = 0;
      $data = array();
      while ($row = sqlsrv_fetch_array($results)) {
         $data[$count] = $row;
         $count++;
      }
      return $data;
   }
}