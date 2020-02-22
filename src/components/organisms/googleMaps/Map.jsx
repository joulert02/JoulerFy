import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import './Map.scss'


const Map = ({ salesPoints, onClickMarker, activePoint }) => {

    // const [labelValue, setLabelValue] = useState('')

    return (
        <GoogleMap zoom={activePoint.zoom ? activePoint.zoom : 7} center={{ lat: activePoint.latitude, lng: activePoint.longitude }}>
            {salesPoints && salesPoints.map((element, index) => {
                console.log(element)
                console.log(activePoint)
                return (
                    <div key={index}>
                        <Marker
                            onClick={() => { onClickMarker(element) }}
                            position={{ lat: element.latitude, lng: element.longitude }}
                            // label={labelValue} position={{ lat: element.latitude, lng: element.longitude }}
                            // onMouseOver={() => setLabelValue(activePoint.nombre === element.nombre ? element.nombre : "")}
                        />
                    </div>
                )
            })}
        </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
