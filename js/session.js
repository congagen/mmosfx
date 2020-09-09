var isInitUI = false;
var isInitAudio = false;
var audioCtx;

var currentChannelName = "Lobby";
var currentUserId = "";
var currentSessionId = "";
var currentFbToken = "";

function getUrlVars() {
    var vars = {};

    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    return vars;
}

let url_vars = getUrlVars();

if (Object.keys(url_vars).length > 0) {
    console.log(url_vars);
    console.log(Object.keys(url_vars));
    console.log(url_vars["channel"]);

    if ("channel" in url_vars) {
        console.log(url_vars["channel"]);
        currentChannelName = url_vars["channel"];
        channelNameInputBox.value = currentChannelName;
    }

    if ("mode" in url_vars) {
        console.log(url_vars["mode"]);

        if (url_vars["mode"] == "client") {
            document.getElementById("receiveCommandsCheckbox").checked = false;
            document.getElementById("enableTransmissionCheckbox").checked = true;
        }

        if (url_vars["mode"] == "host") {
            document.getElementById("receiveCommandsCheckbox").checked = true;
            document.getElementById("enableTransmissionCheckbox").checked = false;
        }
    }

}