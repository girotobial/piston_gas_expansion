export * as conversion from "./conversion";
export * as geometry from "./geometry";
export * as mechanics from "./mechanics";
export * as thermodynamics from "./thermodynamics";

import { PistonBore } from "./mechanics";
import { Expansion, Isobaric } from "./thermodynamics";
import { Bottle } from "@/interfaces";
import { atmosphericPressurePa } from "./conversion";

export class Model {
  protected _piston: PistonBore;
  protected _expansion: Expansion;
  protected _bottle: Bottle;
  cutOffPoint: number;

  constructor(
    piston: PistonBore,
    expansion: Expansion,
    bottle: Bottle,
    cutOffPoint = 0.25
  ) {
    this._piston = piston;
    this._expansion = expansion;
    this._bottle = bottle;
    this.cutOffPoint = cutOffPoint;
  }

  get piston(): PistonBore {
    return this._piston;
  }

  get expansion(): Expansion {
    return this._expansion;
  }

  get bottle(): Bottle {
    return this._bottle;
  }

  pressure(proportionOfTravel: number): number {
    const startPressure = this.bottle.pressure + atmosphericPressurePa;
    let startVolume = this.piston.bumpClearanceVolume();
    const endVolume = this.piston.volume(proportionOfTravel);
    let expansion: Expansion;

    if (proportionOfTravel < this.cutOffPoint) {
      expansion = new Isobaric();
    } else {
      startVolume = this.piston.cutoffVolume(this.cutOffPoint);
      expansion = this.expansion;
    }

    return expansion.endPressure(startPressure, startVolume, endVolume);
  }

  volume(proportionOfTravel: number): number {
    return this.piston.volume(proportionOfTravel);
  }

  torque(crankAngle: number): number {
    const proportionOfTravel =
      this.piston.pistonTravel(crankAngle) / this.piston.strokeLength;
    const pressure = this.pressure(proportionOfTravel) - atmosphericPressurePa;
    return this.piston.torque(pressure, crankAngle);
  }
}
