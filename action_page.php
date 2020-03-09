<html>
<body>

<?php
$con = mysqli_connect("localhost", "root", ""); // Establishing Connection with Server
session_start();

if(!$con){
    die('Could not connect: ' . mysqli_error());
}

mysqli_select_db($con,"prestige-worldwide");

$sql="INSERT INTO newsletter (Name, email) VALUES ('$_POST[name]', '$_POST[mail]')";

if (!mysqli_query($con,$sql))
{
    die('Error: ' . mysqli_error());
}
echo "thank you";
mysqli_close($con)
?>
</body>
</html>
