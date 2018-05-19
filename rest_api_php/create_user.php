<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $name ="";
    $password = "";
    $email = "";
    $telephone = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name = $request->name;
        $password = $request->password;
        $email = $request->email;
        $telephone = $request->telephone;
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO user (name, password, email, telephone) VALUES ('$name', '$password', '$email', '$telephone') ");
            if($query_register){
         
                 $data =array(
                     'message' => "Register Success!",
                     'data'=>"$request",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404"
                 ); 
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data.message);
        echo json_encode($data.status);
    }
?>