
<?php
include('conexao.php');
if(isset($_POST['email']) || isset($_POST['senha'])){
    $email = $mysqli->real_escape_string($_POST['email']);
    
    $sql_code = "SELECT * FROM respondente WHERE email = '$email'";
    $sql_query = $mysqli->query($sql_code) or die ("Falha na execução do código SQL: " . $mysqli->error);

    $quantidade = $sql_query->num_rows;

    if($quantidade == 1){
        
        $usuario = $sql_query->fetch_assoc();
        
        if(!isset($_SESSION)){
            session_start();
        }
        $_SESSION['id']=$respondente['id'];
        $_SESSION['nome']=$respondente['nome'];

        


    } else {
        echo "email ou senha incorretos! Verifique e tente novamente!";
    }


}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="login.css">
    <title> Web 1 </title>
</head>
<body>
    <div class="container">
       
        <div class="fora_login">
            <div class="loginform">   
                <h2>Login</h2>
                <form method="POST" action="paginaprincipal.php">
                    <label for="cpfOuEmail">CPF ou E-mail:</label>
                    <input type="email" id="cpfOuEmail" name="email" required><br><br>
                    <button type="submit">Enviar</button>
                </form>   
            </div>  
        </div>
    </div>
</body> 
</html>