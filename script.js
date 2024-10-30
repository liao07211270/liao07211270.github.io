$(document).ready(function() {
    // 平滑滾動到指定區塊
    $("nav ul li a").on("click", function(event) {
        event.preventDefault(); // 阻止預設行為
        const sectionId = $(this).attr("href"); // 取得目標區塊的ID
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top
        }, 1000); // 平滑滾動效果
    });

    // 隱藏和顯示說明文字的功能
    $("#about h2").on("click", function() {
        $("#about p, #about .responsive-img").slideToggle(500); // 點擊標題切換說明文字的顯示狀態
    });

    $("#contact h2").on("click", function() {
        $("#contact p").slideToggle(500); // 點擊標題切換聯絡資訊的顯示狀態
    });
    
    // 增加圖片點擊放大效果
    $(".menu-img").on("click", function() {
        $(this).toggleClass("zoomed");
    });
});
