import React from 'react';
import GoogleApiComponent from './GoogleMap/GoogleApiComponent';
import * as ReactDOM from 'react-dom';

class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <GoogleMap
          google={this.props.google}
          onMarkerComplete={this.props.onMarkerComplete}
          geoJson={this.props.geoJson}
        />
      );
    }
  }
}

class GoogleMap extends React.Component {
  DEFAULT_LOCATION = {
    lat: 48.18386,
    lng: 11.6111
  };
  DEFAULT_ZOOM = 19;

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (this.props.geoJson !== prevProps.geoJson) {
      this.drawGeoJson(this.props.geoJson);
    }
  }

  loadMap = () => {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const center = new maps.LatLng(
        this.DEFAULT_LOCATION.lat,
        this.DEFAULT_LOCATION.lng
      );
      const mapConfig = {
        center: center,
        mapTypeId: 'hybrid',
        tilt: 0,
        zoom: this.DEFAULT_ZOOM
      };
      this.map = new maps.Map(node, mapConfig);
      this.addDrawingManager(this.map, google);
    }
    if (this.props && this.props.geoJson) {
      console.log('Got geoJson over props');
      this.drawGeoJson(this.props.geoJson);
    }
  };

  addDrawingManager = (map, google) => {
    const config = {
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
        drawingModes: ['marker']
      }
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(config);
    this.drawingManager.setMap(map);
    this.setupListener(google);
  };

  setupListener = google => {
    google.maps.event.addListener(
      this.drawingManager,
      'markercomplete',
      this.props.onMarkerComplete
    );
  };

  drawGeoJson = geoJson => {
    const options = { fillColor: '#96eeae' };
    this.map.data.addGeoJson(geoJson);
    this.map.data.setStyle(options);
  };

  render() {
    return (
      <div ref={'map'} style={{ height: '100%' }}>
        Loading map...
      </div>
    );
  }
}

export const Map = GoogleApiComponent({
  apiKey: 'AIzaSyD0EQKyNdLXCDOfOmP9GMa__7_N91g7deM'
})(Container);
