import initGa from "../services/ga";
import initGtm from "../services/gtm";
import initHotjar from "../services/hotjar";
import { Service } from "../types";

const setService = (name: string, callback: () => void): Service => ({
  name,
  callback
});

export interface SetServicesProps {
  codeGa?: string;
  codeGtm?: string;
  codeHj?: string;
  customServices?: Service[];
}

export const setServices = ({
  codeGa,
  codeGtm,
  codeHj,
  customServices
}: SetServicesProps): Service[] => {
  let services = [];

  if (codeGa !== undefined) {
    services = [...services, setService("ga", () => initGa(codeGa))];
  }

  if (codeGtm !== undefined) {
    services = [...services, setService("gtm", () => initGtm(codeGtm))];
  }

  if (codeHj !== undefined) {
    services = [...services, setService("hotjar", () => initHotjar(codeHj))];
  }

  if (customServices !== undefined && customServices.length > 0) {
    services = [...services, ...customServices];
  }

  return services;
};
