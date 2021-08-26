export interface ThreeDimensionalShape {
  width: number;
  height: number;
  crossSectionArea(): number;
  volume(): number;
}

export interface CrossSection {
  width: number;
  area(): number;
  perimeter(): number;
}

export class CircularCrossSection implements CrossSection {
  diameter: number;

  get width(): number {
    return this.diameter;
  }

  constructor(diameter: number) {
    this.diameter = diameter;
  }

  area() {
    return (0.5 * this.diameter) ** 2 * Math.PI;
  }
  perimeter() {
    return this.diameter * Math.PI;
  }
}

export class SquareCrossSection implements CrossSection {
  width: number;

  constructor(width: number) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }

  perimeter() {
    return this.width * 4;
  }
}

class Cylinder implements ThreeDimensionalShape {
  diameter: number;
  height: number;

  get width() {
    return this.diameter;
  }

  constructor(diameter: number, height: number) {
    this.diameter = diameter;
    this.height = height;
  }
  crossSectionArea(): number {
    return (0.5 * this.diameter) ** 2 * Math.PI;
  }
  volume(): number {
    return this.crossSectionArea() * this.height;
  }
}

class Cuboid implements ThreeDimensionalShape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  crossSectionArea(): number {
    return this.width ** 2;
  }
  volume(): number {
    return this.height * this.crossSectionArea();
  }
}

export const create3dShape = (
  crossSection = "circular",
  width: number,
  height: number
): ThreeDimensionalShape => {
  crossSection = crossSection.toLowerCase();
  switch (crossSection) {
    case "square":
      return new Cuboid(width, height);
    default:
      return new Cylinder(width, height);
  }
};
