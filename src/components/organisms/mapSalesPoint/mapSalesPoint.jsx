import React, { useState } from 'react'
import './mapSalesPoint.scss'
import credentials from '../../../assets/credentials/credentials'
import SidePointBar from '../../molecules/sidePointBar/sidePointBar'
import Map from '../../../components/organisms/googleMaps/Map'

const MapSalesPoint = () => {
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapskey}`
    const [defaultGeo, setDefaultGeo] = useState({ latitude: 4.5878177, longitude: -83.3849046, zoom: 5 })
    const [activePoint, setActivePoint] = useState(null)
    const [salesPoints, setSalesPoints] = useState([
        { nombre: "Jouler", latitude: 6.352912, longitude: -75.5600208 },
        { nombre: "Esteban", latitude: 6.351698, longitude: -75.562425 },
        { nombre: "Toro", latitude: 6.3505014, longitude: -75.5653718 },
    ])

    const setActualGeo = (latitude, longitude, zoom) => setDefaultGeo({ latitude: latitude, longitude: longitude, zoom: zoom ? zoom : 15 })

    const localizator = (position) => {
        setActualGeo(position.coords.latitude, position.coords.longitude, 11)
    }

    const positions = navigator.geolocation.getCurrentPosition(localizator, () => console.log("ERROR"))

    const onClickMarker = (element) => {
        console.log(element)
        setActivePoint(element)
        setActualGeo(element.latitude, element.longitude)
    }

    return (
        <>
            <h1>ESTE ES EL TÍTULO</h1>
            <div className="mapContainer">
                <Map
                    googleMapURL={mapURL}
                    containerElement={<div style={{ height: '500px' }} />}
                    mapElement={<div style={{ height: '100%', width: '100%' }} />}
                    loadingElement={<p>Cargando</p>}
                    defaultGeo={defaultGeo}
                    salesPoints={salesPoints}
                    onClickMarker={onClickMarker}
                />
                <SidePointBar salesPoints={salesPoints} activePoint={activePoint} onClickMarker={onClickMarker} />
            </div>
        </>
    )

}


export default MapSalesPoint

