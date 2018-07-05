<?php
    include 'DBHelper.php';
    $indexid = isset($_GET['indexid']) ? $_GET['indexid'] : 0; 
    $sql = "select * from products where indexid = $indexid";
    $dataset = query_oop($sql);
    $data = json_encode($dataset,JSON_UNESCAPED_UNICODE);
    echo "$data";
?>