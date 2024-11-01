$(document).ready(function() {
    // 平滑滾動到指定區塊
    $("nav ul li a").on("click", function(event) {
        event.preventDefault(); // 防止默認的錨點行為
        const sectionId = $(this).attr("href"); // 獲取點擊的連結 href 值，這通常是目標區塊的 ID
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top // 取得目標區塊的頂部位置，並執行滾動動畫
        }, 1000); // 1000 毫秒的動畫持續時間
    });

    // 游標在圖片上停留超過一秒時顯示文字描述
    let timer; // 初始化計時器
    $(".menu-img").on("mouseenter", function() {
        const description = $(this).siblings(".description"); // 獲取與當前圖片同層的描述文字
        timer = setTimeout(function() {
            description.fadeIn(); // 如果游標保持在圖片上超過一秒，則顯示文字描述
        }, 1000); // 1 秒的延遲
    }).on("mouseleave", function() {
        clearTimeout(timer); // 當游標離開圖片時，清除計時器
        $(this).siblings(".description").fadeOut(); // 隱藏文字描述
    });

    // 地圖圖片上的描述行為
    $(".small-img").on("mouseenter", function() {
        const mapDescription = $(this).siblings(".map-description"); // 獲取地圖描述
        timer = setTimeout(function() {
            mapDescription.fadeIn(); // 如果游標保持在地圖圖片上超過一秒，則顯示文字描述
        }, 1000); // 1 秒的延遲
    }).on("mouseleave", function() {
        clearTimeout(timer); // 當游標離開地圖圖片時，清除計時器
        $(this).siblings(".map-description").fadeOut(); // 隱藏文字描述
    });
});
