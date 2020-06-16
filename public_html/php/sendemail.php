<?php

include("connect.php");//contains all passwords.

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

       
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
$to = "jcremades93@gmail.com, boby2@boboby.com";
mail($to,"My subject anonymous email",$msg);
echo "email message: ". $msg;

?>
