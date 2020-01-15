import setDisplay from "./setDisplay";
import initGa from "../services/ga";
import initHotjar from "../services/hotjar";

const allowAllCookies = $services => {
  setAllLocalStoragesServicesTrue($services);
  $services.forEach(({ callback }) => callback());
  setDisplay("banner-cookie", "none");
};

const setAllLocalStoragesServicesTrue = $services => {
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
