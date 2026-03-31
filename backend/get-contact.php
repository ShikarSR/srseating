<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include('config.php');

function getExistingColumns(mysqli $conn, string $table): array
{
    $result = $conn->query("SHOW COLUMNS FROM `$table`");
    if (!$result) {
        return [];
    }

    $columns = [];
    while ($row = $result->fetch_assoc()) {
        $columns[] = $row['Field'];
    }

    return $columns;
}

function findFirstExistingColumn(array $columns, array $candidates): ?string
{
    foreach ($candidates as $candidate) {
        if (in_array($candidate, $columns, true)) {
            return $candidate;
        }
    }

    return null;
}

$columns = getExistingColumns($conn, 'contacts');
$timestampColumn = findFirstExistingColumn($columns, [
    'created_at',
    'registered_at',
    'submitted_at',
    'created_on',
    'createdon',
    'date_created',
    'createdAt',
    'timestamp',
]);
$idColumn = findFirstExistingColumn($columns, ['id', 'contact_id']);

$selectFields = ['contacts.*'];
if ($timestampColumn) {
    $selectFields[] = "contacts.`$timestampColumn` AS created_at";
}

$query = 'SELECT ' . implode(', ', $selectFields) . ' FROM contacts';
if ($timestampColumn) {
    $query .= " ORDER BY contacts.`$timestampColumn` DESC";
} elseif ($idColumn) {
    $query .= " ORDER BY contacts.`$idColumn` DESC";
}

$result = $conn->query($query);
$contacts = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $contacts[] = $row;
    }
}

echo json_encode($contacts);

$conn->close();
?>
