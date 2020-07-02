// @ts-ignore
import MicroModal from "micromodal";
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import Modal from "./templates/Modal";
import { actionListener } from "./utils/actionListener";
import showElement from "./utils/setDisplay";
import { Service, StorageServices, Language } from "./types";
import { getStorageServices } from "./utils/storage";
import "./scss/modal.scss";
import "./scss/cookie-banner.scss";

const __DEV__ = process.env.NODE_ENV !== "production";

const defaultServices = (codeGa: string, codeHj: string): Service[] => [
  {
    name: "Google Analytics",
    callback: () => initGa(codeGa)
  },
  {
    name: "Hotjar",
    callback: () => initHotjar(codeHj)
  }
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

const showCookieBanner = (primaryColor: string): void => {
  const $cookieBanner = document.getElementById("js-cookie-banner");
  const $modalCookie = document.getElementById("js-cookie-modal");

  if ($cookieBanner) {
    $cookieBanner.innerHTML = Banner(primaryColor);
    $modalCookie.innerHTML = Modal(primaryColor);
  }
};

interface NovaCookie {
  codeGa?: string;
  codeHj?: string;
  customServices?: Service[];
  language?: Language;
  primaryColor?: string;
}

function initTarteALaPraline({
  codeGa,
  codeHj,
  customServices,
  language,
  primaryColor
}: NovaCookie): void {
  if (language) {
    (window as any).tarteALaPralineLanguage = language;
  }

  const services: Service[] = [
    ...defaultServices(codeGa, codeHj),
    ...customServices
  ];
  const storageServices = getStorageServices();

  if (storageServices === null) {
    showCookieBanner(primaryColor ?? "#000");
    actionListener(services);
    MicroModal.init();
  }
}

if (__DEV__) {
  require("../translations/fr");
  initTarteALaPraline({
    codeGa: "le code GA",
    codeHj: "1",
    customServices: [
      {
        name: "mon service custom",
        callback: () => alert("yeah")
      }
    ]
  });
}

if ((window as any).Cypress) {
  (window as any).initTarteALaPraline = initTarteALaPraline;
}

export default initTarteALaPraline;
