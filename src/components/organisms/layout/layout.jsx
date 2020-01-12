import React, { Fragment } from 'react'
import Header from '../header/header'
import './layout.scss'

const Layout = (props) => {
    return (
        <Fragment>
            <div className="background-container">
            </div>
            <Header />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout
