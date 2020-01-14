function checkServicesStatus(ga: boolean, hotjar: boolean) {
  if (ga && hotjar) {
    return true;
  } else {
    return false;
  }
}
export default checkServicesStatus;
