<?php
echo "hello";
$username='root';
$pass='';
$hostname='localhost';
$database='food_nutriee';
$conn=mysqli_connect($hostname,$username,$pass,$database)or die('database connection error');
?>