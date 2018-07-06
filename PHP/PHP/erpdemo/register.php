<?php
    include "../DBHelper.php";

	$email = $_POST["email"];
	$pwd = $_POST["password"];
	$phone = $_POST["phone"];

    //sql script可分为两类：1、逻辑型 2、查询型
	$sql = "insert into users(email, password, phone) values('$email', '$pwd', '$phone');";
    //sql 脚本 (sql script)
    $checkSql = "select * from users where email = '$email';";
    $array = query($checkSql);
    if(count($array) > 0){
        echo '{"state": false, "message": "email already exists!"}';
    } else{
        $result = excute($sql);
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "register fail!"}';
        }        
    }
    //初始化连接，返回一个连接对象(包含所连接数据库的信息)
    
    // $conn = mysqli_connect($servername,$username,$password,$dbname); 
    // if(mysqli_connect_error($conn)){
    // 	echo '{"state": false, "message":"' . mysqli_connect_error() . '"}';
    // } else {
    //     $jsonData = array();
    //     $dataSet = mysqli_query($conn, $checkSql);//查询型的结果为一个数据集
    //     //{indexid:21}
    //     while ($obj = mysqli_fetch_object($dataSet))
    //     {
    //         //$jsonData.push($obj)
    //         $jsonData[] = $obj;
    //         // print_r($obj->email);
    //     }

    //     if(count($jsonData) > 0){
    //         echo '{"state": false, "message": "email already exists!"}';
    //     } else{
    //     	$result = mysqli_query($conn, $sql); // 逻辑型的结果为布尔类型，
    //     	if($result){
    //     		echo '{"state": true}';
    //     	} else {
    //     		echo '{"state": false, "message": "register fail!"}';
    //     	}
    //     }
    // }
?>