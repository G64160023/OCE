<?php
	include 'db_connect.php';
        $id = $_GET['id'];
	$q = mysqli_query($connect,"SELECT  FROM event E JOIN Organization O WHERE E.org_id=O.org_id && E.org_id != '$id'");
	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}
        $data=array(
		'message'=>'Get Event Success',
		'data'=>$result_set,
		'status'=>'200'
	);
	echo json_encode($data);
?>