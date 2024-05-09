console.log("This is a popup!")
// const bg = chrome.extension.getBackgroundPage()


// 更新图片列表显示
function updateImageList(imageSet) {
    const imageListElement = document.getElementById('image-list');
    imageListElement.innerHTML = '';

    // 遍历集合，为每个图片创建一个列表项，并添加到图片列表中
    imageSet.forEach(imageUrl => {

        // 创建图像元素
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        // 创建复选框
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // 创建列表项
        const listItem = document.createElement('li');
        listItem.classList.add('image-item');
        listItem.appendChild(checkbox);
        listItem.appendChild(imageElement);

        // 将列表项添加到图片列表中
        imageListElement.appendChild(listItem);
    });
}



// document.getElementById('rBgInfo').onclick = function() {
//     bg.toPopup()
// }


var imageSet = new Set();
imageSet.add("https://p6-sign.douyinpic.com/tos-cn-i-0813/oEnVACBuQClK7IDESb9fA7DAR0GKvgGXArAAem~tplv-dy-cropcenter:300:400.png?x-expires=1715256000&x-signature=8SKwQppp1GpwqUgThzTkT6DRedI%3D&from=715538335&s=PackSourceEnum_DOUYIN_REFLOW&se=true&sh=300_400&sc=cover&l=202405091445456B0E64B05BF18704952F&biz_tag=aweme_video");
imageSet.add("https://p6-sign.douyinpic.com/tos-cn-i-0813c001/owZAAIRC8IAhXABwziFWibAEegDEICnAmEZ9Ae~tplv-dy-cropcenter:300:400.png?x-expires=1715256000&x-signature=54cjTtYPZ957jle5Mt6oyOdFYX4%3D&from=715538335&s=PackSourceEnum_DOUYIN_REFLOW&se=true&sh=300_400&sc=cover&l=202405091445456B0E64B05BF18704952F&biz_tag=aweme_video")
imageSet.add("https://p26-sign.douyinpic.com/tos-cn-i-0813/owDpHQK9ZIZ9AU5ADm1g7BnceybAACHAAQBfAO~tplv-dy-cropcenter:300:400.png?x-expires=1715256000&x-signature=8H%2FH964PU25ZCaX5uRzQrcdNJFc%3D&from=715538335&s=PackSourceEnum_DOUYIN_REFLOW&se=true&sh=300_400&sc=cover&l=202405091445456B0E64B05BF18704952F&biz_tag=aweme_video")


function toggleSelected(element) {
    // 移除所有图片项的选中状态
    const imageItems = document.querySelectorAll('.image-item');
    imageItems.forEach(item => {
        item.classList.remove('selected');
    });
    
    // 添加当前图片项的选中状态
    element.classList.add('selected');
}

setTimeout(() => {
    // updateImageList(imageSet);


}, 1000); // 每隔5秒执行一次


// chrome.runtime.sendMessage({ action: "getImages" }, response => {
//     console.log("Response from background:", response);

//     updateImageList(response);

// });



// // 监听来自 background 页面的消息
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log("Message received in popup:", message.greeting);
//     // 在这里处理消息，并根据需要发送回复

//     updateImageList();

// });
