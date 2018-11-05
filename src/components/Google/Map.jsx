import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon,
} from "react-google-maps";
import React from "react";
import {compose, withProps } from "recompose";
import { GOOGLE_API_URL } from "./apiURL";

const DEFAULT_CENTER = { lat: 48.18386, lng: 11.6111 };

const supplementProps = compose(
  withProps({
    googleMapURL: GOOGLE_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
);

const GEO_JSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [ 11.611250638961792, 48.182814857434096 ],
            [ 11.611207723617554, 48.18263959598743 ],
            [ 11.61144644021988, 48.182610981816794 ],
            [ 11.611489355564117, 48.18278087822087 ],
            [ 11.611250638961792, 48.182814857434096 ]
          ],
          [
            [ 11.61130428314209, 48.182687882364206 ],
            [ 11.611306965351105, 48.182736168695435 ],
            [ 11.611398160457611, 48.182730803549774 ],
            [ 11.611398160457611, 48.18268072882977 ],
            [ 11.61130428314209, 48.182687882364206 ]
          ]
        ]
      }
    }
  ]
};

const getPolygonFrom = geoJson => geoJson.features[0].geometry.coordinates
  .map(coord => coord.slice(0, -1).map(
    entry => ({ lat: entry[1], lng: entry[0] }))
);

export const Map = supplementProps(props =>
  <GoogleMap
    defaultCenter={DEFAULT_CENTER}
    defaultZoom={19}
    defaultMapTypeId={window.google.maps.MapTypeId.SATELLITE}
    defaultTilt={0}
    center={props.centerLatLng}
  >
    <Polygon options={{ fillColor: "red", paths: getPolygonFrom(GEO_JSON)}} />
  </GoogleMap>
);

