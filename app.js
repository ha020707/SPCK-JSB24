var i = 0
var time = 3000
var images = []

images[0] = 'https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/april/240429-new-balance-1906-1up.jpg'
images[1] = 'https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/april/240429-fl-mothers-day-v2-1up.jpg'
images[2] = 'https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/may/240504-flus-rec74g7Rs-retro-4-military-blue-1up.jpg'

function changeImg() {
    document.slide.src = images[i]
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg()

// Text slideshow
var texts = ["Đăng kí ngay để được nhận 10%*", "Miễn phí vận chuyển cho mọi đơn hàng", "Giày đẹp giá rẻ"];

function changeText() {
    var textElement = document.getElementById('text-slide');
    textElement.textContent = texts[i];

    i = (i + 1) % texts.length;
    setTimeout(changeText, time - 1000);
}

window.onload = changeText()