function checkServicesStatus(ga, hotjar) {
  if (ga && hotjar) {
    return true;
  }
  if (!ga && !hotjar) {
    return false;
  }
}
module.exports = checkServicesStatus;
// export default checkServicesStatus;
