<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Vérifier que les champs ne sont pas vides
    if (empty($email) || empty($subject) || empty($message)) {
        echo "Tous les champs sont requis.";
        exit;
    }

    // Adresse email destinataire
    $to = "beni.ntambu@2028.ulc-icam.com"; 

    // Créer l'en-tête de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoyer l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès.";
    } else {
        echo "Échec de l'envoi de l'email.";
    }
} else {
    echo "Méthode de requête non valide.";
}
?>