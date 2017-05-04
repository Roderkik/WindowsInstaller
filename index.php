<html>
    <head>
        <meta charset="utf-8">
        <title id="title">Windows 10 installer</title>
        <meta name="description" content="Will install Windows 10 for food" />
        <meta name="google-site-verification" content="2EB0HtT51WRkR1yT-aXheBiDJ05j4LhFSDcmtFE9WwM" />
        <link hreflang="en"/>

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
        <link rel="icon" href="favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="msapplication-TileColor" content="#00a1f1">
        <meta id="theme-color" name="theme-color" content="#00a1f1">

        <link rel="stylesheet" href="css/materialize.min.css">
        <link rel="stylesheet" href="css/custom.css">
    </head>
    <body onclick="toggleFullScreen()">
    <?php include_once("analyticstracking.php") ?>
        <div id="le-big" class="row valign-wrapper">
            <div class="col s12">
                <h1 class="center-align main" id="main"></h1>
                <div id="loader" class="center-align">

                </div>
                <div class="center-align under-loader">
                    <h4 id="lower">Getting ready</h4>
                </div>
                <div class="center-align bottom">
                    <h4 id="bottom"></h4>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
        <script src="js/jquery.color.min.js"></script>
        <script src="js/materialize.min.js"></script>
        <script src="js/fizz.js"></script>
        <video preload="auto" style='display: none' src='img/Cena.mp4'></video>
    </body>
</html>
