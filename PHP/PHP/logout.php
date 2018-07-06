<?php
	session_start();
	
	if(isset($_SESSION['login_email'])){
		unset($_SESSION['login_email']);
		header("Location: login.html");
	}
?>