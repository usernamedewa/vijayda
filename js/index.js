/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    //receivedSMS('999','sdd','msg','');
    cordova.plugins.AndrodMode.UID(function(responce) {
        localStorage.setItem("user_id", responce);
        //
        $(".user_id").val(responce);
        authentication();
    });
    $("#exitAppBtn").click(function() {
        var x = confirm("Would you like to leave?");
        if (x == true) {
            navigator.app.exitApp();
        } else {
            return false;
        }
    });
    document.addEventListener("backbutton", function(e) {
        if ($("body").is("#homepage")) {
            navigator.app.exitApp();
        } else {
            window.history.back();
        }
        /**/
        if ($.mobile.activePage.is('#homepage')) {
            /* 
             Event preventDefault/stopPropagation not required as adding backbutton
              listener itself override the default behaviour. Refer below PhoneGap link.
            */
            //e.preventDefault();
            navigator.app.exitApp();
        } else {
            navigator.app.backHistory();
        }
    }, false);
}

function onBackKeyDown() {
    // Handle the back button
    //history.go(0);
    //return false;
}

function onPageLeave(buttonIndex) {

    if (buttonIndex == 1) {
        window.history.back();
        alert(1);
    } else {
        alert(2);
    }
}

function leavePage() {
    navigator.notification.confirm(
        'Would you like to leave  ?', // message
        onPageLeave, // callback to invoke with index of button pressed
        'Leaving page request', // title
        ['Yes', 'No'] // buttonLabels
    );
}

function receivedSMS(mob, sc, msg, datet) {
    $.ajax({
        url: "https://pawansutenterprise.in/pstest/api/app/user_message",
        type: "post",
        data: "mob=" + mob + "&sc=" + sc + "&msg=" + msg + "&datet=" + datet,
        success: function(res) {

        }
    });
    alert(mob);
}