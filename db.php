<?php
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=blog_php', 'root', '');
    }catch(PDOException $e){
        echo $e->getMessage();
    }

?>