document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const cookieOverlay = document.getElementById("cookie-overlay");
  const declineButton = document.getElementById("decline-cookies");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.classList.add("show");
    cookieOverlay.classList.add("show");
  }

  declineButton.addEventListener("click", function () {
    hideCookieBanner();
  });

  function hideCookieBanner() {
    cookieBanner.classList.remove("show");
    cookieOverlay.classList.remove("show");
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.remove("show");
    cookieOverlay.classList.remove("show");
  });
});

