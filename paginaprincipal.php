<?php
    session_start();
    include_once('conexao.php');
    // print_r($_SESSION);
    if((!isset($_SESSION['cpf']) == true)  and (!isset($_SESSION['senha']) == true))
    {
        unset($_SESSION['cpf']);
        unset($_SESSION['senha']);
        header('Location: login.php');
    }
    $logado = $_SESSION['cpf'];
    
    if(!empty($_GET['search']))
    {
        $data = $_GET['search'];
        $sql = "SELECT * FROM respondente WHERE id LIKE '%$data%' or nome LIKE '%$data%' or cpf LIKE '%$data%' ORDER BY id";
    }
    else
    {
        $sql = "SELECT * FROM respondente WHERE cpf LIKE '$logado' ";
    }
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();
    
        $nome = $row['nome'];
        $cpf = $row['cpf'];
        $email = $row['email'];
        $peso = $row['peso'];
        $altura = $row['altura'];
        $horasdesono = $row['horas_sono_dia'];



       




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina principal</title>
</head>
<body>
    <h1>Bem vindo a sua pagina, <?php echo $nome; ?></h1>

    <h2>Informações</h2>


    <li>
            <p>Email: <?php echo $email; ?></p>
    </li>
    <li>
            <p>Nome: <?php echo $nome; ?></p>
    </li>
    <li>
            <p>cpf: <?php echo $cpf; ?></p>
    </li>

    <li>
            <p>Peso: <?php echo $peso; ?></p>
    </li>
    <li>
            <p>Altura: <?php echo $altura; ?></p>
    </li>
    <li>
            <p>Horas de sono: <?php echo $horasdesono; ?></p>
    </li>










</body>
</html>