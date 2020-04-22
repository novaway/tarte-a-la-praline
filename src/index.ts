// @ts-ignore
import MicroModal from "micromodal";
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import { actionListener } from "./utils/actionListener";
import showElement from "./utils/setDisplay";
import { Service, StorageServices } from "./types";

import "./scss/modal.scss";
import "./scss/cookie-banner.scss";
import { getStorageServices } from "./utils/storage";

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

const showCookieBanner = (): void => {
  const $cookieBanner = document.getElementById("js-cookie-banner");

  if ($cookieBanner) {
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
    showElement("js-custom-selection", "block");
    showElement("banner-cookie", "block");
    showCookieBanner();

    actionListener(services);
    MicroModal.init();
  }
}

// init({
//   codeGa: "le code GA",
//   codeHj: "le code HJ",
//   customServices: [
//     {
//       name: "superTest",
//       callback: () => alert("yeah"),
//     },
//   ],
// });

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.init = init;
}

export default init;
