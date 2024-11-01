$(document).ready(function() {
    // 平滑滾動到指定區塊
    $("nav ul li a").on("click", function(event) {
        event.preventDefault();
        const sectionId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
    });

    // 游標在圖片上停留超過一秒時顯示文字描述
    let timer;
    $(".menu-img").on("mouseenter", function() {
        const description = $(this).siblings(".description");
        timer = setTimeout(function() {
            description.fadeIn();
        }, 1000);
    }).on("mouseleave", function() {
        clearTimeout(timer);
        $(this).siblings(".description").fadeOut();
    });

    // 設定圖片滑動
    let currentIndex = 0;
    const images = $(".slider img");
    const totalImages = images.length;

    function showImage(index) {
        $(".slider").css("transform", `translateX(-${index * 250}px)`);
    }

    $(".next").click(function() {
        currentIndex = (currentIndex + 1) % totalImages; // 循環到第一張
        showImage(currentIndex);
    });

    $(".prev").click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // 循環到最後一張
        showImage(currentIndex);
    });
});
