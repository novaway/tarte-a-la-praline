const CustomSelection = () => `
    <div id="custom-selection">
      <form class="custom-cookie-form">
          <div>
            <input type="checkbox" id="ga" name="allowGa" value="true">
            <label for="ga">ga</label>
          </div>
          <div>
            <input type="checkbox" id="hotJar" name="allowHotjar" value="true">
            <label for="hotJar">hotJar</label>
          </div>
          <div>
            <button type="submit" class="js-button-save-custom">Valider</button>
          </div>
      </form>
    </div>
`;

export default CustomSelection;
