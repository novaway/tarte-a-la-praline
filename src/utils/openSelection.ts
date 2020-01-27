import setDisplay from "./setDisplay";
import CustomSelection from "../templates/CustomSelection";
import { customActionListener } from "./actionListener";
import { Services } from "../type";

const openSelection = ($services: Array<Services>) => {
  const customSelectionView = document.getElementById("js-custom-selection");
  if (customSelectionView) {
    customSelectionView.innerHTML = CustomSelection($services);
    customActionListener($services);
    setDisplay("js-custom-selection", "block");
  }
};

export default openSelection;
