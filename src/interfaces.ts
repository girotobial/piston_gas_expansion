export interface Bottle {
  pressure: number;
  capacity: number;
}

export interface Piston {
  bumpClearanceLength: number;
  strokeLength: number;
  boreWidth: number;
  shape: string;
}
