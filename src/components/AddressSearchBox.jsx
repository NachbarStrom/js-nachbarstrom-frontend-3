import React from "react";
import '../styles/App.css';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs } from "react-google-maps";
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";

const hoc = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?" +
      "key=AIzaSyD0EQKyNdLXCDOfOmP9GMa__7_N91g7deM" +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};
      const hocNewState = {
        places: [],
        onSearchBoxMounted: ref => { refs.searchBox = ref },
        onPlacesChanged: () => {
          this.setState({ places: refs.searchBox.getPlaces() });
          this.props.addressChangedHandler(this.state.places);
        },
      };
      this.setState(hocNewState)
    },
  }),
  withScriptjs,
);

export const AddressSearchBox = hoc(props =>
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        defaultValue={props.currentAddress}
        type="text"
        placeholder="Gib hier deine Adresse ein"
        className="rectangle-input"
      />
    </StandaloneSearchBox>
  </div>
);
