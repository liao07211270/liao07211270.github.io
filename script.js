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
    // 圖片輪播設定
    const slider = $(".slider");
    const images = $(".slider img");
    const totalImages = images.length;
    let currentIndex = 1;
    // 複製第一張和最後一張圖片，並添加到末尾和開頭
    const firstClone = images.first().clone();
    const lastClone = images.last().clone();
    slider.append(firstClone);
    slider.prepend(lastClone);
    // 更新圖片容器的寬度
    slider.css("width", `${(totalImages + 2) * 250}px`);
    slider.css("transform", `translateX(-${250}px)`); // 初始化位置

    function showImage(index) {
        $(".slider").css("transform", `translateX(-${index * 250}px)`);
        slider.css("transition", "transform 0.5s ease");
        slider.css("transform", `translateX(-${index * 250}px)`);
    }

    $(".next").click(function() {
        currentIndex = (currentIndex + 1) % totalImages; // 循環到第一張
        currentIndex++;
        showImage(currentIndex);
        if (currentIndex === totalImages + 1) { // 到達最後的複製圖
            setTimeout(() => {
                slider.css("transition", "none");
                currentIndex = 1;
                slider.css("transform", `translateX(-${250}px)`);
            }, 500);
        }
    });

    $(".prev").click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // 循環到最後一張
        currentIndex--;
        showImage(currentIndex);
        if (currentIndex === 0) { // 到達最前的複製圖
            setTimeout(() => {
                slider.css("transition", "none");
                currentIndex = totalImages;
                slider.css("transform", `translateX(-${currentIndex * 250}px)`);
            }, 500);
        }
    });
});
