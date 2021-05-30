import {LOGGING_OUT, AUTH_SUCCEEDED, AUTH_FAILED, AUTH_LOADING, AuthFailed, AuthLoading, AuthSuccess, LogOut} from '../action_names/auth_actions';
import {Dispatch} from 'redux';
import axios from 'axios';

const base_client = axios.create({
    baseURL: 'localhost:5000/auth',
    withCredentials: true,
})

export const Login = (email:string, password:string) => (dispatch:Dispatch<AuthLoading|AuthSuccess|AuthFailed>) => {
    console.log('Login Attempting');
    try {
        dispatch({
            type: AUTH_LOADING,
        })

        axios.post('http://localhost:5000/auth/signin', {
            email:email,
            password :password
        },{
            withCredentials:true,
        })
        .then(res => {
            dispatch({
                type: AUTH_SUCCEEDED,
                payload: {
                    name : res.data.username,
                }
            })
        })
        .catch(err=> dispatch({type: AUTH_FAILED}));
    }
    catch(err){

    }
}

export const Logout = () => (dispatch:Dispatch<LogOut>) => {
    dispatch({
        type: LOGGING_OUT,
    })
}

export const OAuthLogin = (username:string) => (dispatch:Dispatch<AuthSuccess>) => {
    dispatch({
        type: AUTH_SUCCEEDED,
        payload: {
            name: username,
        }
    })
}
