// @ts-ignore
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import Modal from "./templates/Modal";
import { actionListener } from "./utils/actionListener";
import showElement from "./utils/setDisplay";
import { Service, StorageServices, Language, ClassName } from "./types";
import {
  clearServicesFromStorage,
  getStorageServices,
  setCreatedAtKey
} from "./utils/storage";
import { insertBanner, showBanner } from "./utils/banner";
import { setServices, SetServicesProps } from "./utils/services";
import allowCustomCookies from "./utils/allowCustomCookies";
import differenceInMonths from "date-fns/differenceInMonths";

const __DEV__ = process.env.NODE_ENV !== "production";

interface Props extends SetServicesProps {
  language?: Language;
  primaryColor?: string;
  className?: ClassName;
  cookieLifeTime?: number;
}

const defaultClassName: ClassName = {
  banner: "talp-cookie-banner",
  bannerContent: "talp-cookie-banner-content",
  text: "talp-cookie-banner-text",
  button: "talp-cookie-banner-button",
  modalOverlay: "talp-modal-overlay",
  modalHeader: "talp-modal-header",
  modalContainer: "talp-modal-container",
  modalTitle: "talp-modal-title",
  modalButtonClose: "talp-modal-close",
  modalField: "talp-modal-field",
  modalFieldDescription: "talp-modal-field-description"
};

function initTALP({
  language,
  primaryColor,
  className,
  cookieLifeTime = 13,
  ...params
}: Props): void {

  if (language) {
    (window as any).TALP_SETTINGS.language = {
      ...TALP_SETTINGS.language,
      ...(language ?? {})
    };
  }

  (window as any).TALP_SETTINGS.className = {
    ...defaultClassName,
    ...(className ?? {})
  };

  const services: Service[] = setServices(params);
  const storageServices = getStorageServices();

  if (storageServices === null) {
    showBanner(primaryColor);
    return actionListener(services);
  }

  if (storageServices.createdAt === undefined) {
    setCreatedAtKey({
      ...storageServices,
      createdAt: new Date().toISOString()
    });
  }

  if (Math.abs(differenceInMonths(new Date(storageServices.createdAt), new Date())) >= cookieLifeTime) {
    clearServicesFromStorage();
    showBanner(primaryColor);
    return actionListener(services);
  }

  const serviceAvailableInLocalStorage = services
    .map(service => {
      service.value = storageServices[service.id] as boolean;
      return service;
    })
    .filter(service => service.value);

  return allowCustomCookies(serviceAvailableInLocalStorage);
}

if (__DEV__) {
  require("../translations/fr");
  initTALP({
    language: {
      TEXT_BANNER: 'TODO',
    },
    defaultServices: {
      ga: {
        code: "gaCode",
        label: "google analitycs",
        description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>"
      },
      hotjar: {
        id: "hotjarId",
        sv: "hotjarSv",
        label: "Hotjar"
      },
      gtm: {
        code: "gtmCode",
        label: "Google tag manager"
      }
    },
    customServices: [
      {
        label: "My custom Service",
        callback: () => console.log("set custom service callback"),
        description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>"
      }
    ],
    cookieLifeTime: 13
  });
}

if ((window as any).Cypress) {
  (window as any).initTALP = initTALP;
}

export default initTALP;
