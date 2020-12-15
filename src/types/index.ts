export interface Service {
  id?: string;
  label: string;
  callback: () => void;
  description?: string;
  value?: boolean;
}

export interface DefaultServices {
  ga?: DefaultService;
  hotjar?: DefaultService;
  gtm?: DefaultService;
}

export interface DefaultService {
  code: string;
  label: string;
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
  MODAL_FOOTER_TEXT: string;
}

export interface ClassName {
  banner: string;
  bannerContent: string;
  text: string;
  button: string;
  modalOverlay: string;
  modalHeader: string;
  modalContainer: string;
  modalTitle: string;
  modalButtonClose: string;
  modalField: string;
  modalFieldDescription: string;
}
