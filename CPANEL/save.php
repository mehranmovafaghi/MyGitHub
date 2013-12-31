<?php
$myfile = "Testfile.txt";
$fh = fopen($myfile, 'a') or die("CANNOT OPEN FILE");
$fname = $_POST["fname"];
$Lname = $_POST["Lname"];
$phnum = $_POST["phnum"];
$DATA = $fname . " " . $Lname . " " . "$phnum" . "\n";
fwrite($fh, $DATA);
fclose($fh);
header("Location: http://192.168.1.83/index.html");
?>

