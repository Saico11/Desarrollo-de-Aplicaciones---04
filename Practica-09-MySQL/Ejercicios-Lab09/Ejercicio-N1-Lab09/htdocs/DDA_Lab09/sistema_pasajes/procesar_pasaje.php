<?php
// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistema_pasaje";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$precio_base = $_POST['precio_base'];

// Calcular la edad del pasajero
$fecha_actual = date("Y-m-d");
$edad = date_diff(date_create($fecha_nacimiento), date_create($fecha_actual))->y;

// Determinar la categoría y el precio según la edad
if ($edad < 2) {
    $categoria = "Infante";
    $precio_final = 0;
} elseif ($edad >= 2 && $edad < 18) {
    $categoria = "Menor de edad";
    $precio_final = $precio_base * 0.75;
} else {
    $categoria = "Adulto";
    $precio_final = $precio_base;
}

// Insertar los datos en la tabla de pasajeros
$sql = "INSERT INTO pasajeros (nombre, fecha_nacimiento, categoria, precio) VALUES ('$nombre', '$fecha_nacimiento', '$categoria', '$precio_final')";

if ($conn->query($sql) === TRUE) {
    echo "Pasaje registrado exitosamente. Precio calculado: $" . $precio_final;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
