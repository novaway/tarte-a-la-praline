// @ts-ignore
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import Modal from "./templates/Modal";
import { actionListener } from "./utils/actionListener";
import deconstructTALP from "./utils/deconstructTalp"
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
import checkInputWhenReOpenModal from "./utils/checkInput";
import allowCookiesCategorie from "./utils/allowCookieCategorie";

const __DEV__ = process.env.NODE_ENV !== "production";

interface Props extends SetServicesProps {
  language?: {
    [key in keyof Language]?: string
  };
  primaryColor?: string;
  openModalClassName?: string;
  timeBeforeClosing?: number;
  className?: {
    [key in keyof ClassName]?: string
  };
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
      ...(window as any).TALP_SETTINGS.language,
      ...(language ?? {})
    };
  }

  (window as any).TALP_SETTINGS.className = {
    ...defaultClassName,
    ...(className ?? {})
  };

  document.addEventListener('click', (e) => {
    const $cookieModal:any = document.getElementById('js-cookie-modal');
    const $modalOverlay:any = document.querySelector('.talp-modal-overlay');
    if ($modalOverlay && $modalOverlay.classList.contains((e.target as any).classList)){
      $cookieModal.classList.remove('is-open');
      $cookieModal.ariaHidden = "true"
    }
  });

  const changeChoicesInModal = () =>{
    localStorage.removeItem('services');
    deconstructTALP();
    const cookieLifeTime = 13;
    initTALP({
      language,
      primaryColor,
      className,
      cookieLifeTime,
      ...params
    });
    const $cookieBanner = document.getElementById('js-cookie-banner');
    $cookieBanner.hidden = true;
    const $buttonCustomizeCookie:HTMLButtonElement | HTMLLinkElement = document.querySelector(
      '.js-cookie-button-customize',
    );
    $buttonCustomizeCookie.click();
    checkInputWhenReOpenModal();
    allowCookiesCategorie()
  }

  setTimeout(() => {
    const openModalButton = document.querySelector('.js-cookie-button-customize')
    if(openModalButton){
      openModalButton.addEventListener('click', () => {
        allowCookiesCategorie()
      })
    }
  }, 100)

  setTimeout(() => {
    const $denyButton:HTMLLinkElement = document.querySelector('.js-cookie-button-deny')
    const $banner:HTMLElement = document.querySelector('.talp-cookie-banner')
    if($banner.style.display !== 'none'){
      $denyButton.click();
    }
  }, params.timeBeforeClosing ? params.timeBeforeClosing : 60000)

  const $buttonOpenModal = document.querySelectorAll(params.openModalClassName);
  $buttonOpenModal.forEach(element => {
    element.addEventListener('click', changeChoicesInModal);
  });

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

  const serviceNotAvailableInLocalStorage = services
    .map(service => {
      service.value = storageServices[service.id] as boolean;
      return service;
    })
    .filter(service => !service.value);

    serviceNotAvailableInLocalStorage.forEach(({ value, executeIfDeny }) => {
      if( value == false && executeIfDeny){
        executeIfDeny();
      }
    });

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
    language:{
      TEXT_BANNER : "En acceptant les cookies, vous améliorez votre expérience utilisateur",
    },
    openModalClassName : '.open-new-modal',
    defaultServices: {
      ga: {
        code: "gaCode",
        label: "google analitycs",
        description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>",
      },
      hotjar: {
        id: "hotjarId",
        sv: "hotjarSv",
        label: "Hotjar",
      },
      gtm: {
        code: "gtmCode",
        label: "Google tag manager"
      },
      matomo: {
        id: "1",
        url : 'matomoUrl',
        executeIfDeny : () => console.log('denied matomo'),
        label: "Matomo",
      }
    },
    customServices: [
      {
        label: "My custom Service",
        categorie: 'perf',
        callback: () => console.log("set custom service callback"),
        executeIfDeny : () => console.log('denied custom service'),
        description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>",
        }
    ],
    cookieLifeTime: 13
  });
}

if ((window as any).Cypress) {
  (window as any).initTALP = initTALP;
}

export default initTALP;
