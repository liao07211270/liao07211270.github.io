/* 全局樣式 */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    color: #ddd;
}

/* Header 樣式 */
header {
    background: linear-gradient(90deg, #333, #555);
    color: white;
    text-align: center;
    padding: 40px 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}

header h1 {
    font-size: 3em;
    margin: 0;
}

/* Main 區域樣式 */
main {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.menu-list {
    list-style: none;
    padding: 0;
}

.menu-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 0;
    border-bottom: 1px solid #333;
}

.menu-img {
    width: 250px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

/* 放大圖片並顯示文字說明 */
.menu-img:hover {
    transform: scale(1.1);
}

.description {
    display: none;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9em;
}

.menu-item:hover .description {
    display: block;
}

/* Footer 樣式 */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
    font-family: 'Montserrat', sans-serif;
}
