import { Service } from "../../types";

function CustomSelection(services: Service[]) {
  const checkboxList = () => {
    services.map(
      ({ name }) => `<div>
        <input type="checkbox" id=${name} name=${name} value="true">
        <label for=${name}>${name}</label>
      </div>`
    );
  };

  return `
    <div id="custom-selection">
      <form id="js-custom-cookie-form" class="custom-cookie-form">
          ${services
            .map(
              ({ name }) => `<div>
              <input type="checkbox" id=${name} name=${name} value="true">
              <label for=${name}>${name}</label>
            </div>`
            )
            .join("")}
          <div>
            <button type="submit" class="cookie-banner-button js-button-save-custom" data-micromodal-close>Valider</button>
          </div>
      </form>
    </div>
  `;
}

export default CustomSelection;
