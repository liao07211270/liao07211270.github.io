// JavaScript for image slider functionality
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function showImage(index) {
    // 確保索引在範圍內
    if (index < 0) {
        currentIndex = images.length - 1; // 循環到最後一張
    } else if (index >= images.length) {
        currentIndex = 0; // 循環到第一張
    } else {
        currentIndex = index;
    }
    // 更新圖片顯示
    const offset = -currentIndex * 250; // 假設每張圖片寬度為250px
    slider.style.transform = `translateX(${offset}px)`;
}

// 設置按鈕事件
nextButton.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

// 自動播放功能（可選）
setInterval(() => {
    showImage(currentIndex + 1);
}, 3000); // 每5秒切換圖片
