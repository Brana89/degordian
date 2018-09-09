<?php
  if(isset($_POST['submit'])) {
    $email=$_POST['email'];
    $msg=$_POST['msg'];

    $to='branislavcavic@yahoo.com';
    $subject='Poslata forma';
    $message="Tekst poruke: "."\n\n".$msg;
    $headers="Od: ".$email;

    if(mail($to, $subject, $message, $headers)) {
      header('Location: zahvalnica.html');
    } else {
      header('Location: greska.html');
    }
  }

?>