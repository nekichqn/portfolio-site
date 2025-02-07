document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.main-image .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // すべてのスライドから active クラスを削除
            if (i === index) {
                slide.classList.add('active'); // 現在のスライドに active クラスを追加
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // 次のスライドに移動
        showSlide(currentSlide);
    }

    // 初期スライドを表示
    showSlide(currentSlide);
    // 3秒ごとにスライドを切り替え
    setInterval(nextSlide, 3000);
});

