<?php
    include 'DBHelper.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $indexids = isset($_GET['indexids']) ? $_GET['indexids'] : 0; 
    $length = count($indexids);
    $sql = "";
    for($x = 0;$x < $length;$x++){
        $sql .= " indexid= " .$indexids[$x] . " or ";
    }
    $sql = "select * from products where " .$sql;
    $sql =  substr($sql,0,strlen($sql)-4); 
    $dataset = query_oop($sql);
    $data = json_encode($dataset,JSON_UNESCAPED_UNICODE);
    echo "$data";
?>