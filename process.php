
<?php
if (isset($_POST["nombres"])) {
    $nombre = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $correo = $_POST["correo"];
    $tipoDocumento = $_POST["tipoDocumento"];
    $ndocumento = $_POST["ndocumento"];
    $institucion = $_POST["institucion"];
    $ocupacion = $_POST["ocupacion"];
    $carta = $_POST["carta"];


    $consulta = "INSERT INTO invitados (nombre, apellido, correo, tipo_documento,n_documento,organizacion,ocupacion,carta_invitacion)VALUES('$nombre','$apellidos','$correo',$tipoDocumento,$ndocumento,$institucion,$ocupacion,$carta)";

    $conexion = new mysqli("localhost", "root", "", "monfu");

    $respuesta = new stdClass();

    if ($conexion->query($consulta)) {
        $respuesta->mensaje = "Se guardo correctamente";
    } else {
        $respuesta->mensaje = "Ocurrió un error";
    }
    echo json_encode($respuesta);
}
