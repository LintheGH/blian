<?php
    include '../DBHelper.php';

    $sql = "select * from tmodel;";

    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>