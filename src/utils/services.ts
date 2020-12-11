import initGa from "../services/ga";
import initGtm from "../services/gtm";
import initHotjar from "../services/hotjar";
import { Service, DefaultServices } from "../types";
import camelCase from "./camelCase";

const setService = (
  name: string,
  callback: () => void,
  description?: string
): Service => ({
  name: camelCase(name),
  label: name,
  callback,
  description
});

export interface SetServicesProps {
  defaultServices: DefaultServices;
  customServices?: Service[];
}

export const setServices = ({
  defaultServices,
  customServices
}: SetServicesProps): Service[] => {
  let services = [];

  if (defaultServices.ga !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.ga.name,
        () => initGa(defaultServices.ga.code),
        defaultServices.ga.description
      )
    ];
  }

  if (defaultServices.gtm !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.gtm.name,
        () => initGtm(defaultServices.gtm.code),
        defaultServices.gtm.description
      )
    ];
  }

  if (defaultServices.hotjar !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.hotjar.name,
        () => initHotjar(defaultServices.hotjar.code),
        defaultServices.hotjar.description
      )
    ];
  }

  if (customServices !== undefined && customServices.length > 0) {
    services = [...services, ...customServices];
  }

  return services;
};
