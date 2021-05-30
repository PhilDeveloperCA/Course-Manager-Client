import {AUTH_SUCCEEDED, AUTH_FAILED, AUTH_LOADING, AuthFailed, AuthLoading,AuthSuccess} from '../actions/action_names/auth_actions';

type AuthState = {
    loading: boolean,
    authorized : boolean,
    username : string|null,
    failed: boolean,
}

const InitialState:AuthState = {
    loading : false,
    authorized : localStorage.getItem("username") !== undefined,
    username : localStorage.getItem("username") || null,
    failed : false,
}

 const AuthReducer = (state:AuthState = InitialState, action:AuthFailed|AuthLoading|AuthSuccess) : AuthState => {
    switch(action.type){
        case AUTH_LOADING: {
                return {loading:true, authorized:false, username:null, failed:false};
        }
        case AUTH_SUCCEEDED:{
            localStorage.setItem("username",action.payload.name);
            return {loading:true, authorized:true, username:action.payload.name, failed:false};
        }
        case AUTH_FAILED:{
            return {loading:true, authorized:false, username:null, failed:true};
        }
        default : {
            return state;
        }
    }
}

export default AuthReducer;