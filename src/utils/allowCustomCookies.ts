import initGa from "../services/ga";
import initHotjar from "../services/hotjar";
import setDisplay from "./setDisplay";

const allowCustomCookies = $services => {
  const $currentLocalStorage = JSON.parse(localStorage.getItem("services"));
  console.log($services);
  if ($services && $currentLocalStorage) {
    $services.forEach(({ name, callback }) => {
      if ($currentLocalStorage[name]) {
        callback();
      }
    });
  }
  setDisplay("js-custom-selection", "none");
  setDisplay("banner-cookie", "none");
};

export default allowCustomCookies;
