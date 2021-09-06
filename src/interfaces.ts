export interface Bottle {
  pressure: number;
  capacity: number;
}

export interface Piston {
  cutOffPoint: number;
  bumpClearanceLength: number;
  strokeLength: number;
  boreWidth: number;
  shape: string;
}
