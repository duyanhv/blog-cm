import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from 'react-google-maps';
import { compose } from 'recompose';
// import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

// export interface MapProps {

// }

const MapWithAMarkerWithLabel = compose(
    withScriptjs,
    withGoogleMap
)(_props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 21.0278, lng: 105.8342 }}
    >
    </GoogleMap>
);
class Map extends React.Component {
    render() {
        return (
            <section id="content">
                <MapWithAMarkerWithLabel
                    googleMapURL="https://maps.googleapis.com/maps/api/js?
                    key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `80%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </section>
        );
    }
}

export default Map;
