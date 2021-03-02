import { Service, StorageServices } from "../types";
import showElement from "./setDisplay";
import { getStorageServices } from "./storage";

const allowCustomCookies = (services: Service[]): void => {
  services.forEach(({ callback }) => {
    callback();
  });

  showElement("js-custom-selection", "none");
  showElement("js-cookie-banner", "none");
};

export default allowCustomCookies;
