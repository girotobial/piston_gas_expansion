import { pressurePsiToPascal, millimetreToMetre } from "@/model/conversion";

test("1 PSI is equal to 6894.76 Pascal", () => {
  expect(pressurePsiToPascal(1)).toBe(6894.76);
});

test("60 PSI is equal to 413685.6 Pascal", () => {
  expect(pressurePsiToPascal(60)).toBe(413685.6);
});

test("1000 millimetres is equal to 1 metre", () => {
  expect(millimetreToMetre(1000)).toBe(1);
});
