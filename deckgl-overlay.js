import React, {Component} from 'react';
import DeckGL, {PolygonLayer} from 'deck.gl';
import DeckGL, {ScatterplotLayer, HexagonLayer} from 'deck.gl';
import TripsLayer from './trips-layer';

import { HEATMAP_COLORS, LIGHT_SETTINGS2 } from './config/layer-configs';

/* CONSTANST */
const PICKUP_COLOR = [0, 128, 255];
const DROPOFF_COLOR = [255, 0, 128];
const elevationRange = [0, 1000];

const LIGHT_SETTINGS = {
  lightsPosition: [-74.05, 40.7, 8000, -73.5, 41, 5000],
  ambientRatio: 0.0,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

export default class DeckGLOverlay extends Component {

  static get defaultViewport() {
    return {
      altitude: 1.5,
      height: 355,
      longitude: -74,
      latitude: 40.72,
      zoom: 13,
      maxZoom: 16,
      pitch: 60,
      bearing: 0
    };
  }

  render() {
    const {viewport, buildings, trips, trailLength, time} = this.props;

    if (!buildings || !trips) {
      return null;
    }

    const layers = [

      this.props.showTrips ? new TripsLayer({
        id: 'trips',
        data: trips,
        getPath: d => d.segments,
        getColor: d => (d.vendor === 0 ? [253, 128, 93] : d.vendor === 1 ? [23, 184, 190] : d.vendor === 2 ? [18, 225, 18]: [17, 202, 156]),
        opacity: 0.5,
        strokeWidth: 2,
        trailLength,
        currentTime: time
      }) : null,

      this.props.showTrips ? new PolygonLayer({
        id: 'buildings',
        data: buildings,
        extruded: true,
        wireframe: false,
        fp64: true,
        opacity: 0.5,
        getPolygon: f => f.polygon,
        getElevation: f => f.height,
        getFillColor: f => [74, 80, 87],
        lightSettings: LIGHT_SETTINGS
      }) : null,

    ];

    return <DeckGL {...viewport} layers={layers} />;
  }
}
