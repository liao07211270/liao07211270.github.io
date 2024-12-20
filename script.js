$(document).ready(function() {
    let currentIndex = 0; // 當前圖片索引
    const images = $('.slider img'); // 獲取所有圖片
    const totalImages = images.length; // 總圖片數

    // 隱藏所有圖片
    images.hide();
    // 顯示第一張圖片
    images.eq(currentIndex).show();

    // 下一張圖片
    function nextImage() {
        images.eq(currentIndex).fadeOut(500, function() { // 隱藏當前圖片
            currentIndex = (currentIndex + 1) % totalImages; // 更新索引
            images.eq(currentIndex).fadeIn(500); // 顯示下一張圖片
        });
    }

    // 上一張圖片
    function prevImage() {
        images.eq(currentIndex).fadeOut(500, function() { // 隱藏當前圖片
            currentIndex = (currentIndex - 1 + totalImages) % totalImages; // 更新索引
            images.eq(currentIndex).fadeIn(500); // 顯示上一張圖片
        });
    }

    // 自動播放圖片
    let interval = setInterval(nextImage, 3000); // 每3秒切換一次圖片

    // 按鈕事件
    $('.next').on('click', function() {
        clearInterval(interval); // 暫停自動播放
        nextImage();
        interval = setInterval(nextImage, 3000); // 恢復自動播放
    });

    $('.prev').on('click', function() {
        clearInterval(interval); // 暫停自動播放
        prevImage();
        interval = setInterval(nextImage, 3000); // 恢復自動播放
    });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};




// 取得按鈕元素
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    // 當滾動超過300px時顯示按鈕
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
