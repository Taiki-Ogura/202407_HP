document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header-hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("show");
  });

  // ナビゲーションリンクをクリックしたときもメニューを閉じる
  const navLinks = document.querySelectorAll("nav ul li");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  });

  // メニュー外をクリックしたときにメニューを閉じる
  document.addEventListener("click", function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);
    if (!isClickInsideNav && !isClickInsideHamburger) {
      nav.classList.remove("show");
    }
  });
});
function confirmCall(phoneNumber) {
  if (confirm("電話をかけますか？")) {
    window.location.href = "tel:" + phoneNumber;
  }
}
