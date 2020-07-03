const Modal = (primaryColor: string): string => {
  const { language, className } = (window as any).TALP_SETTINGS;

  return `
    <div class="modal-overlay" tabindex="-1" data-micromodal-close style="color: ${primaryColor}">
      <div class="${className.modalContainer}" role="dialog" aria-modal="true">
        <header class="modal-header">
          <h2 class="${className.modalTitle}">${language.HEADER_MODAL}</h2>
          <button
            class="modal-close"
            aria-label="Fermer"
            title="Fermer"
            data-micromodal-close
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
