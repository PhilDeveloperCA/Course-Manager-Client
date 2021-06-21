import React, {useState, useEffect} from 'react';
import {TextField, Typography, Button, makeStyles} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import {Login} from '../../actions/action_creators/create_auth_actions';
import {useDispatch} from 'react-redux';

type authState = {
    email : string,
    username? :string,
    password :string,
}

const useStyles = makeStyles((theme => ({
    form:{
        maxWidth : '50%',
        //maxHeight: '400px',
        display : 'flex',
        flexDirection : 'column',
        paddingRight : '10%',
        paddingLeft : '10%',
        marginTop : '30px',
        margin: '0 auto',
        alignItems: 'center'
    },
    field: {
        maxWidth: '60%',
        paddingTop : '30px',
        alignContent : 'center',
        alignItems: 'center'
    }
})));

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
    const dispatch = useDispatch();
    const classes = useStyles();

    const locallogin = () => {
        axios.post('http://localhost:5000/auth/signin', {
            email:auth.email,
            password : auth.password
        },{
            withCredentials:true,
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    console.log(auth);

    if(!login){
    return (
        <React.Fragment>
            <form className={classes.form}>
                <TextField label="email" onChange={(e) => {setAuth({...auth, email:e.target.value})}}/>
                <TextField label="username"/>
                <TextField label="password"/>
                <Button onClick={(e)=>locallogin()}> Submit </Button>
            </form>
        </React.Fragment>
    );
    }

    //{googleform}

    return(
        <React.Fragment>
            <form className={classes.form}> 
                <TextField className={classes.field} fullWidth={false} label="email" onChange={(e) => {setAuth({...auth, email:e.target.value})}}/>
                <TextField className={classes.field} fullWidth={false} label="password" onChange={(e) => {setAuth({...auth, password :e.target.value})}}/>
                <Button onClick={(e)=>locallogin()}> Submit </Button>
            </form>
        </React.Fragment>
    );
}

export default Auth;