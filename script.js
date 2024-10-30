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
});
