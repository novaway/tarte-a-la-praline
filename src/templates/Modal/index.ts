const Modal = (primaryColor: string): string => {
  const { language, className } = (window as any).TALP_SETTINGS;

  return `
    <div class="modal-overlay" data-modal style="color: ${primaryColor}">
      <div class="${className.modalContainer}" role="dialog" aria-modal="true">
        <header class="modal-header">
          <h2 class="${className.modalTitle}">${language.HEADER_MODAL}</h2>
          <button
            class="js-modal-button-close modal-close"
            aria-label="${language.HEADER_MODAL_BUTTON_CLOSE}"
            title="${language.HEADER_MODAL_BUTTON_CLOSE}"
          ></button>
        </header>
        <div class="modal-content">
          <div id="js-custom-selection"></div>
        </div>
      </div>
    </div>
  `;
};

export default Modal;
