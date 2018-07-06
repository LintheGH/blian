<?php
	include 'DBHelper.php';

	session_start();

	$oldpassword = $_POST["oldpassword"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	$email = $_SESSION['login_email'];

	$sql = "select * from gz1610 where email = '$email'";
	$result = query($sql);
	if(count($result) > 0){
		if($result[0]->password == $oldpassword){
			//执行修改操作
			$update = "update gz1610 set password = '$password', phone = '$phone' where email = '$email'";
			if(excute($update)){
				echo "{state: true}";
			} else {
				echo "{state: false, message: '修改失败！！'}";
			}
		} else {
			echo "{state: false, message: '旧密码不正确！'}";
		}
	} else {
		echo "{state: false, message: '当前操作无效！！'}";
	}

	
?>