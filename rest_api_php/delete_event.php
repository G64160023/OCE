<?php
    include 'db_connect.php';
    $id=$_GET['id'];
	$q = mysqli_query($connect,"DELETE FROM event where id='$id'");
	
	$data=array(
		'message'=>'Delete Event Success',
		'status'=>'200'
	);
	echo json_encode($data);
?>