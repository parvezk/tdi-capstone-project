export const HEATMAP_COLORS = [
  [213, 62, 79],
  [252, 141, 89],
  [254, 224, 139],
  [230, 245, 152],
  [153, 213, 148],
  [50, 136, 189]
].reverse();

export const LIGHT_SETTINGS2 = {
  lightsPosition: [-73.8, 40.5, 8000, -74.2, 40.9, 8000],
  ambientRatio: 0.4,
  diffuseRatio: 0.6,
  specularRatio: 0.2,
  lightsStrength: [0.8, 0.0, 0.8, 0.0],
  numberOfLights: 2
};

export const hexagonView = {
  zoom: 11,
  bearing: 0,
  pitch: 60
}

export const HEXAGON_CONTROLS = {
  showTrips: {
    displayName: 'Show Trip Trails',
    type: 'boolean',
    value: true
  },
  showHexagon: {
    displayName: 'Pickup/Drop Locations',
    type: 'boolean',
    value: false
  },
  radius: {
    displayName: 'Hexagon Radius',
    type: 'range',
    value: 250,
    step: 50,
    min: 50,
    max: 1000
  },
  coverage: {
    displayName: 'Hexagon Coverage',
    type: 'range',
    value: 0.7,
    step: 0.1,
    min: 0,
    max: 1
  },
  upperPercentile: {
    displayName: 'Hexagon Upper Percentile',
    type: 'range',
    value: 100,
    step: 0.1,
    min: 80,
    max: 100
  },
  radiusScale: {
    displayName: 'Scatterplot Radius',
    type: 'range',
    value: 10,
    step: 10,
    min: 10,
    max: 200
  }
};


