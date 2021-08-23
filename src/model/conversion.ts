export const pressurePsiToPascal = (pressure: number): number => {
  const pascal = pressure * 6894.76;
  return Math.round(pascal * 100) / 100;
};
export const millimetreToMetre = (millimetre: number): number => {
  return millimetre / 1000;
};
