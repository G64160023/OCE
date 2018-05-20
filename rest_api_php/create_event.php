<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $event_name ="";
    $date_start= "";
    $date_end = "";
    $hour = "";
    $location="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $event_name = $request->name;
        $date_start = $request->date_start;
        $date_end = $request->date_end;
        $hour = $request->hour;
        $location=$request->location;
        if($request){
            $query_register = mysqli_query($connect, "INSERT INTO event (event_name, date_start, date_end, hour,location ) VALUES ('$event_name', '$date_start', '$date_end', '$hour', '$location')");
                // Check if query executed successfully if not send a 404 status code
            if($query_register){
            //Masukan data ke variable row biat 
            $query_select = mysqli_query($connect, "SELECT * FROM event WHERE event_name='$event_name'");
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