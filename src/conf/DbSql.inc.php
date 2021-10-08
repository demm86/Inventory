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

      $serverName = "LAPTOP-JTI57GQK\SQLEXPRESS"; //serverName\instanceName

      // Since UID and PWD are not specified in the $connectionInfo array,
      // The connection will be attempted using Windows Authentication.
      $connectionInfo = array("Database" => "inventory", "UID" => "test", "PWD" => "test");


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
