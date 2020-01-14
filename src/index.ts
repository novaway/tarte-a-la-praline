import checkServicesStatus from "./utils/checkServicesStatus";
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import CustomSelection from "./templates/CustomSelection";
import { actionListener, customActionListener } from "./utils/actionListener";

interface Services {
  allowGa: boolean;
  allowHotjar: boolean;
}

const services = [
  {
    name: "ga",
    callback: (code: number) => initGa(code)
  },
  {
    name: "hotjar",
    callback: (code: number) => initHotjar(code)
  }
];

// initCookie({
//   matomo: () => alert("test"),
// });

function init() {
  const servicesStringify: null | string = localStorage.getItem("services");

  if (servicesStringify) {
    const services: Services = JSON.parse(servicesStringify);
    console.log(services.allowGa);

    if (checkServicesStatus(services.allowGa, services.allowHotjar) === false) {
      console.log("all services are false");
    }

    if (checkServicesStatus(services.allowGa, services.allowHotjar) === true) {
      console.log("all services are true");
      initGa(999999);
      initHotjar(111111);
    }
  }

  if (!servicesStringify) {
    console.log("localStorage is undefined");
    localStorage.setItem(
      "services",
      JSON.stringify({ allowGa: false, allowHotjar: false })
    );
  }

  const $bannerHomePage = document.getElementById("js-cookie-banner");
  if ($bannerHomePage) {
    $bannerHomePage.innerHTML = Banner();
  }

  actionListener();
}

init();

export default init;
