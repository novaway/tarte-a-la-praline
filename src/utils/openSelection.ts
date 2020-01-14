import setDisplay from "../utils/setDisplay";
import CustomSelection from "../templates/CustomSelection";
import { customActionListener } from "./actionListener";

const openSelection = () => {
  const customSelectionView = document.getElementById("js-custom-selection");
  if (customSelectionView) {
    customSelectionView.innerHTML = CustomSelection();
  }
  customActionListener();
};
// setDisplay("js-custom-selection", "block")

export default openSelection;
