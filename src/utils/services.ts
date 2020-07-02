import initGa from "../services/ga";
import initHotjar from "../services/hotjar";
import { Service } from "../types";

const setService = (name: string, callback: () => void): Service => ({
  name,
  callback
});

export const setServices = ({ codeGa, codeHj, customServices }): Service[] => {
  let services = [];

  if (codeGa !== undefined) {
    services = [
      ...services,
      setService("Google Analytics", () => initGa(codeGa))
    ];
  }

  if (codeHj !== undefined) {
    services = [...services, setService("Hotjar", () => initHotjar(codeHj))];
  }

  if (customServices !== undefined && customServices.length > 0) {
    services = [...services, ...customServices];
  }

  return services;
};
