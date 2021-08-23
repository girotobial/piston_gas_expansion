import { Adiabatic, Isobaric } from "@/model/thermodynamics";

test("For an isobaric expansion the work done should be equal to the pressure multiplied by the change in pressure", () => {
  const expansion = new Isobaric();
  expect(expansion.workDone(1, 1, 10)).toBe(9);
});

test("For an adiabatic expansion the pressure should reduce", () => {
  const expansion = new Adiabatic();
  expect(expansion.endPressure(1.23e6, 40e-6, 240e-6)).toBe(1e5);
});

test("For an adiabatic expansion with a smaller end volume the pressure should rise", () => {
  const expansion = new Adiabatic();
  expect(expansion.endPressure(1e5, 240e-6, 40e-6)).toBe(1.23e6);
});

test("Test adiabatic compression work done is negative", () => {
  const expansion = new Adiabatic();
  expect(expansion.workDone(1e5, 240e-6, 40e-6)).toBe(-63);
});
