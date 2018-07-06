<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "1000phone";
 
// mysqli, 面向对象
$conn = new mysqli($servername, $username, $password, $dbname);

 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
echo "连接成功";


/*
总的比较
							PDO				 MYSQLI
	数据库支持		12种不同的数据库支持	支持MYSQL
	API						OOP				OOP和过程
	命名参数				支持			  不支持
	对象映射支持			支持			   支持
	预处理					支持			  不支持
	支持存储过程			支持			   支持

连接方式
	PDO
	$pdo = new PDO("mysql:host=localhost;dbname=database", 'username', 'password'); 

	mysqli, 面向过程方式
	$mysqli = mysqli_connect('localhost','username','password','database');

	mysqli, 面向对象
	$mysqli = new mysqli('localhost','username','password','database');

ORM映射的支持
	class User{
		public $id; 
		public $first_name; 
		public $last_name; 
		public function info(){
			return '#'.$this->id.': '.$this->first_name.' '.$this->last_name;
		}
	}

	$query = "SELECT id, first_name, last_name FROM users";

	PDO：
	$result = $pdo->query($query);
	$result->setFetchMode(PDO::FETCH_CLASS, 'User');
	while ($user = $result->fetch()) {
		echo $user->info()."\n";
	})

	MYSQLI用面向过程的方式：
	if ($result = mysqli_query($mysqli, $query)) {
		while ($user = mysqli_fetch_object($result, 'User')) { 
			echo $user->info()."\n";
		}
	}

	MYSQLI采用面向过程的方式：
	if ($result = $mysqli->query($query)) {
		while ($user = $result->fetch_object('User')) { 
			echo $user->info()."\n"; 
		}
	}


防止SQL注入方面
	PDO 手工设置
	$username = PDO::quote($_GET['username']); 
	$pdo->query("SELECT * FROM users WHERE username = $username");

	使用mysqli
	$username = mysqli_real_escape_string($_GET['username']);
	$mysqli->query("SELECT * FROM users WHERE username = '$username'");

预处理和参数绑定
	PDO方式：
	$pdo->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
	$pdo->execute(array(':username' => $_GET['username'], ':password' => $_GET['password']));

	MYSQLI:
	$query = $mysqli->prepare('SELECT * FROM users WHERE username = ?');
	$query->bind_param('s', $_GET['username']); 
	$query->execute();

防止SQL注入方面
	PDO 手工设置
	$username = PDO::quote($_GET['username']);
	$pdo->query("SELECT * FROM users WHERE username = $username");

	使用mysqli
	$username = mysqli_real_escape_string($_GET['username']);
	$mysqli->query("SELECT * FROM users WHERE username = '$username'");
 */

?>