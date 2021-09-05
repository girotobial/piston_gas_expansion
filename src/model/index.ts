export * as conversion from "./conversion";
export * as geometry from "./geometry";
export * as mechanics from "./mechanics";
export * as thermodynamics from "./thermodynamics";

import { PistonBore } from "./mechanics";
import { Expansion } from "./thermodynamics";
import { Bottle } from "@/interfaces";
import { atmosphericPressurePa } from "./conversion";

export class Model {
  protected _piston: PistonBore;
  protected _expansion: Expansion;
  protected _bottle: Bottle;

  constructor(piston: PistonBore, expansion: Expansion, bottle: Bottle) {
    this._piston = piston;
    this._expansion = expansion;
    this._bottle = bottle;
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
    const startVolume = this.piston.bumpClearanceVolume();
    const endVolume = this.piston.volume(proportionOfTravel);
    return this.expansion.endPressure(startPressure, startVolume, endVolume);
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
