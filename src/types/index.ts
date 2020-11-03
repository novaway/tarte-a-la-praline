export interface Service {
  name: string;
  callback: () => void;
}

export interface StorageServices {
  [key: string]: boolean;
}

export interface Language {
  TEXT_BANNER: string;
  BUTTON_AGREE: string;
  BUTTON_DECLINE: string;
  BUTTON_CUSTOM: string;
  BUTTON_VALIDATION: string;
  HEADER_MODAL: string;
}

export interface ClassName {
  banner: string;
  text: string;
  button: string;
  modalOverlay: string;
  modalHeader: string;
  modalContainer: string;
  modalTitle: string;
  modalButtonClose: string;
  modalField: string;
}
