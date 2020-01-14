const checkServicesStatus = require("../src/utils/checkServicesStatus.ts");

//NEED TO RETURN FALSE
test("false & false retun false", () => {
  expect(checkServicesStatus(false, false)).toBe(false);
});

// test("false & true retun false", () => {
//   expect(checkServicesStatus(false, true)).toBe(false);
// });

// test("true & false retun false", () => {
//   expect(checkServicesStatus(true, false)).toBe(false);
// });

//NEED TO RETURN TRUE

test("true & true retun true", () => {
  expect(checkServicesStatus(true, true)).toBe(true);
});
