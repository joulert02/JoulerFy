import React, { useState } from 'react'
import './sidePointBar.scss'

const SidePointBar = ({ salesPoints, activePoint, onClickMarker }) => {


    return (
        <div className="sidePoints">
            {activePoint &&
                <div className="info-container" onClick={() => onClickMarker(activePoint)}>
                    <p>{activePoint.nombre}</p>
                </div>}

            {salesPoints.map((element, index) => {
                return (
                    (element !== activePoint) &&
                    <div className="info-container" key={index} onClick={() => onClickMarker(element)}>
                        <p>{element.nombre}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SidePointBar
