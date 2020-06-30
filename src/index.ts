// @ts-ignore
import MicroModal from "micromodal";
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import Modal from "./templates/Modal";
import { actionListener } from "./utils/actionListener";
import showElement from "./utils/setDisplay";
import { Service, StorageServices } from "./types";
import "./scss/modal.scss";
import "./scss/cookie-banner.scss";
import { getStorageServices } from "./utils/storage";

const __DEV__ = process.env.NODE_ENV !== "production";

const defaultServices = (codeGa: string, codeHj: string): Service[] => [
  {
    name: "Ga",
    callback: () => initGa(codeGa),
  },
  {
    name: "Hotjar",
    callback: () => initHotjar(codeHj),
  },
];
// @ts-ignore
document.body.onload = addCookieDiv();

function addCookieDiv() {
  const $cookieBanner = document.createElement("div");
  $cookieBanner.id = "js-cookie-banner";
  document.body.appendChild($cookieBanner);
  const $modalCookie = document.createElement("div");
  $modalCookie.id = "js-cookie-modal";
  $modalCookie.classList.add("modal", "micromodal-slide");
  $modalCookie.setAttribute("aria-hidden", "true");
  document.body.appendChild($modalCookie);
}

const showCookieBanner = (): void => {
  const $cookieBanner = document.getElementById("js-cookie-banner");
  const $modalCookie = document.getElementById("js-cookie-modal");

  if ($cookieBanner) {
    $modalCookie.innerHTML = Modal();
    $cookieBanner.innerHTML = Banner();
  }
};

interface NovaCookie {
  codeGa?: string;
  codeHj?: string;
  customServices?: Service[];
}

const initialValues = {
  codeGa: null,
  codeHj: null,
  customServices: [],
};

function init({
  codeGa,
  codeHj,
  customServices,
}: NovaCookie = initialValues): void {
  const services: Service[] = [
    ...defaultServices(codeGa, codeHj),
    ...customServices,
  ];
  const storageServices = getStorageServices();

  if (storageServices === null) {
    // showElement("js-custom-selection", "block");
    // showElement("banner-cookie", "block");
    showCookieBanner();

    actionListener(services);
    MicroModal.init();
  }
}

if (__DEV__) {
  init({
    codeGa: "le code GA",
    codeHj: "1",
    customServices: [
      {
        name: "superTest",
        callback: () => alert("yeah"),
      },
    ],
  });
}

if ((window as any).Cypress) {
  (window as any).init = init;
}

export default init;
