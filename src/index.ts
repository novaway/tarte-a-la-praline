import checkServicesStatus from "./utils/checkServicesStatus";
import initGa from "./services/ga";
import initHotjar from "./services/hotjar";
import Banner from "./templates/Banner";
import actionListener from "./components/actionListener";

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
  if (!localStorage.services) {
    console.log("localStorage is undefined");
    localStorage.setItem(
      "services",
      JSON.stringify({ allowGa: false, allowHotjar: false })
    );
  }
  if (localStorage.services) {
    console.log("localStorage!==undefined");
    const services: Services =
      JSON.parse(localStorage.getItem("services")) !== null
        ? JSON.parse(localStorage.getItem("services"))
        : JSON.stringify({ allowGa: false, allowHotjar: false });

    if (checkServicesStatus(services.allowGa, services.allowHotjar) === false) {
      console.log("all services are false");
    }
    if (checkServicesStatus(services.allowGa, services.allowHotjar) === true) {
      console.log("all services are true");
      initGa(123);
      initHotjar(123);
    }
  }

  const theDiv = document.getElementById("js-cookie-banner");
  theDiv.innerHTML = Banner();

  actionListener();
}

init();

export default init;
