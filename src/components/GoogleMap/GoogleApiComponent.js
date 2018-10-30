import React from 'react';
import ReactDOM from 'react-dom';

import { Cache } from './Cache';
import { GoogleApi } from './GoogleApi';

export const wrapper = options => WrappedComponent => {
  class Wrapper extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        loaded: false,
        map: null,
        google: null
      };
    }

    componentDidMount() {
      this.scriptCache.google.onLoad((err, tag) => {
        const maps = window.google.maps;
        const node = ReactDOM.findDOMNode(this.refs.map);
        const center = new maps.LatLng(this.props.lat, this.props.lng);
        const mapConfig = { center, zoom: this.props.zoom };
        this.setState({
          loaded: true,
          map: new maps.Map(node, mapConfig),
          google: window.google,
        });
      });
    }

    componentWillMount() {
      this.scriptCache = Cache({
        google: GoogleApi({
          apiKey: options.apiKey,
          libraries: options.libraries || ['places', 'drawing'],
        })
      });
    }

    render() {
      const props = {
        ...this.props,
        loaded: this.state.loaded,
        map: this.state.map,
        google: this.state.google,
        mapComponent: this.refs.map,
      };

      return (
        <div style={{ height: '100%' }}>
          <WrappedComponent {...props} />
          <div ref="map" />
        </div>
      );
    }
  }

  return Wrapper;
};

export default wrapper;
