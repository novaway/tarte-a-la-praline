import setDisplay from "./setDisplay";
import initGa from "../services/ga";
import initHotjar from "../services/hotjar";
import { Service } from "../types";

const allowAllCookies = ($services: Service[]) => {
  setAllLocalStoragesServicesTrue($services);
  $services.forEach(({ callback }) => callback());
  setDisplay("banner-cookie", "none");
};

const setAllLocalStoragesServicesTrue = ($services: Service[]) => {
  let $statusServices = {};
  $services.forEach(({ name }) => {
    $statusServices = {
      ...$statusServices,
      [name]: true,
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
};

export default allowAllCookies;
