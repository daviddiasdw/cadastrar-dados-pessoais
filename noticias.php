<?php
session_start();
require 'db.php';
?>
<?php
    if (isset($_POST['usuario'])) {
        $sql = 'SELECT * FROM usuarios WHERE email = :email';
        $prep = $pdo->prepare($sql);
        $prep->bindValue(":email" , $_POST['usuario']);
        $prep->execute();
        $user = $prep->fetch();

//        print_r($user);
//        print_r($_SESSION['usuario']);

        if($user > 0){
            $_SESSION['usuario'] = $user['email'];
        }else {
            echo 'Login Invalido';
        }
    }elseif (isset($_POST['titulo'])){
         $sql = 'INSERT INTO noticia (titulo , conteudo) VALUES (' . $_POST['titulo'] . ', ' . $_POST['conteudo'] .')';
         $prep = $pdo;
    }
?>

<?php if (isset($_SESSION['usuario'])){ ?>
    <a>Inserir Notícia</a>
    <form class="form-group" method="POST" action="noticias.php">
        <input class="input-group mb-3" type="text" name="título">
        <input type="text" name="texto">
        <button type="submit">Enviar Notícia</button>
    </form>
    <a href="sair.php">sair</a>
<?php } else { ?>
    <a>Efetuar Login</a>
    <form class="form-group" method="POST" action="noticias.php">
        <input class="input-group" type="text" name="usuario">
        <input type="password" name="senha">
        <button type="submit">Login</button>
    </form>

<?php } ?>
<?
//} elseif (isset($_POST['titulo']) !empty($_POST['titulo'])){
//    $sql = "INSERT INTO noticia (titulo , conteudo) VALUES ('" . $_POST['titulo'] . "', '" . $_POST['conteudo'] ."')";
//    $result = mysqli_query($BD, $sql);
//} else {
//    echo 'erro';
//}
//
//?>