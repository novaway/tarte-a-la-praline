import CustomSelection from "../templates/CustomSelection";
import { customActionListener } from "./actionListener";
import { Service } from "../types";
import showElement from "./setDisplay";

const openSelection = (services: Service[]): void => {
  const customSelectionView = document.getElementById("js-custom-selection");

  if (customSelectionView) {
    customSelectionView.innerHTML = CustomSelection(services);
    customActionListener(services);
    showElement("js-custom-selection", "block");
  }
};

export default openSelection;
