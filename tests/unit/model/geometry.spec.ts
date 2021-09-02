import {
  CircularCrossSection,
  degrees,
  radians,
  SquareCrossSection,
} from "@/model/geometry";

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

describe("radians", () => {
  it("Converts 360° to 2π", () => {
    expect(radians(360)).toBeCloseTo(2 * Math.PI);
  }),
    it("Converts 0° to 0π", () => {
      expect(radians(0)).toBeCloseTo(0);
    }),
    it("Converts 90° to 1/2π", () => {
      expect(radians(90)).toBeCloseTo(0.5 * Math.PI);
    }),
    it("Converts 180° to π", () => {
      expect(radians(180)).toBeCloseTo(Math.PI);
    });
});

describe("degress", () => {
  it("Converts 2π to 360­°", () => {
    expect(degrees(2 * Math.PI)).toBeCloseTo(360);
  }),
    it("Converts 0π to 0°", () => {
      expect(degrees(0)).toBeCloseTo(0);
    }),
    it("Converts π to 180°", () => {
      expect(degrees(Math.PI)).toBeCloseTo(180);
    });
});
