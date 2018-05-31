<?php
  include 'db_connect.php';
    $id=$_GET['id'];
    $query_user = mysqli_query($connect, "SELECT * FROM event WHERE id='$id'");    
    if(mysqli_num_rows($query_user)){
    $postdata = file_get_contents("php://input");
    $event_name ="";
    $date_start= "";
    $date_end = "";
    $hour = "";
    $location="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $event_name = $request->event_name;
        $date_start = $request->date_start;
        $date_end = $request->date_end;
        $hour = $request->hour;
        $location=$request->location;
        if($request){
            $query_register = mysqli_query($connect, "UPDATE event SET event_name='$event_name', date_start='$date_start', date_end='$date_end', hour='$hour',location='$location' WHERE id='$id'");
                // Check if query executed successfully if not send a 404 status code
            if($query_register){
            //Masukan data ke variable row biat 
            $query_select = mysqli_query($connect, "SELECT * FROM event WHERE id='$id' ");
                $row = mysqli_fetch_assoc($query_select);
                    $data =array(
                        'message' => "UPDATE Event Success",
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
            }
            echo json_encode($data);
        }

    
?>