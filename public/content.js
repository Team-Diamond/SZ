chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.requested === "createDiv"){
            //Code to create the div
            sendResponse({confirmation: "Successfully created div"});
        }
    });

var hyperlinks = document.getElementsByTagName('a');
for (var i = 0, l = hyperlinks.length; i < l; i++) {
    const link = hyperlinks[i].href;
    hyperlinks[i].href = '#';
}

