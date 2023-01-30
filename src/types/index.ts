export interface Service {
  id?: string;
  label: string;
  callback: () => void;
  description?: string;
  value?: boolean;
  executeIfDeny?: () => void;
  categorie?: string;
}

export interface DefaultServices {
  ga?: DefaultService;
  hotjar?: HotjarService;
  gtm?: DefaultService;
  matomo?: MatomoService;
}

export interface DefaultService {
  code: string;
  label: string;
  description?: string;
  executeIfDeny?: () => void;
  categorie?: string;
}

export interface HotjarService {
  id: string;
  sv: string;
  label: string;
  description?: string;
  executeIfDeny?: () => void;
  categorie?: string
}

export interface MatomoService {
  url: string;
  id: string;
  label: string;
  description?: string;
  executeIfDeny?: () => void;
  categorie?: 'measure'
}

export interface StorageServices {
  createdAt: string;
  [key: string]: boolean | string;
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
