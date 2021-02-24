import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => { 
        auth.signInWithPopup(provider).then(({user}) => { 
            dispatch(login({
                displayName: user.displayName,
                emial: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png" alt="" />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;