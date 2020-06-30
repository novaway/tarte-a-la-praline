export interface Service {
  name: string;
  callback: () => void;
}

export interface StorageServices {
  [key: string]: boolean;
}
