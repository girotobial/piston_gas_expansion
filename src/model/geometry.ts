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

  area(): number {
    return (0.5 * this.diameter) ** 2 * Math.PI;
  }
  perimeter(): number {
    return this.diameter * Math.PI;
  }
}

export class SquareCrossSection implements CrossSection {
  width: number;

  constructor(width: number) {
    this.width = width;
  }
  area(): number {
    return this.width ** 2;
  }
  perimeter(): number {
    return this.width * 4;
  }
}

export const radians = (degrees: number): number => {
  return (degrees / 180) * Math.PI;
};

export const degrees = (radians: number): number => {
  return (radians / Math.PI) * 180;
};
