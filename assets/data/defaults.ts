import { ImageSourcePropType } from "react-native";
import { IMessier, imgType, IPlanet, IStar, spaceData } from "./globals";

const placeholderImage: imgType = require("@/assets/images/venus 1.png");

export const planetaryData: IPlanet[] = [
  {
    id: 1,
    imgSrc: placeholderImage,
    name: "Mercury",
    nickName: "The Swift Planet",
    mass: 3.285e23,
    radius: 2439.7,
    distanceFromSun: 0.39,
    orbitalPeriod: 88,
    rotationPeriod: 1407.6,
    numberOfMoons: 0,
    surfaceTemperature: {
      min: -173,
      max: 427,
      average: 167,
      day: 427,
      night: -173,
    },
    gravity: 3.7,
    discoveredBy: "Known since antiquity",
    discoveryDate: "N/A",
    rings: false,
    habitable: false,
    composition: ["Rocky"],
    magneticFieldStrength: 0.00003,
  },
  {
    id: 2,
    imgSrc: placeholderImage,
    name: "Venus",
    nickName: "The Evening Star",
    mass: 4.867e24,
    radius: 6051.8,
    distanceFromSun: 0.72,
    orbitalPeriod: 225,
    rotationPeriod: -5832.5,
    numberOfMoons: 0,
    atmosphereComposition: {
      "Carbon Dioxide": 96.5,
      Nitrogen: 3.5,
    },
    surfaceTemperature: {
      min: 462,
      max: 465,
      average: 464,
    },
    gravity: 8.87,
    discoveredBy: "Known since antiquity",
    discoveryDate: "N/A",
    rings: false,
    habitable: false,
    composition: ["Rocky"],
    waterPresence: false,
  },
  {
    id: 3,
    imgSrc: placeholderImage,
    name: "Earth",
    nickName: "The Blue Planet",
    mass: 5.972e24,
    radius: 6371,
    distanceFromSun: 1,
    orbitalPeriod: 365.25,
    rotationPeriod: 23.93,
    numberOfMoons: 1,
    atmosphereComposition: {
      Nitrogen: 78,
      Oxygen: 21,
      "Other Gases": 1,
    },
    surfaceTemperature: {
      min: -89,
      max: 58,
      average: 15,
    },
    gravity: 9.81,
    discoveredBy: "N/A",
    discoveryDate: "N/A",
    rings: false,
    habitable: true,
    composition: ["Rocky"],
    magneticFieldStrength: 0.0000312,
    waterPresence: true,
  },
  {
    id: 4,
    imgSrc: placeholderImage,
    name: "Mars",
    nickName: "The Red Planet",
    mass: 6.39e23,
    radius: 3389.5,
    distanceFromSun: 1.52,
    orbitalPeriod: 687,
    rotationPeriod: 24.6,
    numberOfMoons: 2,
    atmosphereComposition: {
      "Carbon Dioxide": 95.3,
      Nitrogen: 2.7,
      Argon: 1.6,
    },
    surfaceTemperature: {
      min: -125,
      max: 20,
      average: -60,
      day: 20,
      night: -73,
    },
    gravity: 3.71,
    discoveredBy: "Known since antiquity",
    discoveryDate: "N/A",
    rings: false,
    habitable: false,
    composition: ["Rocky"],
    waterPresence: true,
  },
  {
    id: 5,
    imgSrc: require("@/assets/images/venus 1.png"),
    name: "Jupiter",
    nickName: "The Giant Planet",
    mass: 1.898e27,
    radius: 69911,
    distanceFromSun: 5.2,
    orbitalPeriod: 4331,
    rotationPeriod: 9.93,
    numberOfMoons: 79,
    atmosphereComposition: {
      Hydrogen: 89.8,
      Helium: 10.2,
    },
    surfaceTemperature: {
      min: -145,
      average: -110,
    },
    gravity: 24.79,
    discoveredBy: "Known since antiquity",
    discoveryDate: "N/A",
    rings: true,
    habitable: false,
    composition: ["Gas Giant"],
    magneticFieldStrength: 0.00042,
  },
  {
    id: 6,
    imgSrc: placeholderImage,
    name: "Saturn",
    nickName: "The Ringed Planet",
    mass: 5.683e26,
    radius: 58232,
    distanceFromSun: 9.58,
    orbitalPeriod: 10747,
    rotationPeriod: 10.7,
    numberOfMoons: 83,
    atmosphereComposition: {
      Hydrogen: 96.3,
      Helium: 3.25,
    },
    surfaceTemperature: {
      min: -178,
      average: -139,
    },
    gravity: 10.44,
    discoveredBy: "Known since antiquity",
    discoveryDate: "N/A",
    rings: true,
    habitable: false,
    composition: ["Gas Giant"],
    magneticFieldStrength: 0.00021,
  },
  {
    id: 7,
    imgSrc: placeholderImage,
    name: "Uranus",
    nickName: "The Sideways Planet",
    mass: 8.681e25,
    radius: 25362,
    distanceFromSun: 19.22,
    orbitalPeriod: 30687,
    rotationPeriod: -17.2,
    numberOfMoons: 27,
    atmosphereComposition: {
      Hydrogen: 82.5,
      Helium: 15.2,
      Methane: 2.3,
    },
    surfaceTemperature: {
      min: -224,
      average: -195,
    },
    gravity: 8.69,
    discoveredBy: "William Herschel",
    discoveryDate: "1781-03-13",
    rings: true,
    habitable: false,
    composition: ["Ice Giant"],
    magneticFieldStrength: 0.00023,
  },
  {
    id: 8,
    imgSrc: placeholderImage,
    name: "Neptune",
    nickName: "The Windy Planet",
    mass: 1.024e26,
    radius: 24622,
    distanceFromSun: 30.05,
    orbitalPeriod: 60190,
    rotationPeriod: 16.1,
    numberOfMoons: 14,
    atmosphereComposition: {
      Hydrogen: 80,
      Helium: 19,
      Methane: 1.5,
    },
    surfaceTemperature: {
      min: -214,
      average: -200,
    },
    gravity: 11.15,
    discoveredBy: "Johann Galle",
    discoveryDate: "1846-09-23",
    rings: true,
    habitable: false,
    composition: ["Ice Giant"],
    magneticFieldStrength: 0.00034,
  },
];

export const messierData: IMessier[] = [
  {
    id: 1,
    imgSrc:  placeholderImage,
    name: "Andromeda Galaxy",
    catalogNumber: "M31",
    type: "Galaxy",
    distanceFromEarth: 2537000, // in light-years
    apparentMagnitude: 3.4,
    constellation: "Andromeda",
    discoveryDate: "964-01-01",
    discoveredBy: "Abd al-Rahman al-Sufi",
    size: {
      diameter: 220000, // in light-years
    },
    composition: ["Stars", "Dust", "Dark Matter"],
    visibility: {
      bestSeenFrom: "Northern Hemisphere",
      visibleNakedEye: true,
    },
  },
  {
    id: 2,
    imgSrc: placeholderImage ,
    name: "Orion Nebula",
    catalogNumber: "M42",
    type: "Nebula",
    distanceFromEarth: 1344, // in light-years
    apparentMagnitude: 4.0,
    constellation: "Orion",
    discoveryDate: "1610-11-26",
    discoveredBy: "Nicolas-Claude Fabri de Peiresc",
    size: {
      diameter: 24, // in light-years
    },
    composition: ["Hydrogen", "Helium", "Dust"],
    visibility: {
      bestSeenFrom: "Both Hemispheres",
      visibleNakedEye: true,
    },
  },
];

export const starData: IStar[] = [
  {
    id: 1,
    imgSrc: placeholderImage,
    name: "Betelgeuse",
    constellation: "Orion",
    spectralType: "M1-2 Ia-ab",
    distanceFromEarth: 642.5, // in light-years
    apparentMagnitude: 0.42,
    absoluteMagnitude: -5.85,
    radius: 887, // in solar radii
    temperature: {
      surface: 3500, // in Kelvin
    },
    mass: 18, // in solar masses
    luminosity: 126000, // in solar luminosities
    age: 8, // in millions of years
    discoveredBy: "Ancient Observers",
    discoveryDate: "Prehistory",
  },
  {
    id: 2,
    imgSrc: placeholderImage,
    name: "Sirius",
    constellation: "Canis Major",
    spectralType: "A1V",
    distanceFromEarth: 8.6, // in light-years
    apparentMagnitude: -1.46,
    absoluteMagnitude: 1.42,
    radius: 1.711, // in solar radii
    temperature: {
      surface: 9940, // in Kelvin
    },
    mass: 2.1, // in solar masses
    luminosity: 25.4, // in solar luminosities
    age: 0.242, // in billions of years
    discoveredBy: "Ancient Egyptians",
    discoveryDate: "Prehistory",
  },
];

export const Data: spaceData[] = [
  ...planetaryData.map((data) => ({ ...data, type: "planet" })),
  ...messierData.map((data) => ({ ...data, type: "messier" })),
  ...starData.map((data) => ({ ...data, type: "star" })),
];
