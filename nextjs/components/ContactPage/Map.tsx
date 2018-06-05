// import React from 'react';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
// } from 'react-google-maps';
// import { compose } from 'recompose';
// // import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

// // export interface MapProps {

// // }

// const MapWithAMarkerWithLabel = compose(
//     withScriptjs,
//     withGoogleMap
// )(_props =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: 21.022301, lng: 105.8137018 }}
//     >
//     </GoogleMap>
// );
// class Map extends React.Component {
//     render() {
//         return (
//             <section id="content">
//                 <MapWithAMarkerWithLabel
//                     googleMapURL="https://maps.googleapis.com/maps/api/js?
//                     key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//                     loadingElement={<div style={{ height: `80%` }} />}
//                     containerElement={<div style={{ height: `400px` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                 />
//             </section>
//         );
//     }
// }

const { compose, withProps, withStateHandlers } = require('recompose');
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require('react-google-maps');
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');
// const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const Map = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 21.021796, lng: 105.815662 },
    }),
    withStateHandlers(() => (
        {
            isOpen: false,
        }
    ),
        {
            onToggleOpen: ({ isOpen }) => () => ({
                isOpen: !isOpen,
            })
        }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={props.center}
    // defaultOptions={{ styles: demoFancyMapStyles }}
    >
        {/* <InfoBox
            defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                    Hello, Taipei!
        </div>
            </div>
        </InfoBox> */}
        <Marker
            position={{ lat: 21.021796, lng: 105.815662 }}
            onClick={props.onToggleOpen}
        >
            {/* {props.isOpen && <InfoBox
                onCloseClick={props.onToggleOpen}
                options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
                <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                        Hello, Kaohsiung!
          </div>
                </div>
            </InfoBox>} */}
        </Marker>
    </GoogleMap>
);

{/* <StyledMapWithAnInfoBox /> */}

export default Map;
