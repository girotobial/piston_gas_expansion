const pascalPerPSI = 6894.76;
export const atmosphericPressurePa = 101325;

export const pressure = {
  psiToPascal: (pressure: number): number => {
    return pressure * pascalPerPSI;
  },

  pascalToPSI: (pressure: number): number => {
    return pressure / pascalPerPSI;
  },
};

export const length = {
  millimetreToMetre: (millimetres: number): number => {
    return millimetres / 1000;
  },
};

export const volume = {
  metersCubedToCubicCentimeters: (metersCubed: number): number => {
    return metersCubed * 1000;
  },
  cubicCentimetersToMetersCubed: (centimetersCubed: number): number => {
    return centimetersCubed / 1000;
  },
};
