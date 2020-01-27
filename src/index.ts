import checkServicesStatus from "./utils/checkServicesStatus";
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import { actionListener } from "./utils/actionListener";
import setDisplay from "./utils/setDisplay";
import { Services } from "./type";

// pour test =================================================================================
const code = "010101010";
// ===========================================================================================

let $services: Array<Services> = [
  {
    name: "Ga",
    callback: () => initGa(code)
  },
  {
    name: "Hotjar",
    callback: () => initHotjar(code)
  }
];

//const pour test module =====================================================================

const $moreServices: Array<Services> = [
  {
    name: "Matomo",
    callback: () => console.log("matomo")
  },
  {
    name: "TestServices",
    callback: () => console.log("testServices")
  }
];

//================================================================================================

function init($moreServices: Array<Services>) {
  const servicesStringify: null | string = localStorage.getItem("services");
  if ($moreServices) {
    $services = [...$services, ...$moreServices];
  }

  if (!servicesStringify) {
    setDisplay("js-custom-selection", "block");
    setDisplay("banner-cookie", "block");
    let $defaultStatusServices = {};
    $services.forEach(({ name }) => {
      $defaultStatusServices = {
        ...$defaultStatusServices,
        [name]: false
      };
    });
    localStorage.setItem("services", JSON.stringify($defaultStatusServices));
    const $bannerHomePage = document.getElementById("js-cookie-banner");
    if ($bannerHomePage) {
      $bannerHomePage.innerHTML = Banner();
    }
  }

  if (servicesStringify) {
    const $servicesStorage = JSON.parse(servicesStringify);
    if ($servicesStorage) {
      if (checkServicesStatus($servicesStorage)) {
        if ($services) {
          $services.forEach(({ callback }) => callback);
        }
      }
    }
  }

  actionListener($services);
}

init($moreServices);

export default init;
export { $services };
