import React from 'react';
import './Login.css';
import {auth, provider} from './firebase'

import Button  from '@material-ui/core/Button';
function Login() {

    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch((err)=>console.log(err.message))
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg" alt="LGOO"/>
            </div>
            <Button onClick={signin}> Login</Button>
        </div>
    )
}

export default Login
