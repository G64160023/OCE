<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $nama ="";
    $email ="";
    $password ="";
    $telephone = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $nama = $request->nama;
        $email = $request->email;
        $password = $request->password;
        $telephone = $request->telephone;
        //ini buat cek apakah JSON ada isisnya atau tidak
        if($request){
            $query_register = mysqli_query($connect,"INSERT INTO mahasiswa (nama, email, password, telephone) VALUES ('$nama', '$email', '$password', '$telephone');
            if($query_register){

                 $data =array(
                     'message' => "Register Success!",
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
        echo json_encode($data);
    }
?>
