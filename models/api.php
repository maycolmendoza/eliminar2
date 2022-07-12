<?php include_once('cone.php');




$statement = $oConBD->prepare("SELECT * FROM participantes");
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
