import Banner from "../templates/Banner";
import Modal from "../templates/Modal";

export const insertBanner = (): void => {
  const $cookieBanner = document.createElement("div");
  const $modalCookie = document.createElement("div");

  $cookieBanner.id = "js-cookie-banner-container";
  document.body.appendChild($cookieBanner);

  $modalCookie.id = "js-cookie-modal";
  $modalCookie.setAttribute("aria-hidden", "true");
  document.body.appendChild($modalCookie);
};

const initModalActions = () => {
  const $buttonClose = document.querySelector(".js-modal-button-close");
  const $buttonCustomizeCookies = document.querySelector(
    ".js-cookie-button-customize"
  );

  $buttonClose.addEventListener("click", closeModal);
  $buttonCustomizeCookies.addEventListener("click", openModal);
};

const getModalElement = () => document.querySelector("#js-cookie-modal");

const openModal = () => {
  const $modal = getModalElement();
  $modal.classList.add("is-open");
  $modal.setAttribute("aria-hidden", "false");
};

export const closeModal = () => {
  const $modal = getModalElement();
  $modal.classList.remove("is-open");
  $modal.setAttribute("aria-hidden", "true");
};

export const showBanner = (primaryColor: string): void => {
  const $cookieBanner = document.getElementById("js-cookie-banner-container");
  const $modalCookie = document.getElementById("js-cookie-modal");

  if ($cookieBanner) {
    $cookieBanner.innerHTML = Banner(primaryColor);
    $modalCookie.innerHTML = Modal(primaryColor);
    initModalActions();
  }
};
