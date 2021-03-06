import { PistonBore } from "@/model/mechanics";
import { CrossSection } from "@/model/geometry";

class FakeCrossSection implements CrossSection {
  width = 2;
  private _area = 3;
  private _perimeter = 4;
  public areaCalled = false;
  public perimeterCalled = false;

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
    expect(piston.bumpClearanceLength).toBe(1);
    expect(piston.strokeLength).toBe(2);
  }),
    it("calculates volume of stroke", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.strokeVolume()).toBe(6);
    }),
    it("calculates TDC volume", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.bumpClearanceVolume()).toBe(3);
    }),
    it("calculates BDC volume", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.bdcVolume()).toBe(9);
    }),
    it("calculates compression ratio", () => {
      const piston = new PistonBore(fakeCrossSection, 1, 2);
      expect(piston.compressionRatio()).toBe(3);
    });
  it("calculates cut-off volume", () => {
    const crossSection = new FakeCrossSection();
    const piston = new PistonBore(crossSection, 1, 2);
    expect(piston.cutoffVolume(0)).toBeCloseTo(piston.bumpClearanceVolume());
    expect(piston.cutoffVolume(1)).toBeCloseTo(piston.bdcVolume());
    expect(piston.cutoffVolume(0.5)).toBeCloseTo(6);
    expect(piston.cutoffVolume(0.25)).toBeCloseTo(4.5);
    expect(piston.cutoffVolume(0.75)).toBeCloseTo(7.5);
    expect(crossSection.areaCalled).toBe(true);
  });
  it("limits cut-off volume to be <= 1", () => {
    const piston = new PistonBore(fakeCrossSection, 1, 2);
    expect(piston.cutoffVolume(2)).toBeCloseTo(piston.cutoffVolume(1));
  });
  it("limits cut-off volume to be >= 0", () => {
    const piston = new PistonBore(fakeCrossSection, 1, 2);
    expect(piston.cutoffVolume(-1)).toBeCloseTo(piston.cutoffVolume(0));
  });
});
