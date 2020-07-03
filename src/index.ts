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
import { insertBanner, showBanner } from "./utils/banner";
import { setServices } from "./utils/services";

const __DEV__ = process.env.NODE_ENV !== "production";

interface ClassName {
  banner: string;
  text: string;
  button: string;
  modalContainer: string;
  modalTitle: string;
  modalField: string;
}

interface NovaCookie {
  codeGa?: string;
  codeHj?: string;
  customServices?: Service[];
  language?: Language;
  primaryColor?: string;
  className?: ClassName;
}

const defaultClassName = {
  banner: "cookie-banner",
  text: "cookie-banner-text",
  button: "cookie-banner-button",
  modalContainer: "modal-container",
  modalTitle: "modal-title",
  modalField: "modal-field"
};

function initTarteALaPraline({
  language,
  primaryColor,
  className,
  ...params
}: NovaCookie): void {
  if (language) {
    (window as any).TALP_SETTINGS.language = language;
  }

  (window as any).TALP_SETTINGS.className = {
    ...defaultClassName,
    ...(className ?? {})
  };

  // @ts-ignore
  const services: Service[] = setServices(...params);
  const storageServices = getStorageServices();

  if (storageServices === null) {
    window.addEventListener("load", () => {
      insertBanner();
      showBanner(primaryColor ?? "#000");
      actionListener(services);
      MicroModal.init();
    });
  }
}

if (__DEV__) {
  require("../translations/fr");
  initTarteALaPraline({
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
