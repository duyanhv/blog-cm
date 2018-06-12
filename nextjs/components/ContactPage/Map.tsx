const { compose, withProps, withStateHandlers } = require('recompose');
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require('react-google-maps');
// const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

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
    )
    ),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={props.center}
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

export default Map;
