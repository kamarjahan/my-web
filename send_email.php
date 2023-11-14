<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Change these email addresses to your admin email addresses
    $adminEmail = "ztenkammu@gmail.com, devourdevils@gmail.com";
    $subject = "New Contact Form Submission";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $mailBody = "Name: $name <br>";
    $mailBody .= "Email: $email <br>";
    $mailBody .= "Message: $message <br>";

    mail($adminEmail, $subject, $mailBody, $headers);
}
?>
