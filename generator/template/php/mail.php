<?php
    $to = "admin@pixelthin.com";
    // Get raw data from the request and decode it as json
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $subject = $data->type;
    $body = "First Name: " . $data->firstName . "\r\n" .
            "Last Name: " . $data->lastName . "\r\n" .
            "Title: " . $data->title . "\r\n" .
            "Phone Number: " . $data->phoneNumber . "\r\n" .
            "Company Name: " . $data->companyName . "\r\n" .
            "Email: " . $data->email . "\r\n" .
            "Country: " . $data->country . "\r\n" .
            "State: " . $data->state . "\r\n" .
            "City: " . $data->city . "\r\n" .
            "Message: " . $data->message;
    $headers = "From: " . $data->email  . "\r\n" .
            "Content-Type: text/plain; charset=utf-8";

    mail($to,$subject,$body,$headers);
    header('Content-type: application/json');
    echo json_encode($array);
    die();
?>
