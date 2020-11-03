// @ts-ignore
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import Modal from "./templates/Modal";
import { actionListener } from "./utils/actionListener";
import showElement from "./utils/setDisplay";
import { Service, StorageServices, Language, ClassName } from "./types";
import { getStorageServices } from "./utils/storage";
import { insertBanner, showBanner } from "./utils/banner";
import { setServices } from "./utils/services";

const __DEV__ = process.env.NODE_ENV !== "production";

interface Props {
  codeGa?: string;
  codeHj?: string;
  customServices?: Service[];
  language?: Language;
  primaryColor?: string;
  className?: ClassName;
}

const defaultClassName: ClassName = {
  banner: "cookie-banner",
  text: "cookie-banner-text",
  button: "cookie-banner-button",
  modalOverlay: "modal-overlay",
  modalContainer: "modal-container",
  modalTitle: "modal-title",
  modalField: "modal-field"
};

function initTALP({
  language,
  primaryColor,
  className,
  ...params
}: Props): void {
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
    });
  }
}

if (__DEV__) {
  require("../translations/fr");
  initTALP({
    customServices: [
      {
        name: "mon service custom",
        callback: () => alert("yeah")
      }
    ]
  });
}

if ((window as any).Cypress) {
  (window as any).initTALP = initTALP;
}

export default initTALP;
