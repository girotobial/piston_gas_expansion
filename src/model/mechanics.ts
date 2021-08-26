import { CrossSection } from "./geometry";

export const pressureForce = (pressure: number, area: number): number => {
  return pressure * area;
};

export class PistonBore {
  crossSection: CrossSection;
  tdcLength: number;
  strokeLength: number;

  constructor(
    crossSection: CrossSection,
    tdcLength: number,
    strokeLength: number
  ) {
    this.crossSection = crossSection;
    this.tdcLength = tdcLength;
    this.strokeLength = strokeLength;
  }

  strokeVolume(): number {
    return this.crossSection.area() * this.strokeLength;
  }

  tdcVolume(): number {
    return this.crossSection.area() * this.tdcLength;
  }

  bdcVolume(): number {
    return this.crossSection.area() * (this.tdcLength + this.strokeLength);
  }

  compressionRatio(): number {
    return this.bdcVolume() / this.tdcVolume();
  }
}
