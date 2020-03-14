import React, { useState } from 'react'
import './mapSalesPoint.scss'
import credentials from '../../../assets/credentials/credentials'
import SidePointBar from '../../molecules/sidePointBar/sidePointBar'
import Map from '../../../components/organisms/googleMaps/Map'
import PointsSales from '../../molecules/pointsSales/ponitsSales'

const MapSalesPoint = () => {
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapskey}`
    const [activePoint, setActivePoint] = useState({})
    const [salesPointsInfo, setSalesPointsInfo] = useState([
        { nombre: "Jouler", latitude: 6.352912, longitude: -75.5600208, zoom: 15 },
        { nombre: "Esteban", latitude: 6.351698, longitude: -75.562425, zoom: 15 },
        { nombre: "Toro", latitude: 6.3505014, longitude: -75.5653718, zoom: 15 },
    ])

    const onClickMarker = (element) => {
        console.log("EJECUTADO")
        setActivePoint(element)
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
                    salesPoints={
                        <PointsSales salesPointsInfo={salesPointsInfo} onClickMarker={onClickMarker} />
                    }

                    activePoint={activePoint}
                />
                <SidePointBar salesPointsInfo={salesPointsInfo} activePoint={activePoint} onClickMarker={onClickMarker} />
            </div>
        </>
    )

}


export default MapSalesPoint
