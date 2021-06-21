import React, {useState, useEffect} from 'react';
import {TextField, Typography, Button, makeStyles} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import {OAuthLogin, Login as LoginAction} from '../actions/action_creators/create_auth_actions';
import {useDispatch} from 'react-redux';

type authState = {
    email : string,
    username? :string,
    password :string,
}

const useStyles = makeStyles((theme => ({
    form:{
        maxWidth : '30%',
        //maxHeight: '400px',
        display : 'flex',
        flexDirection : 'column',
        paddingRight : '10%',
        paddingLeft : '10%',
        paddingTop:'20px',
        marginTop : '30px',
        marginBottom: '40px',
        margin: '0 auto',
        alignItems: 'center',
        //border: theme.palette.type === 'light'?'1 px solid black':'1 px solid white'
        borderColor: theme.palette.primary.main,
        borderWidth: '1px',
        borderStyle : 'solid',
    },
    field: {
        maxWidth: '100%',
        paddingTop : '30px',
        alignContent : 'center',
        alignItems: 'center'
    }
})));

const Auth:React.FC = () => {
    const [login, setLogin] = useState<boolean>(true);
    const [auth, setAuth] = useState<authState>({email:'', username:'', password:''});
    const dispatch = useDispatch();
    const classes = useStyles();

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
    // @ts-ignore
    const googleform = <GoogleLogin clientId={process.env.OAUTHCLIENT} buttonText="login" onSuccess ={successGoogle} onFailure={successGoogle} />
        
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