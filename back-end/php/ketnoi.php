<?php
    /**
     * Name:Nguyễn Văn Đạt
     * Date:2019/03/05
     * Công việc: Viết lớp Connection
     */
class KetNoi
{
    private $conn;
    public function __construct()
    {
        try {
            
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "db_alov";
            
            $this->conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    public function prepareSql($sql)
    {
        return $this->conn->prepare($sql);
    }
    public function fetchModeAssoc($sql)
    {
        $fet = $this->prepareSql($sql);
        $fet->setFetchMode(PDO::FETCH_ASSOC);
        return $fet;
    }
    public function exe($sql)
    {
        $stmt=$this->fetchModeAssoc($sql);
        $stmt->execute();
        return $stmt;
    }
}

