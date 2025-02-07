document.addEventListener("DOMContentLoaded", () => {
  const skillsList = document.querySelector(".skills-list");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsList.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  observer.observe(skillsList);

  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// 雫をランダムに生成
const numberOfDrops = 50; // 雫の数

for (let i = 0; i < numberOfDrops; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");

  // ランダムな位置で雫を表示
  drop.style.left = `${Math.random() * 100}%`; // 横方向
  drop.style.animationDuration = `${Math.random() * 2 + 4}s`; // 雫が降る速度をランダム
  drop.style.animationDelay = `${Math.random() * 5}s`; // 雫が降る遅延をランダム

  document.body.appendChild(drop);
}
