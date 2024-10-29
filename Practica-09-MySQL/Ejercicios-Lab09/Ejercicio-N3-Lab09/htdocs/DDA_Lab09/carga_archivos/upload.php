<?php
// Verificar si se ha enviado un archivo
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['archivo'])) {
    // Obtener el nombre del archivo y la especialidad
    $archivo = $_FILES['archivo'];
    $especialidad = $_POST['especialidad'];

    // Crear la carpeta de la especialidad si no existe
    $directorio = "uploads/" . $especialidad;
    if (!is_dir($directorio)) {
        mkdir($directorio, 0777, true);
    }

    // Ruta completa donde se guardará el archivo
    $ruta_archivo = $directorio . "/" . basename($archivo['name']);

    // Mover el archivo al directorio de la especialidad
    if (move_uploaded_file($archivo['tmp_name'], $ruta_archivo)) {
        echo "<script>
                alert('Archivo subido exitosamente a la carpeta " . $especialidad . "');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('Hubo un error al subir el archivo.');
                window.location.href = 'index.html';
              </script>";
    }
} else {
    echo "<script>
            alert('No se ha enviado ningún archivo.');
            window.location.href = 'index.html';
          </script>";
}
?>