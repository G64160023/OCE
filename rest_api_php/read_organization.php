<?php
	include 'db_connect.php';
	$q = mysqli_query($connect,"SELECT name,email,telephone FROM organization");
	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}

        $data=array(
		'message'=>'Get Organization Success',
		'data'=>$result_set,
		'status'=>'200'
	);
	echo json_encode($data);
?>