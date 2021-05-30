import React, {useState, useEffect} from 'react';
import {TextField, Typography, Button} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';

type authState = {
    email : string,
    username? :string,
    password :string,
}

const successGoogle = (response:any) => {
    console.log(response);
    /*axios({
        method : "POST",
        url: "/auth/signin/google",
        data : {tokenId:response.tokenId}
    })*/
    axios.post('http://localhost:5000/auth/signin/google',{
        tokenId : response.tokenId,
    })
    .then(res => {
        console.log(res);
    })
}

const googleform = <GoogleLogin clientId="651121369384-mcv58qvt3hkhrkdbhqcv957fv0hdggbf.apps.googleusercontent.com" buttonText="login" onSuccess ={successGoogle} onFailure={successGoogle} />


const Auth:React.FC = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [auth, setAuth] = useState<authState>({email:'', username:'', password:''});

    const locallogin = () => {
        axios.post('http://localhost:5000/auth/signin', {
            email:auth.email,
            password : auth.password
        },{
            withCredentials:true,
        })
    }

    console.log(auth);

    if(!login){
    return (
        <React.Fragment>
            <TextField label="email" onChange={(e) => {setAuth({...auth, email:e.target.value})}}/>
            <TextField label="username"/>
            <TextField label="password"/>
            <Button onClick={(e)=>locallogin()}> Submit </Button>
        </React.Fragment>
    );
    }

    return(
        <React.Fragment>
            {googleform}
            <TextField onChange={(e) => {setAuth({...auth, email:e.target.value})}}/>
            <TextField onChange={(e) => {setAuth({...auth, password :e.target.value})}}/>
            <Button onClick={(e)=>locallogin()}> Submit </Button>
        </React.Fragment>
    );
}

export default Auth;