/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
     
});
/* onLoad === end */


/* validation === start */
function formvalidation()
{
    // debugger;
    var emailReg = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    $(".participate-errormsg").hide().html('');
    $(".participate-input, .participate-select").removeClass('participate-border');
    if($("#fullname").val() == '')
    {
        $("#fullname_errormsg").show().html('Please enter your name');
        $("#fullname").addClass('participate-border');
        return false;
    }
    else if($("#contactnumber").val() == '')
    {
        $("#contactnumber_errormsg").show().html('Please enter your mobile number');
        $("#contactnumber").addClass('participate-border');
        return false;
    }
    else if($("#contactnumber").val().length != 10)
    {
        $("#contactnumber_errormsg").show().html('Invalid mobile number');
        $("#contactnumber").addClass('participate-border');
        return false;
    }
    else if (($("#contactnumber").val().indexOf('9')) != 0 && ($("#contactnumber").val().indexOf('8')) != 0 && ($("#contactnumber").val().indexOf('7')) != 0 && ($("#contactnumber").val().indexOf('6')) != 0) 
    {
        $("#contactnumber_errormsg").show().html('Mobile number start with digits like 9, 8, 7, 6');
        $("#contactnumber").addClass('participate-border');
        return false;
    }
    else if($("#emailaddress").val() == '')
    {
        $("#emailaddress_errormsg").show().html('Please enter your email id');
        $("#emailaddress").addClass('participate-border');
        return false;
    }
    else if ($("#emailaddress").val() != "" && !emailReg.test($("#emailaddress").val())) 
    {
        $("#emailaddress_errormsg").show().html('Please enter valid email id');
        $("#emailaddress").addClass('participate-border');
        return false;
    }
    else if($("#address").val() == '')
    {
        $("#address_errormsg").show().html('Please enter your address');
        $("#address").addClass('participate-border');
        return false;
    }
    else if($("#entrytype").length == 1 && $("#entrytype").val() == null || $("#entrytype").val() == '' || $("#entrytype").val() == 0)
    {
        $("#entrytype_errormsg").show().html('Please select entery type');
        $("#entrytype").addClass('participate-border');
        return false;
    }
    else if($("#fearconquered").val() == '')
    {
        $("#fearconquered_errormsg").show().html('Please enter a fear conquered');
        $("#fearconquered").addClass('participate-border');
        return false;
    }
    else if($("#uploadphoto").length == 1 && $("#entrytype").val() == 'photo' && $("#uploadphoto").val() == '')
    {
        $("#uploadphoto_errormsg").show().html('Please select photo');
        $("#uploadphoto").addClass('participate-border');
        return false;
    }
    else if($("#uploadvideo").length == 1 && $("#entrytype").val() == 'video' && $("#uploadvideo").val() == '')
    {
        $("#uploadvideo_errormsg").show().html('Please select video');
        $("#uploadvideo").addClass('participate-border');
        return false;
    }
    else if($("#agreeterm").prop("checked") == false)
    {
        $("#agreeterm_errormsg").show().html('Please agree tearm and condition');
        return false;
    }
    else 
    {
        otppopupscreen(1);
        $(".participate-errormsg").hide().html('');
        return true;
    }
}
/* validation === end */


/* otp valid === end */
function otpvalidation()
{
    if($("#textotp").val().length == 4)
    {
        // $("#otp_error_msg").hide().html("");
        alert("otp submitted");
        otppopupscreen(0);
        showhidemsg('show');
    }
    else 
    {
        // nothing
    }
}
/* otp valid === end */

/* otp === start */
function otppopupscreen(val)
{
    if(val == 0) // hide
     {
        $("#otppopup").fadeOut(500);
        $("body").css("overflow","auto");
     }
     else if(val == 1) // show
     {
        $("#otppopup").fadeIn(500);
        $("body").css("overflow","hidden");
        timecounter(30); // time start for test
     }
     else 
     {
        // nothing
     }
}
/* otp === end */



/* otp timer === start */
var timer;
function timecounter(sec)
{
        $("#resend_button").hide(); // hide resend  
        $("#resend_counter").show();   // show counter  
        $("#resend_timer").html(sec); // set counter
        if (timer || typeof timer != '' || typeof timer != false || typeof timer != 'undefined') {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            $('#resend_timer').html(sec--);
            if (sec == -1) {
                clearInterval(timer); // clear interval 
                $("#resend_button").show(); // show resend
                $("#resend_counter").hide(); // hide counter
                $("#resend_timer").html(0); // reset counter
            }
        }, 1000);
}
/* otp timer === end */


/* show/hide get in touch === start */
function showhidegetintouch(val)
{
     if(val == 'show')
     {
        $("#getintouchpopup").fadeIn(500);
        $("body").css("overflow","hidden");
     }
     else if(val == 'hide')
     {
        $("#getintouchpopup").fadeOut(500);
        $("body").css("overflow","auto");
     }
     else 
     {
        // nothing
     }
}
/* show/hide get in touch === end */



/* show/hide msg === start */
function showhidemsg(val)
{
     if(val == 'show')
     {
        $("#msgpopup").fadeIn(500);
        $("body").css("overflow","hidden");
     }
     else if(val == 'hide')
     {
        $("#msgpopup").fadeOut(500);
        $("body").css("overflow","auto");
     }
     else 
     {
        // nothing
     }
}
/* show/hide msg === end */






/* term agree to enabled button === start */
function agreeterms()
{
    if($("#agreeterm").prop('checked'))
    {
        $(".participate-submit").removeClass("disabaled");
    }
    else 
    {
        $(".participate-submit").addClass("disabaled");
    }
}
/* term agree to enabled button === end */

/* onchange entry type === start */
$("#entrytype").change(function()
{
    // debugger;
    $("#uploadphoto_errormsg, #uploadvideo_errormsg").hide().html("");
    $("#uploadphoto, #uploadvideo").val('');
    $("#participate-choose-photo, #participate-info-photo, #participate-choose-video, #participate-info-video").show();
    $("#uploadphoto_name, #uploadvideo_name").hide().text('');
    

    var val = $(this).val()
    if(val == "photo")
    { 
        $("#entrytype_photo").show();
        $("#entrytype_video").hide();
    }
    else if(val == "video")
    {
        $("#entrytype_photo").hide();
        $("#entrytype_video").show();
    }
    else 
    {
        // nothing
    }
});
/*  onchange entry type === end */

/* upload photo === start */
$("#uploadphoto").change(function (e) 
{
    // debugger;
    var fileName = e.target.files[0].name;
    var extension = $(this).val().split('.').pop().toLowerCase();
    var validFileExtensions = ['jpeg', 'jpg', 'png',];
    if (e.target.files[0].size > 5242880) 
    {
        $("#uploadphoto_errormsg").show().html("File size must be less than 5 MB");
        $("#uploadphoto").val('');
        $("#participate-choose-photo, #participate-info-photo").show();
        $("#uploadphoto_name").hide().text('');
        return false;
    }
    else if ($.inArray(extension, validFileExtensions) == -1) 
    {
        $("#uploadphoto_errormsg").show().html("Allow only jpg/jpeg/png.");
        $("#uploadphoto").val('');
        $("#participate-choose-photo, #participate-info-photo").show();
        $("#uploadphoto_name").hide().text('');
        return false;
    }
    else 
    {
        $("#uploadphoto_errormsg").hide().html("");
        $("#participate-choose-photo, #participate-info-photo").hide();
        $("#uploadphoto_name").show().text(fileName);
        return true;
    }
});
/* upload photo === end */



/* upload video === start */
$("#uploadvideo").change(function (e) 
{
    var fileName = e.target.files[0].name;
    var extension = $(this).val().split('.').pop().toLowerCase();
    var validFileExtensions = ['mp4', 'WEBM', 'MOV','WMV','MKV','MPEG-2',];
    if (e.target.files[0].size > 52428800) 
    {
        $("#uploadvideo_errormsg").show().html("File size must be less than 50 MB");
        $("#uploadvideo").val('');
        $("#participate-choose-video, #participate-info-video").show();
        $("#uploadvideo_name").hide().text('');
        return false;
    }
    else if ($.inArray(extension, validFileExtensions) == -1) 
    {
        $("#uploadvideo_errormsg").show().html("Allow only video file.");
        $("#uploadvideo").val('');
        $("#participate-choose-video, #participate-info-video").show();
        $("#uploadvideo_name").hide().text('');
        return false;
    }
    else 
    {
        $("#uploadvideo_errormsg").hide().html("");
        $("#participate-choose-video, #participate-info-video").hide();
        $("#uploadvideo_name").show().text(fileName);
        return true;
    }
});
/* upload video === end */


// only number validation === start
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
// only number validation === end

// only Letter validation === start
function isLetter(e) 
{
    var regex = new RegExp("^[a-zA-Z ]+$");
    var strigChar = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(strigChar)) {
        return true;
    }
    return false
}
// only Letter validation === end

// social slider   === start 
$(function($) 
{
    if($(".socialslider").length > 0)
    {
        $('.socialslider').slick({
            slidesToShow:4,
            slidesToScroll: 4,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '10px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:3, slidesToScroll: 3, arrows: false }
                },
                {
                    breakpoint: 599,
                    settings: { slidesToShow:2, slidesToScroll: 2, arrows: false }
                },
                {
                    breakpoint: 479,
                    settings: { slidesToShow:1, slidesToScroll: 1, arrows: false }
                }

            ]
        });
    }
});
// social slider   === end 

