import { PistonBore } from "@/model/mechanics";
import { CrossSection } from "@/model/geometry";

class FakeCrossSection implements CrossSection {
  width = 2;
  private _area = 3;
  private _perimeter = 4;
  public areaCalled = false;
  public perimeterCalled = false;

    constructor() { } // eslint-disable-line

  public area() {
    this.areaCalled = true;
    return this._area;
  }
  public perimeter() {
    this.perimeterCalled = true;
    return this._perimeter;
  }
}

const fakeCrossSection = new FakeCrossSection();

describe("PistonBore", () => {
  it("constructs", () => {
    const piston = new PistonBore(fakeCrossSection, 1, 2);
    expect(piston.crossSection).toEqual(fakeCrossSection);
    expect(piston.tdcLength).toBe(1);
    expect(piston.strokeLength).toBe(2);
  }),
    it("calculates volume of stroke", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.strokeVolume()).toBe(6);
    }),
    it("calculates TDC volume", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.tdcVolume()).toBe(3);
    }),
    it("calculates BDC volume", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.bdcVolume()).toBe(9);
    }),
    it("calculates compression ratio", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.compressionRatio()).toBe(3);
    });
});
