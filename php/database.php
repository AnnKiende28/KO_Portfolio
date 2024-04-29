<?php
// Connect to the database
$servername = "localhost";
$username = "phpmyadmin";
$password = "!Linux2023@!W"
$dbname = "KO_Portfolio"

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Output data
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "0 results";
}

// Close connection
$conn->close();

?>