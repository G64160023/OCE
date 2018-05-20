<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $name ="";
    $password = "";
    $passhash = "";
    $email = "";
    $telephone = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $name = $request->name;
        $password = $request->password;
        $email = $request->email;
        $telephone = $request->telephone;
        
        $passhash = md5($password);
        
        if($request){
            $query_regis = mysqli_query($connect, "SELECT * FROM user WHERE email='$email'");
            if(mysqli_num_rows($query_regis)){
              $data =array(
                  'message' => "Email or Username Already Taken!",
                  'status' => "409"
              );
            }
            else {
                $query_register = mysqli_query($connect, "INSERT INTO user (name, password, email, telephone) VALUES ('$name', '$passhash', '$email', '$telephone')");
                // Check if query executed successfully if not send a 404 status code
                if($query_register){
                //Masukan data ke variable row biat 
                $query_select = mysqli_query($connect, "SELECT * FROM user WHERE email='$email' AND password='$password'");
                $row = mysqli_fetch_assoc($query_select);
                    $data =array(
                        'message' => "Register Success",
                        'data' => $row, //Yang bikin Fadli susah tidur
                        'status' => "200"
                    );
                }
                else{
                    $data =array(
                        'message' => "Register Failed",
                        'status' => "404"
                    );
                }
            }

        }
        echo json_encode($data);
    }
?>