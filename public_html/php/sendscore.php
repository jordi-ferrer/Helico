<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>TODO write content</div>
        
        
        <?php
        //for sending emails
	// the message
        $msg = "First line of text\nSecond line of text";

        // use wordwrap() if lines are longer than 70 characters
        $msg = wordwrap($msg,70);

        // send email
        $to = "boby@boboby.com, boby2@boboby.com";
        mail($to,"My subject anonymous email",$msg);

	?>
        
        <div>Yoyowww - yowyiii...</div>
        
   <?php

    $servername = "localhost";
    $username = "root@localhost"; // id12095050_roma 
    $password = "";                 //Joricopter_3
    $database = "test"; //id12095050_articlesdstuds

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM helicorder_users1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo $row["user"]. "<sep>" . $row["email"]. "<sep>" . $row["TIMESTAMP"]. "<sep>". $row["comment"];
        }
    } else {
        echo "0 results";
    }
    $conn->close();


?>
    </body>
</html>
