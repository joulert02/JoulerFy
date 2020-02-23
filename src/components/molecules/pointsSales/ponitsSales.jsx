import React, { useState } from 'react'
import { InfoWindow, Marker } from 'react-google-maps'

const PonitsSales = ({ salesPointsInfo, onClickMarker }) => {

    const [isShowInfo, setIsShowInfo] = useState(false)
    const [idMarker, setIdMarker] = useState('')

    return (
        salesPointsInfo.map((element, index) => {
            return <div key={index}>
                <Marker
                    onClick={() => {
                        onClickMarker(element);
                        setIsShowInfo(true);
                        setIdMarker(index)
                    }}
                    position={{ lat: element.latitude, lng: element.longitude }}
                >
                    {isShowInfo && idMarker === index && <InfoWindow className="asd"><div><p>PERRRO</p><p>PERRRO</p><p>PERRRO</p><p>PERRRO</p></div></InfoWindow>}
                </Marker>
            </div>
        })
    )
}

export default PonitsSales
