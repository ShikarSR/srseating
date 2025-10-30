<?php
header('Content-Type: application/json; charset=UTF-8');

echo json_encode([
  'status'  => 'ok',
  'message' => 'SR Seating OTP API is running',
  'time'    => date('c'),
]);
