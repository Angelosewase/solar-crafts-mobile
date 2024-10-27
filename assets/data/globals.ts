import { ImageSourcePropType } from "react-native";

export type imgType = Record<string , ImageSourcePropType>
export interface IPlanet {
  id: number;
  imgSrc?: imgType;
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
  type?: string

  [description: string]: any; // index signature to allow additional properties
}



export interface IMessier {
  id: number;
  imgSrc?: imgType;
  name?: string;
  catalogNumber?: string; // Messier number (e.g., M1, M31)
  type?: string; // Type of object, e.g., galaxy, nebula
  distanceFromEarth?: number; // in light-years
  apparentMagnitude?: number; // brightness
  constellation?: string; // constellation where it's located
  discoveryDate?: string; // Date string
  discoveredBy?: string;
  size?: {
    diameter?: number; // in light-years
  };
  composition?: string[]; // composition of the object
  visibility?: {
    bestSeenFrom?: string; // northern/southern hemisphere
    visibleNakedEye?: boolean;
  };
  [description: string]: any; // for additional properties
}

export interface IStar {
  id: number;
  imgSrc?: imgType;
  name?: string;
  constellation?: string;
  spectralType?: string; // e.g., O, B, A, F, G, K, M
  distanceFromEarth?: number; // in light-years
  apparentMagnitude?: number; // brightness
  absoluteMagnitude?: number; // actual brightness at a standard distance
  radius?: number; // in solar radii
  temperature?: {
    surface?: number; // in Kelvin
    core?: number; // in Kelvin
  };
  mass?: number; // in solar masses
  luminosity?: number; // in solar luminosities
  age?: number; // in billions of years
  discoveredBy?: string;
  discoveryDate?: string; // Date string
  [description: string]: any; // for additional properties
}

export interface spaceData {
   type?:string
  [description: string]: any; 
}
