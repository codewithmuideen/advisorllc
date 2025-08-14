<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if form data is received via POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize inputs
    $name  = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);

    // Validate inputs
    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid name or email."]);
        exit;
    }

    // Recipient
    $to = "info@globalcareeradvisorllc.com";

    // Email subject
    $subject = "New Resource Request from Website";

    // Email body
    $message = "You have received a new resource request.\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";

    // Email headers
    $headers  = "From: no-reply@globalcareeradvisorllc.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>