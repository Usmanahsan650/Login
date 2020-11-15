<?php
$con=mysqli_connect("localhost","root","");
if(!$con)
{
    echo "Con fail";
    die("cant connect ". mysqli_connect_error());
}
else{
    $obj=json_decode($_POST["x"],false);
    $sql="SELECT `Name`,`ID` FROM `mydb`.`input` where`Name`='$obj->pass' and `ID`='$obj->id';";
    $data=$con->query($sql);
    if($data->num_rows > 0)
    { // echo "<br>Thanks for feedback"
   //  {  echo '<script> alert("success!");</script>';
     $row = $data->fetch_assoc();
       echo "success";
   }  
   else{
       echo"fail";
   }
}
?>