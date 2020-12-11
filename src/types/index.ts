export interface Service {
  name: string;
  label?: string;
  callback: () => void;
  description?: string;
}

export interface DefaultServices {
  ga?: DefaultService;
  hotjar?: DefaultService;
  gtm?: DefaultService;
}

export interface DefaultService {
  code: string;
  name: string;
  description?: string;
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
  SUBTITLE_MODALE: string;
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
