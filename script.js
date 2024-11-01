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
            description.fadeIn(); // 顯示文字描述
        }, 1000); // 1 秒延遲
    }).on("mouseleave", function() {
        clearTimeout(timer); // 清除計時器
        $(this).siblings(".description").fadeOut(); // 隱藏文字描述
    });

    // 圖片滑動頁面功能
    let slideIndex = 0;

    function showSlide(index) {
        const slides = $(".slider img");
        slideIndex = (index + slides.length) % slides.length; // 確保索引在範圍內
        $(".slider").css("transform", `translateX(-${slideIndex * 100}%)`);
    }

    // 點擊左右按鈕切換圖片
    $(".prev").on("click", function() {
        showSlide(slideIndex - 1);
    });

    $(".next").on("click", function() {
        showSlide(slideIndex + 1);
    });

    // 自動輪播
    setInterval(function() {
        showSlide(slideIndex + 1);
    }, 3000); // 每 3 秒自動切換一次
});
