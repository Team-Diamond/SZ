chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            cancel: details.url.indexOf("wikipedia") !== -1
        };
    },
    {urls: ["<all_urls>"]},
    ["requestHeaders"]);

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {createDiv: {width: "100px", height: "100px", innerHTML: "Hello"}}, function(response) {
        console.log(response.confirmation);
    });
});

// var condition1 = new chrome.declarativeWebRequest.RequestMatcher({
//     url: {hostSuffix: 'wikipedia.com'}
// });
// var condition2 = new chrome.declarativeWebRequest.RequestMatcher({
//     url: {hostSuffix: 'google.com'}
// });
// var rule1 = {
//     conditions: [condition1],
//     actions: [new chrome.declarativeWebRequest.CancelRequest()]
// };
// var rule2 = {
//     conditions: [condition2],
//     actions: [new chrome.declarativeWebRequest.CancelRequest()]
// };
// chrome.declarativeWebRequest.onRequest.addRules([rule1, rule2]);
