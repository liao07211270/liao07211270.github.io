$(document).ready(function () {
    let currentIndex = 0;
    const images = $('.slider img');
    const totalImages = images.length;

    function showImage(index) {
        images.hide();
        images.eq(index).show();
    }

    $('.slider-button.next').click(function () {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    $('.slider-button.prev').click(function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    // 自動播放幻燈片
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }, 4000); // 每5秒自動切換
});
