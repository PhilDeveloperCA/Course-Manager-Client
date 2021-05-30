import React, {useState, useEffect} from 'react';
import {TextField, Typography, Button} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import {OAuthLogin, Login as LoginAction} from '../actions/action_creators/create_auth_actions';
import {useDispatch} from 'react-redux';

type authState = {
    email : string,
    username? :string,
    password :string,
}

const Auth:React.FC = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [auth, setAuth] = useState<authState>({email:'', username:'', password:''});
    const dispatch = useDispatch();

    const successGoogle = (response:any) => {
        axios.post('http://localhost:5000/auth/signin/google',{
            tokenId : response.tokenId,
        }, {
            withCredentials:true,
        })
        .then(res => {
            //console.log(res);
            dispatch(OAuthLogin(res.data.username));
        })
    }

    const googleform = <GoogleLogin clientId="651121369384-mcv58qvt3hkhrkdbhqcv957fv0hdggbf.apps.googleusercontent.com" buttonText="login" onSuccess ={successGoogle} onFailure={successGoogle} />
        
    const localLogin = () => {
        dispatch(LoginAction(auth.email, auth.password));
    }

    const locallogin = () => {
        axios.post('http://localhost:5000/auth/signin', {
            email:auth.email,
            password : auth.password
        },{
            withCredentials:true,
        })
    }

    if(!login){
    return (
        <React.Fragment>
            <TextField label="email" onChange={(e) => {setAuth({...auth, email:e.target.value})}}/>
            <TextField label="username"/>
            <TextField label="password"/>
            <Button onClick={(e)=>localLogin()}> Submit </Button>
        </React.Fragment>
    );
    }

    return(
        <React.Fragment>
            {googleform}
            <TextField onChange={(e) => {setAuth({...auth, email:e.target.value})}}/>
            <TextField onChange={(e) => {setAuth({...auth, password :e.target.value})}}/>
            <Button onClick={(e)=>localLogin()}> Submit </Button>
        </React.Fragment>
    );
}

export default Auth;