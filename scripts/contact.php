<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="fa" />
<title>:: contact result ::</title>
<style type="text/css">
    html,body{direction:rtl;font:.9em/1.6em tahoma;}
</style>
</head>
<body>
<?php

    // error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
    // ini_set('display_errors', 1);

    if($_POST['Name'] && !empty($_POST['Name'])) {
        $name = $_POST['Name'];
    }
    if($_POST['E-Mail'] && !empty($_POST['E-Mail'])) {
        $from = $_POST['E-Mail'];
    }
    if($_POST['Message'] && !empty($_POST['Message'])) {
        $message = $_POST['Message'];
    }

    require("phpmailer.php");
    include("smtp.php");

    if($name && $from && $message) {
        $mail= new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth=true;
    
        $mail->Host = "mail.filmkhanehmag.com";
        $mail->Username = "feedback@filmkhanehmag.com";
        $mail->Password = "FEED@nn1395";
        $mail->AddAddress('sadeq.sp@gmail.com', "filmkhanehmag / WEBSITE");
    
        $mail->SetFrom("feedback@filmkhanehmag.com", $name);
        $mail->AddReplyTo($from, $name);
        $mail->IsHTML(true);
    
        $body = '<html><body>';
        $body .= '<p style="direction:rtl;font-family:tahoma;">name: '.$name.'</p>';
        $body .= '<p style="direction:rtl;font-family:tahoma;">e-mail: '.$from.'</p>';
        $body .= '<p style="direction:rtl;font-family:tahoma;">message: '.$message.'</p>';
        $body .= "</body></html>";
        $mail->MsgHTML($body);
        $mail->AltBody= $message;
    
        if(!$mail->Send()) {
            echo "ERROR » " . $mail->ErrorInfo;
        } else {
            echo "SEND";
        }
    } else {
        echo "<p style='direction: ltr;'>Something is missing! <br> Please go <a href='../  contact.html'>back</a> and fill out the required fields!</p>";
    }
    
?>
</body>
</html=>

