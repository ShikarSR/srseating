<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// ✅ Allow all origins
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// ✅ Handle preflight (OPTIONS) request immediately
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ✅ Include DB connection
include('config.php');

// ✅ Fetch contacts
$query = "SELECT * FROM contacts";
$result = $conn->query($query);

$contacts = [];

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $contacts[] = $row;
    }
    echo json_encode($contacts);
} else {
    echo json_encode([]);
}

$conn->close();
?>
