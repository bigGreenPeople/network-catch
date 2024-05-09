// chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(details => {
//   console.log("Request finished:", details);
//   // 在这里可以处理请求完成后的逻辑
// });
// chrome.webRequest.onBeforeRequest.addListener(
//     function (details) {
//         console.log("Request intercepted:", details.url);
//         // 在这里你可以修改请求，或者根据需要取消它
//         return { cancel: false };
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"]
// );


// chrome.declarativeNetRequest.getMatchedRules.addListener({ requestId: "12345678901234567890" }, rules => {
//     console.log("Matched rules:", rules);
// });

var imageSet = new Set();

// console.log("This is a declarativeNetRequest!")
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(event => {
    // console.log("Rule matched debug info:", event.request.type);
    // console.log("Rule matched debug info:", event.request.url);
    // 发送消息给 popup 页面
    imageSet.add(event.request.url);
    // chrome.runtime.sendMessage({ greeting: event.request.url });
});


// 监听来自 popup 页面的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // console.log("Message received in background page:", message);
    // 在这里处理消息，并根据需要发送回复
    if (message.action === "getImages") {

        console.log("Message received in background page:", imageSet);
        sendResponse(Array.from(imageSet));
    }
});
