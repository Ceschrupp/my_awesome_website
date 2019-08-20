<?php
error_reporting(0);

$marca = "Jeep® Argentina";

if (isset($_GET['marca'])) {
    switch ($_GET['marca']) {
        case 'j':
            header("HTTP/1.1 301 Moved Permanently");
            header('Location: /salesforce/jeep');
            break;
        case 'd':
            header("HTTP/1.1 301 Moved Permanently");
            header('Location: /salesforce/dodge');
            break;
        case 'c':
            header("HTTP/1.1 301 Moved Permanently");
            header('Location: /salesforce/chrysler');
            break;
        case 'r':
            header("HTTP/1.1 301 Moved Permanently");
            header('Location: /salesforce/ram');
            break;
        default:
            die();
    }   
}

$uri = $_SERVER['REQUEST_URI'];
if (strpos($uri, 'ram') !== false) {
    $marca = "Ram Argentina";
}else if (strpos($uri, 'dodge') !== false) {
    $marca = "Dodge Argentina";
}else if (strpos($uri, 'chrysler') !== false) {
    $marca = "Chrysler Argentina";
}

?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <script src="https://use.fontawesome.com/e300ac52e6.js"></script>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <title><?php echo $marca; ?></title>

        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P38WQTN');</script>

    </head>
    <body>
    <div id="app"></div>
    <script type="text/javascript" src="/salesforce/main.7c2bef573afc449e10c4.js"></script></body>
</html>