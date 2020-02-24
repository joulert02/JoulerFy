import React, { useState } from 'react'
import GenericButton from '../../atoms/genericButton/genericButton'
import './loginForm.scss'

const LoginForm = () => {

    const [formInfo, setFormInfo] = useState([])

    return (
        <form className="login-form">
            <input type="text" placeholder="Enter your email or user name" />
            <input type="password" placeholder="Enter your password" />
            <div className="remember-container">
                <input type="checkbox" />
                <label>Recuérdame</label>
            </div>
            <GenericButton
                type="button"
                content="Log In"
                className="black"
            />
        </form>
    )
}

export default LoginForm
