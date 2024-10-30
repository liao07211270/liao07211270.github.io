$(document).ready(function() {
    // 平滑滾動到指定區塊
    $("nav ul li a").on("click", function(event) {
        event.preventDefault();
        const sectionId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
    });

    // 點擊圖片切換顯示或隱藏文字描述
    $(".menu-img").on("click", function() {
        const description = $(this).next(".description");
        description.toggle(); // 切換顯示/隱藏
    });
});
