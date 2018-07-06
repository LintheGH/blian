<?php
    session_start();
    if(isset($_SESSION["email"])){
        echo '{"state": true, "account": "' . $_SESSION["email"] . '"}';
    } else {
        echo '{"state": false}';
    }
?>