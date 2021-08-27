import { pressure, length, volume } from "@/model/conversion";

describe("pressure", () => {
  it("converts 1 PSI to 8694.76 Pascals", () => {
    expect(pressure.psiToPascal(1)).toBeCloseTo(6894.76);
  }),
    it("converts 60PSI to 413685.6 Pascal", () => {
      expect(pressure.psiToPascal(60)).toBeCloseTo(413685.6);
    }),
    it("converts 10000 Pascal to 1.450377 PSI", () => {
      expect(pressure.pascalToPSI(10000)).toBeCloseTo(1.450377);
    });
});

describe("length", () => {
  it("converts 1000 millimetres to 1 metre", () => {
    expect(length.millimetreToMetre(1000)).toBeCloseTo(1);
  });
});

describe("volume", () => {
  it("converts 1m^3 to 1000cm^3", () => {
    expect(volume.metersCubedToCubicCentimeters(1)).toBeCloseTo(1000);
  }),
    it("coverts 1000cm^3 to 1m^3", () => {
      expect(volume.cubicCentimetersToMetersCubed(1000)).toBeCloseTo(1);
    });
});
