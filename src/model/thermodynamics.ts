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
