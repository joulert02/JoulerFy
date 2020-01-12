import React from 'react'
import './sessionButton.scss'
import { Link } from 'react-router-dom'

const ButtonGeneric = ({ type, text, redirect }) => {
    return (
            <Link className={type} to={redirect}>
                {text}
            </Link>
    )
}

export default ButtonGeneric
