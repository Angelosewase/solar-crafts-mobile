export interface IPlanet {
  id: number;
  imgSrc?: string;
  name?: string;
  nickName?: string;
  mass?: number; // in kilograms
  radius?: number; // in kilometers
  distanceFromSun?: number; // in astronomical units (AU)
  orbitalPeriod?: number; // in Earth days
  rotationPeriod?: number; // in Earth hours
  numberOfMoons?: number;
  atmosphereComposition?: {
    [element: string]: number; // element as key, percentage as value
  };
  surfaceTemperature?: {
    min?: number; // in Celsius
    max?: number; // in Celsius
    average?: number; // in Celsius
    day?: number; // in Celsius, daytime temperature
    night?: number; // in Celsius, nighttime temperature
  };
  gravity?: number; // in m/s²
  discoveredBy?: string;
  discoveryDate?: string; // Date string
  rings?: boolean;
  habitable?: boolean;
  composition?: string[]; // e.g., rocky, gas, etc.
  magneticFieldStrength?: number; // in Tesla
  waterPresence?: boolean;

  [description: string]: any; // index signature to allow additional properties
}
