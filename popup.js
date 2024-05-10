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
        imageElement.classList.add('o-image');

        imageElement.addEventListener('dragstart', function(event) {
            event.preventDefault();
        }, false);
        // 创建列表项
        const listItem = document.createElement('div');
        listItem.classList.add('image-item');
        listItem.onclick = function () {
            toggleSelected(this); // 添加点击事件，点击时调用 toggleSelected 函数
        };
        listItem.appendChild(imageElement);

        // 将列表项添加到图片列表中
        imageListElement.appendChild(listItem);
    });
}



// document.getElementById('rBgInfo').onclick = function() {
//     bg.toPopup()
// }


var imageSet = new Set();
imageSet.add("https://p3-pc-sign.douyinpic.com/tos-cn-p-0015/ogIilAIPDGnJgYAEI3WABqCafCeO9mjD5l8Sbj~tplv-dy-cropcenter:323:430.jpeg?biz_tag=pcweb_cover&from=3213915784&s=PackSourceEnum_FAVORITE&sc=cover&se=true&sh=323_430&x-expires=2030616000&x-signature=21ziyi7zSP6sxdc%2F8p6kVgjg7Sg%3D");
imageSet.add("https://p9-pc-sign.douyinpic.com/tos-cn-p-0015/o8zsgngIAANZ91BADAzDi66SjIC9gge1lCBfsb~tplv-dy-cropcenter:323:430.jpeg?biz_tag=pcweb_cover&from=3213915784&s=PackSourceEnum_FAVORITE&sc=cover&se=true&sh=323_430&x-expires=2030616000&x-signature=n%2FGMol2%2F%2Bx506Q8AzzqVn9S5szQ%3D")
imageSet.add("https://p3-pc-sign.douyinpic.com/tos-cn-p-0015/oglsYqgttAEcVHpoAzeyo9BRQhACfAkVpitIyG~tplv-dy-cropcenter:323:430.jpeg?biz_tag=pcweb_cover&from=3213915784&s=PackSourceEnum_FAVORITE&sc=cover&se=true&sh=323_430&x-expires=2030616000&x-signature=kHZNVcTymLsnvkmb8D2m%2Ber15Qw%3D")

var imageArray = [];

// 遍历 imageSet
imageSet.forEach(function (url) {
    // 创建一个对象，包含 imageUrl 和 selected 属性
    var imageObject = {
        imageUrl: url,
        selected: false
    };

    // 将对象添加到数组中
    imageArray.push(imageObject);
});
function toggleSelected(element) {
    // 移除所有图片项的选中状态
    // const imageItems = document.querySelectorAll('.image-item');
    // imageItems.forEach(item => {
    //     item.classList.remove('selected');
    // });

    var images = element.querySelectorAll('img');
    var imageUrl = images[0].src;
    // 在 imageArray 中找到包含该 URL 的对象
    var imageObject = imageArray.find(function (item) {
        return item.imageUrl === imageUrl;
    });

    // 如果找到了对象
    if (imageObject) {
        // 切换 selected 属性的值
        imageObject.selected = !imageObject.selected;

        // 更新页面显示状态
        if (imageObject.selected) {
            element.classList.add('selected');
            // 添加背景图片
            var bgImage = document.createElement('img');
            bgImage.classList.add('bg-img');
            bgImage.src = 'image/yes.png';
            element.appendChild(bgImage);
        } else {
            element.classList.remove('selected');
            // 移除背景图片
            var bgImage = element.querySelector('.bg-img');
            if (bgImage) {
                bgImage.remove();
            }
        }
    } else {
        console.log("not found")
    }
}

// 点击下载按钮时触发的事件处理程序
function downloadSelectedImages() {
    // 遍历 imageArray，找到选中的图片，并执行下载操作
    imageArray.forEach(function (item) {
        if (item.selected) {
            console.log(item.imageUrl)
            fetch(item.imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    // 创建一个 URL 对象
                    var url = window.URL.createObjectURL(blob);

                    // 创建一个 <a> 元素，用于下载图片
                    var link = document.createElement('a');
                    link.href = url;
                    link.download = 'image'; // 设置下载文件的名称
                    document.body.appendChild(link);
                    link.click();

                    // 释放 URL 对象
                    window.URL.revokeObjectURL(url);
                });
        }
    });
}

setTimeout(() => {
    // updateImageList(imageSet);
    const download = document.getElementById('download');
    download.addEventListener('click', function() {
        downloadSelectedImages();
    });
}, 200); // 每隔5秒执行一次


chrome.runtime.sendMessage({ action: "getImages" }, response => {
    console.log("Response from background:", response);
    imageArray = []
    // 遍历 imageSet
    response.forEach(function (url) {
        // 创建一个对象，包含 imageUrl 和 selected 属性
        var imageObject = {
            imageUrl: url,
            selected: false
        };

        // 将对象添加到数组中
        imageArray.push(imageObject);
    });
    updateImageList(response);

});



// // 监听来自 background 页面的消息
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log("Message received in popup:", message.greeting);
//     // 在这里处理消息，并根据需要发送回复

//     updateImageList();

// });
