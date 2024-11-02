<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="script.js"></script>
<script>
    // 頁面載入後自動滾動到頂部
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    // 留言提交後顯示感謝訊息
    function showSubmitMessage(event) {
        event.preventDefault(); // 阻止表單預設提交行為
        const message = document.getElementById('submit-message');
        message.style.display = 'block'; // 顯示訊息

        // 設置計時器，在2秒後隱藏訊息
        setTimeout(() => {
            message.style.display = 'none'; // 隱藏訊息
        }, 2000);

        document.getElementById('message').value = ''; // 清空留言輸入框
    }

    // 圖片輪播功能
    $(document).ready(function() {
        let currentIndex = 0; // 當前圖片索引
        const images = $('.slider img'); // 所有圖片元素
        const totalImages = images.length; // 圖片總數

        // 顯示指定索引的圖片
        function showImage(index) {
            images.hide(); // 隱藏所有圖片
            images.eq(index).show(); // 顯示當前索引的圖片
        }

        // 顯示前一張圖片
        $('.prev').click(function() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        });

        // 顯示下一張圖片
        $('.next').click(function() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        });

        // 初始顯示第一張圖片
        showImage(currentIndex);
    });

    // 回到頂端按鈕功能
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function() {
        if (window.scrollY > 300) { // 當滾動超過300px時顯示按鈕
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };

    backToTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
</script>

