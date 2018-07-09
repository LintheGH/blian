<?php
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include "DBHelper.php";

    session_start();
    $cookie = isset($_POST["iteminfo"]) ? $_POST["iteminfo"] : "{}";
    if(!isset($_SESSION["login_username"])){
        die("{state:false,message:'请登录'}");
    }
    $username = $_SESSION['login_username'];
    
    $sql = "insert into car (iteminfo,username) values('$cookie','$username')";
    $data = excute_oop($sql);
    if($data){
        echo"{state:true,message:'结算成功'}";
    }else{
        echo"{state:false,message:'网络出错啦~~'}";
    }

?>