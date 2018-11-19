<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";
    

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    echo "Connected successfully";
    $user = 'root';
    $password = 'root';
    $db = 'test_db';
    $host = 'localhost';
    $port = 8889;

    $link = mysql_connect(
        "$host:$port", 
        $user, 
        $password
            );
        $db_selected = mysql_select_db(
        $db, 
        $link
    );  
?>