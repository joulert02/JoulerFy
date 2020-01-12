import React from 'react'
import SessionContainer from '../../molecules/sessionContainer/sessionContainer'
import './header.scss'

const Header = () => {
    return (
        <header>
            <a className="header-logo" href="#">JoulerFY</a>
            <SessionContainer />
        </header>
    )
}

export default Header
