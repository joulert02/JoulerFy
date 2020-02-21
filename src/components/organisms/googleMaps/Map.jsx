import React, {useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, MarkerWithLabel } from 'react-google-maps'
import './Map.scss'


const Map = ({ defaultGeo, salesPoints, onClickMarker }) => {

    const [labelValue, setLabelValue] = useState('')
    
    return (
        <GoogleMap zoom={defaultGeo.zoom} center={{ lat: defaultGeo.latitude, lng: defaultGeo.longitude }}>
            {salesPoints && salesPoints.map((element, index) => {
                return (
                    <div key={index}>
                        <Marker
                            onClick={() => { onClickMarker(element) }}
                            position={{ lat: element.latitude, lng: element.longitude }}
                            label = {labelValue} position={{ lat: element.latitude, lng: element.longitude }}
                            onMouseOver={()=>setLabelValue(element.nombre)}
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
