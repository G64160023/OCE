<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $user_id ="";
    $organization_id="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $event_name = $request->event_name;
        $user_id=$request->user_id;
        $organization_id=$request->organization_id;
        if($request){
            $query_register = mysqli_query($connect, "INSERT INTO member (user_id,organization_id) VALUES ('$user_id', '$organization_id')");
                // Check if query executed successfully if not send a 404 status code
            if($query_register){
            //Masukan data ke variable row biat 
            $query_select = mysqli_query($connect, "SELECT * FROM member");
                $row = mysqli_fetch_assoc($query_select);
                    $data =array(
                        'message' => "Add Event Success",
                        'data' => $row, //Yang bikin Fadli susah tidur
                        'status' => "200"
                    );
                }
                else{
                    $data =array(
                        'message' => "Failed",
                        'status' => "404"
                    );
                }
            }

            echo json_encode($data);
        }

    
?>