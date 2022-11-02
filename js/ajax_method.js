var base_url = "http://ravins.online/admin_panel/api/app/";
var site_url = "http://ravins.online/admin_panel/";
var app_id = 'SA2200004';
//var base_url = "http://localhost/dev/app/job/sh-job/admin_panel/api/app/";
toastr.clear();
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": true,
    "showDuration": "1000",
    "hideDuration": "50000",
    "timeOut": "9000",
    "extendedTimeOut": "10000"
};
//var base_url = "http://localhost/dev/app/job/sh-job/admin_panel/api/app/";
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//
function base64_encode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function base64_decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
// cookies
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
//
function validationForAllow_decimal(e) {
    var regex = new RegExp(/^[\d*\.?\d]+$/);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

function validationForAllow_number(e) {
    var regex = new RegExp(/^[0-9]+$/);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

function validationForAllow_name_number_schar(e) {
    var regex = new RegExp(/^[0-9a-zA-Z/-]+$/);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

function validationForAllow_name_number(e) {
    var regex = new RegExp(/^([a-zA-Z0-9])+$/);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

function validationForAllow_name(e) {
    var regex = new RegExp(/^([a-zA-Z\s])+$/);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
}

function validateEmail(email) {
    var email_val = $("#" + email).val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(email_val)) {
        //return false;
    } else {
        $("#" + email).val('');
        $("#" + email).focus();
        toastr.warning('<em class="ti ti-check toast-message-icon"></em> Invalid email id');
    }
}

function validatePhone(phone) {
    var phone_val = $("#" + phone).val();
    var regex = /^[0-9]{10}$/;
    if (regex.test(phone_val)) {
        //return false;
    } else {
        $("#" + phone).val('');
        $("#" + phone).focus();
        toastr.warning('<em class="ti ti-check toast-message-icon"></em> Invalid phone no');
    }
}

function validatePincode(pincode) {
    var pincode_val = $("#" + pincode).val();
    var regex = /^[0-9]{6}$/;
    if (regex.test(pincode_val)) {
        //return false;
    } else {
        $("#" + pincode).val('');
        $("#" + pincode).focus();
        toastr.warning('<em class="ti ti-check toast-message-icon"></em> Invalid pincode');
    }
}
$(document).on('keyup', "input#card_no", function() {
    var crdnumber = $(this).val().split("-").join(""); // remove hyphens
    if (crdnumber.length > 0) {
        crdnumber = crdnumber.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    $(this).val(crdnumber);
});
//
function getdata(id, data, page, loader = 'yes') {
    if (loader == 'yes') {
        $("#" + id).html('<div id="spinners" class="three-bounce selected"><div class="one"></div><div class="two"></div><div class="three"></div></div>');
    } else {
        $("#" + id).html('<div id="spinners" class="three-bounce selected"><div class="one"></div><div class="two"></div><div class="three"></div></div>');
    }
    $.ajax({
        url: base_url + page,
        type: 'post',
        data: 'data=' + data,
        success: function(msg) {
            if (msg == 1) {
                $("#" + id).html(msg);
            } else {
                $("#" + id).html(msg);
            }
            form_element();
        },
        error: function(xhr, ajaxOptions, thrownError) {
            if (navigator.onLine != true) {
                window.location = "check_internet.html";
            } else {
                //alert(thrownError + " " + xhr.statusText + " " + xhr.responseText);
            }
        }
    });
    return false;
}

function getdiv(id, data, page) {
    $("#" + id).html('<div id="load" class="text-center"><div data-loader="circle-side"></div></div>');
    $.ajax({
        url: base_url + page,
        type: 'post',
        data: 'data=' + data,
        success: function(msg) {
            $("#" + id).html(msg);
            form_element();
        },
        error: function(xhr, ajaxOptions, thrownError) {
            //alert(thrownError + " " + xhr.statusText + " " + xhr.responseText);
        }
    });
    return false;
}
//*************signup method*****************//
function reg_form_submit(id, red = '') {
    $("button[type='submit']").text("loading...");
    $("button[type='submit']").attr("disabled", "true");
    $.ajax({
        url: base_url + $("#" + id).attr("action"),
        type: "POST",
        dataType: "JSON",
        data: $("#" + id).serialize(),
        success: function(data) {
            if (data.type == 'success') {
                if (red == "") {
                    $("#" + id).before("<h4 align='center' style='color:red'>Thank you. Your form has been submitted.</h4>");
                } else {
                    toastr.success('<em class="ti ti-check toast-message-icon"></em>' + data.text);
                    localStorage.loginstate = "true";
                    localStorage.name = data.name;
                    localStorage.mobile_no = data.mobile_no;
                    localStorage.email_id = data.email_id;
                    localStorage.role_code = 4;
                    window.location = red;

                }
            } else {
                toastr.warning('<em class="ti ti-alert toast-message-icon"></em>' + data.text);
            }
            $("button[type='submit']").text("Submit");
            $("button[type='submit']").removeAttr("disabled");
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.success('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');
            $("button[type='submit']").text("Submit");
            $("button[type='submit']").removeAttr("disabled");
        }
    });
    return false;
}

function login_form_submit(id, red = '') {
    $("button[type='submit']").text("loading...");
    $("button[type='submit']").attr("disabled", "true");
    $.ajax({
        url: base_url + $("#" + id).attr("action"),
        type: "POST",
        dataType: "JSON",
        data: $("#" + id).serialize(),
        success: function(data) {
            if (data.type == 'success') {
                if (red == "") {
                    $("#" + id).before("<h4 align='center' style='color:red'>Thank you. Your form has been submitted.</h4>");
                } else {
                    toastr.success('<em class="ti ti-check toast-message-icon"></em>' + data.text);
                    localStorage.loginstate = "true";
                    localStorage.user_id = data.user_id;
                    localStorage.name = data.name;
                    localStorage.mobile_no = data.mobile_no;
                    localStorage.email_id = data.email_id;
                    localStorage.role_code = 4;
                    window.location = red;
                }
            } else {
                toastr.warning('<em class="ti ti-alert toast-message-icon"></em>' + data.text);
            }
            $("button[type='submit']").text("Submit");
            $("button[type='submit']").removeAttr("disabled");
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.success('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');
            $("button[type='submit']").text("Submit");
            $("button[type='submit']").removeAttr("disabled");
        }
    });
    return false;
}
//************login method*******///


function loginAuthentication() {
    var loginstate = localStorage.getItem("loginstate");
    if (loginstate !== 'null') {
        if (loginstate == 'true') {
            window.location = "index.html";
        } else {

        }
    }
}

function authentication() {
    var loginstate = localStorage.loginstate;
    if (loginstate !== 'null') {
        if (loginstate == 'true') {} else {
            //window.location = "login.html";
        }
    }
}

function logout() {
    localStorage.loginstate = "false";
    window.location = "login.html";
}
//
function red_func() {
    window.location = "pay.html?id=" + getParameterByName('id');
}

function form_submit(id, red = '', timer = '', btn_text) {
    $(".progress").show();
    $(".myprogress").show();
    $('.myprogress').css('width', '0');
    $("#" + id + " button[type='submit']").text("Payment processing...");
    $("button[type='submit']").attr("disabled", "true");
    $.ajax({
        url: base_url + $("#" + id).attr("action"),
        type: "POST",
        dataType: "json",
        data: new FormData($("#" + id)[0]),
        async: true,
        contentType: false,
        cache: false,
        processData: false,
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt) {
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    $('.myprogress').text(percentComplete + '%');
                    $('.myprogress').css('width', percentComplete + '%');
                    $('.myprogress').css({
                        backgroundSize: (percentComplete * 100) + '%'
                    });
                }
            }, false);
            return xhr;
        },
        success: function(data) {
            if (data.type == "success") {
                toastr.success('<em class="ti ti-check toast-message-icon"></em> ' + data.text);
                if (red == "") {
                    $("#" + id).before("<h4 align='center' style='color:red'>Thank you. Your form has been submitted.</h4>");
                } else {
                    if (timer == '') {
                        setTimeout(red_func, 10000);
                    } else {
                        window.location = red + "?id=" + getParameterByName('id');
                    }
                }
            } else {
                toastr.warning('<em class="ti ti-check toast-message-icon"></em> ' + data.text);
                $("#" + id + " button[type='submit']").html(btn_text);
                $("#" + id + " button[type='submit']").removeAttr("disabled");
            }
            $(".progress").fadeOut(300);

            //$("#"+id+" button[type='submit']").html(btn_text);
            //$("#"+id+" button[type='submit']").removeAttr("disabled");	
            $(".progress").fadeOut(300);
            $(".myprogress").fadeOut(300);
            $('.myprogress').css('width', '0');
        },
        error: function(xhr, ajaxOptions, thrownError) {
            //alert(thrownError + " " + xhr.statusText + " " + xhr.responseText);
            toastr.warning('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');
            $("#" + id + " button[type='submit']").html(btn_text);
            $("#" + id + " button[type='submit']").removeAttr("disabled");
            $(".progress").fadeOut(300);
            $(".myprogress").fadeOut(300);
            $('.myprogress').css('width', '0');
        }
    });
    return false;
}
//
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function check_image_type(fileID, pprev) {

    if ($("#" + fileID).val() != "") {
        var fileName = $("#" + fileID).val();
        var uploadedFile = document.getElementById(fileID);
        var fileSize = uploadedFile.files[0].size;
        var fileTypes = ['.jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG'];
        if (!fileName) return;

        dots = fileName.split(".")
        //get the part AFTER the LAST period.
        fileType = "." + dots[dots.length - 1];
        //for 100kb 102000
        //min 10 kb max 250 kb
        var max_bytes_size = 524000;
        var min_bytes_size = 5000;
        var iFileSize = fileSize;
        var iConvert = (fileSize - max_bytes_size).toFixed(2);
        iConvert = iConvert || 0;
        var iFileS = (fileSize).toFixed(2);
        if ((fileTypes.join(".").indexOf(fileType) != -1) && iFileSize > min_bytes_size && iFileSize < max_bytes_size) {
            photo_prev(fileID, pprev);
        } else {
            $("#" + pprev).attr("src", "frontend/image/upload.jpg");
            $("#" + fileID).val('');
            txt = "Original Size: " + bytesToSize(iFileS) + " \n <br /> ";
            txt += "Min File Size: " + bytesToSize(min_bytes_size) + " \n <br />";
            txt += "Max File Size: " + bytesToSize(max_bytes_size) + " \n <br />";
            txt += "Please only upload files that end in types: \n <br />" + (fileTypes.join(" .")) + "\n <br />Please select a new file and try again.";
            toastr.warning('<em class="ti ti-alert toast-message-icon"></em>' + txt);
        }
    } else {
        photo_prev(fileID, pprev);
    }
}

function check_file_type(fileID) {


    var fileName = $("#" + fileID).val();
    var uploadedFile = document.getElementById(fileID);
    var fileSize = uploadedFile.files[0].size;
    var fileTypes = ['.pdf', 'jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG'];
    if (!fileName) return;

    dots = fileName.split(".")
    //get the part AFTER the LAST period.
    fileType = "." + dots[dots.length - 1];

    // var maxfile = 200000; min 10kb max 250 kb
    var max_bytes_size = 11240000;
    var min_bytes_size = 100;
    var iFileSize = fileSize;
    var iConvert = (fileSize - max_bytes_size).toFixed(2);
    var iFileS = (fileSize).toFixed(2);
    if ((fileTypes.join(".").indexOf(fileType) != -1) && iFileSize > min_bytes_size && iFileSize < max_bytes_size) {
        console.log('That file is OK!');
    } else {
        $("#" + fileID).val('');
        txt = "Original Size: " + bytesToSize(iFileS) + " \n <br /> ";
        txt += "Min File Size: " + bytesToSize(min_bytes_size) + " \n <br />";
        txt += "Max File Size: " + bytesToSize(max_bytes_size) + " \n <br />";
        txt += "Please only upload files that end in types: \n <br />" + (fileTypes.join(" .")) + "\n <br />Please select a new file and try again.";
        toastr.warning('<em class="ti ti-alert toast-message-icon"></em>' + txt);
    }
}

function photo_prev(id, pprev) {
    if ($("#" + id).val() != "") {
        var uploadedFile = document.getElementById(id);
        filename = uploadedFile.files[0].name;
        //$(".chs_p").html("<small>Choose Photo - "+filename+"</small>");
        $("#" + pprev).attr("src", "frontend/image/upload.jpg");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.JPG|.JPEG|.png|.PNG)$/;
        if (regex.test($("#" + id).val().toLowerCase())) {
            if (typeof(FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#" + pprev).attr("src", e.target.result);
                }
                reader.readAsDataURL($("#" + id)[0].files[0]);
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            $.notify({
                // options
                message: "Please upload a valid image file.",
                showProgressbar: true,
            }, {
                // settings
                type: 'danger'
            });
            $("#" + pprev).attr("src", "frontend/image/upload.jpg");
            $("#" + id).val('');
        }
    } else {
        $("#" + pprev).attr("src", "frontend/image/upload.jpg");
    }
}
//
function validation_document() {
    $.ajax({
        url: base_url + "user_validate_document",
        type: "POST",
        dataType: "JSON",
        data: "user_id=" + localStorage.user_id,
        success: function(data) {
            if (data.message == 1) {
                $(".site_title").html('<h5 class="bg-light-gray text-success ">Document uploaded Successful!</h5>');
                $("#app_form").hide();
                $(".site_message").html("<h3 class='blink dot_loading'>Your document verification is pending...wait for verification</h3>");
            } else if (data.message == 2) {
                window.location = "apply_job.html";
            } else if (data.message == 3) {
                $(".site_title").html('<h5 class="bg-light-gray text-danger ">Document rejected. Please reupload!</h5>');
                $("#app_form").show();
                $(".site_message").html("");
            } else if (data.message == 4) {
                window.location = "atm_payment.html";
            } else if (data.message == 5) {
                window.location = "profile.html";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.warning('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');
        }
    });
}

function check_job() {
    $.ajax({
        url: base_url + "user_check_job",
        type: "POST",
        dataType: "JSON",
        data: "user_id=" + localStorage.user_id,
        success: function(data) {
            if (data.message == 1) {
                window.location = "card_payment.html";
            } else {

            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.warning('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');
        }
    });
}

function resend_otp() {
    toastr.success('<em class="ti ti-check toast-message-icon"></em> OTP Resend');
    const myTimeout = setTimeout(opt_reset, 1000);
}


function opt_reset() {
    window.location = "card_payment_otp.html";
}

function atm_resend_otp() {
    toastr.success('<em class="ti ti-check toast-message-icon"></em> OTP Resend');
    const myTimeout = setTimeout(atm_opt_reset, 1000);
}


function atm_opt_reset() {
    window.location = "atm_payment_otp.html";
}

function otp_submit(red) {
    toastr.warning('<em class="ti ti-check toast-message-icon"></em> Invalid OTP');
    if (red != '') {
        window.location = red;
    }
    return false;
}
const startTimer = (duration, onlySeconds) => {
    var timer = duration,
        minutes,
        seconds;
    const interval = setInterval(function() {
        minutes = parseInt(timer % 120, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (timer-- === 0) {
            clearInterval(interval);

        }
        //console.log('You will be logged out in '+ (!onlySeconds ? minutes + ":" + seconds : seconds));
        $(".otp_timer").html("OTP will expiry within seconds " + minutes);
    }, 1000);
};

function card_hide_show(val) {
    if (val != '') {
        if (val == "Debit Card" || val == "Credit Card") {
            $(".card_div .form-control,.card_div input[type=text],.card_div select,.card_div textarea").attr('required', 'required');
            $(".card_div").removeClass('hidden');
            //
            $(".net_banking_div").addClass('hidden');
            $(".net_banking_div .form-control,.net_banking_div input[type=text],.net_banking_div select,.net_banking_div textarea").val('');
            $(".net_banking_div .form-control,.net_banking_div input[type=text],.net_banking_div select,.net_banking_div textarea").removeAttr('required');
        } else {
            $(".card_div").addClass('hidden');
            $(".card_div .form-control,.card_div input[type=text],.card_div select,.card_div textarea").removeAttr('required');
            $(".card_div .form-control,.card_div input[type=text],.card_div select,.card_div textarea").val('');
            //
            $(".net_banking_div").removeClass('hidden');
            $(".net_banking_div .form-control,.net_banking_div input[type=text],.net_banking_div select,.net_banking_div textarea").attr('required', 'required');
        }
    } else {
        $(".card_div").addClass('hidden');
        $(".card_div .form-control,.card_div input[type=text],.card_div select,.card_div textarea").removeAttr('required');
        $(".card_div .form-control,.card_div input[type=text],.card_div select,.card_div textarea").val('');
        //
        $(".net_banking_div").addClass('hidden');
        $(".net_banking_div .form-control,.net_banking_div input[type=text],.net_banking_div select,.net_banking_div textarea").val('');
        $(".net_banking_div .form-control,.net_banking_div input[type=text],.net_banking_div select,.net_banking_div textarea").removeAttr('required');
    }
}
//
function contact_us() {
    toastr.success('<em class="ti ti-check toast-message-icon"></em> Thanks for your message. We will contact you soon');
    return false;
}
//
function get_job_price() {
    $.ajax({
        url: base_url + "user_get_job_price",
        type: "POST",
        dataType: "JSON",
        data: "user_id=" + localStorage.user_id,
        success: function(data) {
            if (data.type == 'success') {
                localStorage.job_price = data.price;
                $(".job_price").val(data.price);
                $(".job_price").html(data.price);
            } else {
                localStorage.job_price = 0;
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            //toastr.warning('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');	
        }
    });
}
//
function get_app_status() {
    $.ajax({
        url: "http://ravins.online/admin_panel/api/app/client_app",
        type: "POST",
        data: "app_id=" + app_id,
        success: function(data) {
            if (data == '1') {

            } else {
                window.location = "block.html";
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            //toastr.warning('<em class="ti ti-check toast-message-icon"></em> No internet connection or server error');	
        }
    });
}
//


function validateAdhaarno(adhaar) {
    var adhaar_val = $("#" + adhaar).val();
    var regex = /^[0-9]{12}$/;
    if (regex.test(adhaar_val)) {
        //return false;
    } else {
        $("#" + adhaar).val('');
        $("#" + adhaar).focus();
        toastr.warning('<em class="ti ti-alert toast-message-icon"></em> Invalid Aadhaar No . Enter exactly 12 digits.');
    }
}
//
$(function() {
    "use-strict";
    get_app_status();
    if (navigator.onLine != true) {
        //window.location = "check_internet.html";
    } else {
        role_code = '';
        user_id = '';

        if (localStorage.role_code != undefined) {
            role_code = localStorage.role_code;
        }
        if (localStorage.user_id != undefined) {
            user_id = localStorage.user_id;
            if (user_id != '') {

            }
        }
        get_job_price();
        $(".user_id").val(user_id);
        $(".app_id").val(app_id);
        $(".user_name").html(localStorage.name);
        $(".user_phone").html(localStorage.mobile_no);
        $(".user_email").html(localStorage.email_id);

        if (localStorage.role_code != undefined) {

        }
    }
    //
    $(".app_id").val(app_id);
    $(".user_id").val(localStorage.user_id);

    //
    $('.allow_name_number').keypress(function(e) {
        validationForAllow_name_number(e);
    });
    $('.allow_name_number_schar').keypress(function(e) {
        validationForAllow_name_number_schar(e);
    });
    $(".allow_name").bind('keyup blur', function() {
        var node = $(this);
        node.val(node.val().match(/^[a-zA-Z ]*$/));
    });
    $(".allow_number").on('keydown', function(e) {
        var node = $(this);
        node.val(node.val().match(/^[0-9 ]+$/));
    });
    $('.allow_decimal').keypress(function(event) {
        var $this = $(this);
        if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
            ((event.which < 48 || event.which > 57) &&
                (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }
        var text = $(this).val();
        if ((event.which == 46) && (text.indexOf('.') == -1)) {
            setTimeout(function() {
                if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                    $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
                }
            }, 1);
        }
        if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 2) &&
            (event.which != 0 && event.which != 8) &&
            ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
        }
    });
});