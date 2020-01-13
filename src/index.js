const checkServicesStatus = require("./utils/checkServicesStatus");
const initGa = require("./services/ga");
const initHotjar = require("./services/hotjar");

module.exports = function() {
  //check if localStorage is empty, if it is I build it with value false by default for the 2 services
  if (localStorage.getItem("services").length === 0) {
    localStorage.setItem(
      "services",
      JSON.stringify({ allowGa: false, allowHotjar: false })
    );
  }
  // Check if Services existe in localStorage
  if (localStorage.getItem("services").length > 0) {
    const services = JSON.parse(localStorage.getItem("services"));
    //Check values of services
    if (checkServicesStatus(services.allowGA, services.allowHotjar) === false) {
      //ALL the services are FALSE
    }
    if (checkServicesStatus(services.allowGA, services.allowHotjar)) {
      //ALL the services are TRUE
      initGa(), initHotjar();
    }
  }
};
