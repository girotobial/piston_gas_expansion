const pascalPerPSI = 6894.76;

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
