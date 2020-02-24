import React from 'react'
import './sessionButton.scss'
import { Link } from 'react-router-dom'

const SessionButton = ({ type, text, redirect }) => {
    return (
            <Link className={type} to={redirect}>
                {text}
            </Link>
    )
}

export default SessionButton
