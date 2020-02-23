import React, { useEffect, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './Map.scss'

const Map = ({ salesPoints, activePoint }) => {

    const [initialPosition, setInitialPosition] = useState({})

    const localizator = (position) => {
        setInitialPosition({ ...[], latitude: position.coords.latitude, longitude: position.coords.longitude })
    }
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(localizator, () => console.log("ERROR"))
    }, [])
    
    return (
        <GoogleMap zoom={activePoint.zoom ? activePoint.zoom : 7}
            center={{ lat: activePoint.latitude ? activePoint.latitude : initialPosition.latitude, lng: activePoint.longitude ? activePoint.longitude : initialPosition.longitude }}>
            {salesPoints}
        </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
