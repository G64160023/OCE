<?php
  include 'db_connect.php';
    $id=$_GET['id'];
    $query_user=mysqli_query($connect, "SELECT * FROM organization WHERE org_id='$id'");
    if(mysqli_num_rows($query_user)){
    $postdata = file_get_contents("php://input");
    $name = "";
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
                $query_register = mysqli_query($connect, "UPDATE organization SET name='$name', password='$password', email='$email', telephone='$telephone' WHERE org_id='$id'");
                // Check if query executed successfully if not send a 404 status code
                if($query_register){
                //Masukan data ke variable row biat 
                $query_select = mysqli_query($connect, "SELECT * FROM organization WHERE org_id='$id'");
                $row = mysqli_fetch_assoc($query_select);
                    $data =array(
                        'message' => "Update Profil Success",
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
        }
        echo json_encode($data);
    
?>