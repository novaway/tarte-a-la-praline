const checkServicesStatus = (storageList: any[]): boolean => {
  if (storageList) {
    return Object.values(storageList).some((value: boolean) => value === true);
  }

  return false;
};

export default checkServicesStatus;
