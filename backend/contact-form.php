<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allowed origins list
$allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost',
    'http://127.0.0.1',
    'https://srseating.com',
    'https://www.srseating.com',
    'http://134.209.144.29',
];

// Get the origin of the request
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

// Check if origin is in the allowed list
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

include('config.php');

function findFirstExistingColumn(mysqli $conn, string $table, array $candidates): ?string
{
    $result = $conn->query("SHOW COLUMNS FROM `$table`");
    if (!$result) {
        return null;
    }

    $columns = [];
    while ($row = $result->fetch_assoc()) {
        $columns[] = $row['Field'];
    }

    foreach ($candidates as $candidate) {
        if (in_array($candidate, $columns, true)) {
            return $candidate;
        }
    }

    return null;
}

$data = json_decode(file_get_contents('php://input'));

if (!$data) {
    echo json_encode(['error' => 'No data received']);
    exit;
}

$name = $conn->real_escape_string($data->name ?? '');
$email = $conn->real_escape_string($data->email ?? '');
$phone = $conn->real_escape_string($data->phone ?? '');
$companyname = $conn->real_escape_string($data->companyname ?? '');
$message = $conn->real_escape_string($data->message ?? '');
$choosesolution = $conn->real_escape_string($data->choosesolution ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['error' => 'Required fields missing']);
    exit;
}

$timestampColumn = findFirstExistingColumn($conn, 'contacts', [
    'created_at',
    'registered_at',
    'submitted_at',
    'created_on',
    'createdon',
    'date_created',
    'createdAt',
    'timestamp',
]);

$insertColumns = [
    '`name`',
    '`email`',
    '`phone`',
    '`companyname`',
    '`message`',
    '`choosesolution`',
];

$insertValues = [
    "'$name'",
    "'$email'",
    "'$phone'",
    "'$companyname'",
    "'$message'",
    "'$choosesolution'",
];

if ($timestampColumn) {
    $insertColumns[] = "`$timestampColumn`";
    $insertValues[] = 'NOW()';
}

$query = sprintf(
    'INSERT INTO contacts (%s) VALUES (%s)',
    implode(', ', $insertColumns),
    implode(', ', $insertValues)
);

file_put_contents(__DIR__ . '/debug_contact.txt', $query . PHP_EOL, FILE_APPEND);

if ($conn->query($query) === true) {
    echo json_encode(['message' => 'Form submission successful']);
} else {
    echo json_encode(['error' => 'Database insert failed: ' . $conn->error]);
}

$conn->close();
?>
