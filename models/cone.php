<?php




$ipBD = "localhost";
$nombreBD = "monfu";
$usuarioBD = "root";
$passBD = "";
try {
    $oConBD = new PDO("mysql:host=" . $ipBD . ";dbname=" . $nombreBD, $usuarioBD, $passBD);
    echo "conexion exitosa";
    return true;
} catch (PDOException $e) {
    echo "Error al conectar a la base de datos: " . $e->getMessage() . "\n";
    return false;
}
