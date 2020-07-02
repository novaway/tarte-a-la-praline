import Banner from "../templates/Banner";
import Modal from "../templates/Modal";

export const insertBanner = (): void => {
  const $cookieBanner = document.createElement("div");
  const $modalCookie = document.createElement("div");

  $cookieBanner.id = "js-cookie-banner";
  document.body.appendChild($cookieBanner);

  $modalCookie.id = "js-cookie-modal";
  $modalCookie.classList.add("modal", "micromodal-slide");
  $modalCookie.setAttribute("aria-hidden", "true");
  document.body.appendChild($modalCookie);
};

export const showBanner = (primaryColor: string): void => {
  const $cookieBanner = document.getElementById("js-cookie-banner");
  const $modalCookie = document.getElementById("js-cookie-modal");

  console.log($cookieBanner);
  console.log($modalCookie);

  if ($cookieBanner) {
    $cookieBanner.innerHTML = Banner(primaryColor);
    $modalCookie.innerHTML = Modal(primaryColor);
  }
};
