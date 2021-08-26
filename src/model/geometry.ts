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
