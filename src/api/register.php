<?php
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
	header('Access-Control-Request-Headers:accept, content-type');
	include 'DBHelper.php';
	$username = $_POST["username"];
	$password = $_POST["pwd"];
	$phone = $_POST["phone"];
	//判断当前 username 是否已存在数据表中
	$usernameCheck = "select * from users where `username` ='$username'";
	$result = query_oop($usernameCheck);

	//当前 username 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into users(username, password, phone) values('$username', '$password', '$phone')";
		// echo $sql;
		$excute = excute_oop($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'username 已被注册！！！'}";
	}
?>