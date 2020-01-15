import setDisplay from "./setDisplay";
import initGa from "../services/ga";
import initHotjar from "../services/hotjar";

interface Services {
  name: string;
  callback: () => any;
}

const allowAllCookies = ($services: Array<Services>) => {
  setAllLocalStoragesServicesTrue($services);
  $services.forEach(({ callback }) => callback());
  setDisplay("banner-cookie", "none");
};

const setAllLocalStoragesServicesTrue = ($services: Array<Services>) => {
  let $statusServices = {};
  $services.forEach(({ name }) => {
    $statusServices = {
      ...$statusServices,
      [name]: true
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
};

export default allowAllCookies;
