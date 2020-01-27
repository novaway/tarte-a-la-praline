const checkServicesStatus = (storageList: any): boolean => {
  if (storageList) {
    Object.values(storageList).some(value => value == true);
  }
};

export default checkServicesStatus;
