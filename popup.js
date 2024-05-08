console.log("This is a popup!")
const bg = chrome.extension.getBackgroundPage()

// console.log(bg)

// const intervalId = setInterval(() => {
//     // 这里写你想要执行的代码
//     console.log("Interval function executed");
//     $(function () {
//         $('#input').val(count);
//         $('#btn').click(function () {
//             // bg.toPopup()
//             // 发送消息给 background 页面
//             chrome.runtime.sendMessage({ greeting: "Hello from popup" }, response => {
//                 console.log("Response from background:", response);
//             });
//         });
//     })
// }, 5000); // 每隔5秒执行一次



setInterval(() => {
    // 添加点击事件监听器
    // 获取按钮元素
    const button = document.getElementById("btn");
    console.log(button)
    button.addEventListener("click", function () {
        // 点击按钮时执行的代码
        console.log("Button clicked!");
        
        chrome.runtime.sendMessage({ greeting: "Hello from popup" }, response => {
            console.log("Response from background:", response);
        });
        // 在这里可以编写其他逻辑，比如加一操作
    });
}, 3000); // 每隔5秒执行一次


// document.getElementById('rBgInfo').onclick = function() {
//     bg.toPopup()
// }



// 监听来自 background 页面的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in popup:", message);
    // 在这里处理消息，并根据需要发送回复
});
