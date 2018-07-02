<!DOCTYPE html> 
<html> 
<body> 

<h1>function</h1> 

<?php
	// function writeName()
	// {
	// 	echo "DK.Lan";
	// }

	// echo "My name is ";
	// writeName();

	function writeName($fname)
	{
		echo $fname . " Refsnes.<br>";
	}

	echo "My name is ";
	writeName("Kai Jim");
	echo "My sister's name is ";
	writeName("Hege");
	echo "My brother's name is ";
	writeName("Stale");	
?>

</body> 
</html>