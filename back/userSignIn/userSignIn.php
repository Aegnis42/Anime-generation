<?php

require_once 'PDOConnection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm_password'];

    if ($password !== $confirmPassword) {
        echo 'Les mots de passe ne correspondent pas';
        return;
    }

    $conn = PDOConnection::getInstance();

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        $stmt = $conn->prepare('INSERT INTO users (username, email, password) VALUES (:username, :email, :password)');
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->execute();

        echo 'Utilisateur enregistré avec succès';
    } catch(PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
}
?>