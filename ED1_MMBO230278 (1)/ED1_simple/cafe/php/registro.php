<?php
// registro.php: recibe los datos del formulario (método POST)
$nombre = htmlspecialchars($_POST['txtnom'] ?? '');
$apellidos = htmlspecialchars($_POST['txtapp'] ?? '');
$correo = htmlspecialchars($_POST['txtmail'] ?? '');
$telefono = htmlspecialchars($_POST['txttel'] ?? '');
$comentarios = htmlspecialchars($_POST['txtcom'] ?? '');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos recibidos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-5">
    <div class="alert alert-success">¡Datos recibidos correctamente!</div>
    <ul class="list-group mb-3">
        <li class="list-group-item"><b>Nombre:</b> <?php echo $nombre . ' ' . $apellidos; ?></li>
        <li class="list-group-item"><b>Correo:</b> <?php echo $correo; ?></li>
        <li class="list-group-item"><b>Teléfono:</b> <?php echo $telefono; ?></li>
        <li class="list-group-item"><b>Comentarios:</b> <?php echo $comentarios; ?></li>
    </ul>
    <a href="../index.html">&larr; Volver</a>
</body>
</html>
