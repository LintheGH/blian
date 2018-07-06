<?php
    include 'DBHelper.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $indexid = isset($_GET['indexid']) ? $_GET['indexid'] : 0; 
    $sql = "select * from products where indexid = $indexid";
    $dataset = query_oop($sql);
    $data = json_encode($dataset,JSON_UNESCAPED_UNICODE);
    echo "$data";
?>