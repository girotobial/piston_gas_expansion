import { CrossSection, radians } from "./geometry";

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

  pistonTravel(crankAngle: number): number {
    const crankAngleRadians = radians(crankAngle);
    const proportionOfTravel = 0.5 * (-Math.cos(crankAngleRadians) + 1);
    return proportionOfTravel * this.strokeLength;
  }

  torque(pressure: number, crankAngle: number): number {
    const force = this.crossSection.area() * pressure;
    const crankAngleRadians = radians(crankAngle);
    const leverArm = Math.sin(crankAngleRadians) * 0.5 * this.strokeLength;
    return force * leverArm;
  }

  volume(proportionOfTravel: number): number {
    if (proportionOfTravel > 1 || proportionOfTravel < 0) {
      throw new RangeError();
    }

    return (
      this.crossSection.area() * this.strokeLength * proportionOfTravel +
      this.tdcVolume()
    );
  }
}
