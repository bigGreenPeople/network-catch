console.log("This is a popup!")
const bg = chrome.extension.getBackgroundPage()

console.log(bg)


setInterval(1000,)
$(function () {
    $('#input').val(count);
    $('#btn').click(function () {
        // bg.toPopup()
        // 发送消息给 background 页面
        chrome.runtime.sendMessage({ greeting: "Hello from popup" }, response => {
            console.log("Response from background:", response);
        });
    });
})

// document.getElementById('rBgInfo').onclick = function() {
//     bg.toPopup()
// }



// 监听来自 background 页面的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in popup:", message);
    // 在这里处理消息，并根据需要发送回复
});
