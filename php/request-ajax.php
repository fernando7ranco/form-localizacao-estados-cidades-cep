<?php
	
$acao = isset($_POST['acao']) ? $_POST['acao'] : null;

if ($acao == 'cidadesEstados') {

    require_once 'matrizEstadosCidades.php';

    echo json_encode([$estados, $cidades]);
    exit;
}
