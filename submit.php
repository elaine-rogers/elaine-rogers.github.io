<?php

$message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $comment = $_POST['comment'] ?? '';
    $comment = htmlspecialchars($comment); // prevent HTML injection

    $message = "You entered: " . $comment;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Submit Comment</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php include 'navbar.php'; ?>
  <?php include 'footer.php'; ?>
</body>
</html>
