<?php
// Definir el tamaño de la matriz cuadrada
$tamano = 3; // Puedes cambiar este valor para matrices de otros tamaños

// Función para generar una matriz cuadrada aleatoria
function generar_matriz_aleatoria($tamano) {
    $matriz = [];
    for ($i = 0; $i < $tamano; $i++) {
        for ($j = 0; $j < $tamano; $j++) {
            // Generar un valor aleatorio entre 1 y 9
            $matriz[$i][$j] = rand(1, 9);
        }
    }
    return $matriz;
}

// Función para imprimir la matriz en pantalla
function imprimir_matriz($matriz) {
    foreach ($matriz as $fila) {
        echo implode(" ", $fila) . "<br>";
    }
}

// Función para verificar si una matriz es "perfecta"
function es_matriz_perfecta($matriz, $tamano) {
    // Verificar filas
    for ($i = 1; $i < $tamano; $i++) {
        if ($matriz[$i] !== $matriz[0]) {
            return false; // Si una fila es distinta, no es perfecta
        }
    }

    // Verificar columnas
    for ($j = 0; $j < $tamano; $j++) {
        for ($i = 1; $i < $tamano; $i++) {
            if ($matriz[$i][$j] !== $matriz[0][$j]) {
                return false; // Si una columna es distinta, no es perfecta
            }
        }
    }

    return true;
}

// Generar la matriz aleatoria
$matriz = generar_matriz_aleatoria($tamano);

// Imprimir la matriz
echo "<h3>Matriz Generada:</h3>";
imprimir_matriz($matriz);

// Verificar si es perfecta y mostrar el resultado
if (es_matriz_perfecta($matriz, $tamano)) {
    echo "<p>La matriz es perfecta.</p>";
} else {
    echo "<p>La matriz no es perfecta.</p>";
}
?>
