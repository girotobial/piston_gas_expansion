export interface Expansion {
  endPressure(
    startPressure: number,
    startVolume: number,
    endVolume: number
  ): number;
  workDone(
    startPressure: number,
    startVolume: number,
    endVolume: number
  ): number;
}

const sigFigs = (value: number, sigFigs: number) => {
  return parseFloat(value.toPrecision(sigFigs));
};

export class Isobaric implements Expansion {
  endPressure(startPressure: number, startVolume: number, endVolume: number): number { // eslint-disable-line
    return startPressure;
  }

  workDone(
    startPressure: number,
    startVolume: number,
    endVolume: number
  ): number {
    const deltaV = endVolume - startVolume;
    return startPressure * deltaV;
  }
}

class Adiabatic implements Expansion {
  gamma: number;

  constructor(gamma = 1.4) {
    this.gamma = gamma;
  }

  endPressure(
    startPressure: number,
    startVolume: number,
    endVolume: number
  ): number {
    const pressureRatio = startVolume / endVolume;
    return sigFigs(startPressure * pressureRatio ** this.gamma, 3);
  }

  workDone(
    startPressure: number,
    startVolume: number,
    endVolume: number
  ): number {
    const endPressure = this.endPressure(startPressure, startVolume, endVolume);
    const gammaRatio = 1 / (1 - this.gamma);
    const energyDifference =
      endVolume * endPressure - startVolume * startPressure;

    return sigFigs(gammaRatio * energyDifference, 3);
  }
}

export { Adiabatic };
