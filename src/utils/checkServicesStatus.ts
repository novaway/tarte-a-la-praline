const checkServicesStatus = (storageList) => {
  if (storageList) {
    Object.values(storageList).some(value => value == true);
  }
};

  export default checkServicesStatus;

  // [
  //   {
  //     name:"test",
  //     callback: function,
  //   },
  //    {
  //     name:"test",
  //     callback: function,
  //   },
  //   {
  //     name:"test",
  //     callback: function,
  //   }
  // ]

  // Object.values(listServices).some(value => value == true);

  // if (ga && hotjar) {
  //   return true;
  // } else {
  //   return false;
  // }
}
