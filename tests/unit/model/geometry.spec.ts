import { CircularCrossSection, SquareCrossSection } from "@/model/geometry";

describe("CircularCrossSection", () => {
  it("constructs", () => {
    const crossSection = new CircularCrossSection(2);
    expect(crossSection.width).toBeCloseTo(2);
  }),
    it("with width 8 it has an area of 16Pi", () => {
      const crossSection = new CircularCrossSection(8);
      expect(crossSection.area()).toBeCloseTo(16 * Math.PI);
    }),
    it("with width 4 it has a perimeter of 4 pi", () => {
      expect(new CircularCrossSection(4).perimeter()).toBeCloseTo(4 * Math.PI);
    });
});

describe("SquareCrossSection", () => {
  it("constructs", () => {
    const crossSection = new SquareCrossSection(2);
    expect(crossSection.width).toBeCloseTo(2);
  }),
    it("with width 4 it has a perimeter of 8", () => {
      expect(new SquareCrossSection(4).perimeter()).toBeCloseTo(16);
    }),
    it("with width 8 it has an area of 64", () => {
      expect(new SquareCrossSection(8).area()).toBeCloseTo(64);
    });
});
