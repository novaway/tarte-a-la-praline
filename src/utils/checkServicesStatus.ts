const checkServicesStatus = (storageList: any) => {
  if (storageList) {
    Object.values(storageList).some(value => value == true);
  }
};

export default checkServicesStatus;
