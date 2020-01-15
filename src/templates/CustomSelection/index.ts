function CustomSelection($services) {
  const checkboxList = () => {
    $services.map(({ name }) => {
      return `<div>
        <input type="checkbox" id=${name} name=${name} value="true">
        <label for=${name}>${name}</label>
      </div>`;
    });
  };

  return `
<div id="custom-selection">
  <form class="custom-cookie-form">
      ${$services
        .map(
          name =>
            `<div>
      <input type="checkbox" id=${name.name} name=${name.name} value="true">
      <label for=${name.name}>${name.name}</label>
    </div>`
        )
        .join("")}   
      <div>
        <button type="submit" class="js-button-save-custom">Valider</button>
      </div>
  </form>
</div>
`;
}

export default CustomSelection;
