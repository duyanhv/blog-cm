const { compose, withProps } = require('recompose');
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require('react-google-maps');
// const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');
// const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const Map = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 21.021796, lng: 105.815662 },
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

        {/* <InfoBox>
            <div className="placecard__container">

                <div className="placecard__left">
                    <p className="placecard__business-name">Business Name Goes Here</p>
                    <p className="placecard__info">9 Avenida Ramón Luis Rivera, Bayamón, 00961, Puerto Rico</p>
                    <a className="placecard__view-large" 
                    href="https://maps.google.com/maps?ll=18.416035,-66.162618&amp;z=18
                    &amp;t=m&amp;hl=en-US&amp;gl=AR&amp;mapclient=embed&amp;cid=2947398168469204860" id="A_41">View larger map</a>
                </div>

                <div className="placecard__right">

                    <a className="placecard__direction-link" 
                    href="https://maps.google.com/maps?ll=18.416035,-66.162618&amp;z=18&amp;t=m&amp;hl=en-US&amp;gl=AR&amp
                    ;mapclient=embed&amp;daddr=Roberto%20Perez%20Obregon%20Law%20Office%209%20Aven
                    ida%20Ram%C3%B3n%20Luis%20Rivera%20Bayam%C3%B3n%2C%2000961%20Puerto%20Rico@18.4160349,-66.1626177" id="A_9">
                        <div className="placecard__direction-icon"></div>
                        Directions
                    </a>
                </div>

            </div>
        </InfoBox> */}
        <Marker
            position={{ lat: 21.021796, lng: 105.815662 }}
        >
        </Marker>
    </GoogleMap>
);

{/* <StyledMapWithAnInfoBox /> */ }

export default Map;
