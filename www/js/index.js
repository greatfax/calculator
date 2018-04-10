﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        document.getElementById("calculate").addEventListener("click", oncalculate, false);
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
function oncalculate() {
    var x = document.getElementById('txt1').value;
    var y = document.getElementById('txt2').value;
    var o = parseInt(document.getElementById('op').value);
    if(x.length == 0 || y.length == 0)
        document.getElementById('res').innerHTML = 'ERROR: Please fill all the fields.';
    else {
        var a = parseInt(x);
        var b = parseInt(y);
        if(o == 0)
            document.getElementById('res').innerHTML = a + ' + ' + b + ' = ' + (a+b);
        else if(o == 1)
            document.getElementById('res').innerHTML = a + ' - ' + b + ' = ' + (a-b);
        else if(o == 2)
            document.getElementById('res').innerHTML = a + ' X ' + b + ' = ' + (a*b);
        else if(o == 3)
            if(b == 0)
                document.getElementById('res').innerHTML = 'ERROR: Divisor cannot be 0.';
            else
                document.getElementById('res').innerHTML = a + ' / ' + b + ' = ' + (a/b);
    }
}
