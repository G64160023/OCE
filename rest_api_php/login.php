<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $password = "";
    $passhash = "";
    $email = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $password = $request->password;
        $email = $request->email; 
        $passhash = md5($password);
    }   
        if($request){
            $query_regis = mysqli_query($connect, "SELECT * FROM user WHERE email='$email' AND password='$passhash'");
            if(mysqli_num_rows($query_regis)){
                $row = mysqli_fetch_assoc($query_select);
                $data =array(
                    'message' => "Login Success",
                    'data' => $row, //Yang bikin Fadli susah tidur
                    'status' => "200"
                ); 
            }
            else{
                $data =array(
                    'message' => "Login Failed",
                    'status' => "404"
                );
            }
            
        echo json_encode($data);
    }

?>