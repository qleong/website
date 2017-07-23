<?php
session_start();
if(isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['msg']))
{
	$name=$_POST['name'];
	$to=$_POST['mail'];
	$message=$_POST['msg'];
	
	if (!$name) {
	  $errmsg[] = '<p>Please enter Name</p>';
	 }
	if (!$to) {
	  $errmsg[] = '<p>Please enter email address</p>';
	 }
	else if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
	  $errmsg[] = '<p>Please enter a valid email address</p>';
	} 
	if (!$message) {
	  $errmsg[] = '<p>Please enter Message</p>';
	 }
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	$subject="New Contact";
	$toEmail="mroloff09@gmail.com";
	// More headers
	$headers .= 'From: <info@steezz.com>' . "\r\n";
	$msg="From : ".$name."<br/>";
	$msg.="Email :".$to."<br/>";
	$msg.="Message :".$message."<br/>";
	if(empty($errmsg)){
		
		if(mail($toEmail,$subject,$msg,$headers))
		{
			$result='<div class="alert alert-success"><p>Successful</p></div>';
			$data = array(
			'status' => 'success',
			'msg' => $result
			);
		}
		else
		{
			$result='<div class="alert alert-danger"><p>Mail is not send.Error Occured</p></div>';
			$data = array(
				'status' => 'error',
				'msg' => $result
			);
		}
	}
	else
	{
		$errors=implode(' ',$errmsg);
		$result='<div class="alert alert-danger">'.$errors.'</div>';
		$data = array(
			'status' => 'error',
			'msg' => $result
		);
	}
	
	echo json_encode($data);
}
?>