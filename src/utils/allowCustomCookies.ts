import { Service, StorageServices } from "../types";
import showElement from "./setDisplay";
import { getStorageServices } from "./storage";

const allowCustomCookies = (services: Service[]): void => {
  services.forEach(({ callback }) => {
    callback();
  });

  showElement("js-custom-selection", "none");
  showElement("banner-cookie", "none");
};

export default allowCustomCookies;
