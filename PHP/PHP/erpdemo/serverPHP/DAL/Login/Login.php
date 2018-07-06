<?php
	function Login(user, pwd){
	    $sql = "select * from users where email = '$email' and password = '$pwd';";
	    $array = query($sql);
	    if(count($array) > 0){
	        session_start();
	        $_SESSION["email"] = $email;//session_id	    	
	        return '{"state": true}';
	    } else{
	        return '{"state": false, "message": "login fail!"}';       
	    }
	}
?>