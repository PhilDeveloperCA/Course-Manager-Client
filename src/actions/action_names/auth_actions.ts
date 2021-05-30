export const AUTH_LOADING = 'loading login';
export const AUTH_SUCCEEDED = 'logged in';
export const AUTH_FAILED = 'unauthenticated';

export const LOGGING_OUT ='logging out';

export type AuthLoading = {
    type: typeof AUTH_LOADING,
}

export type AuthSuccess = {
    type: typeof AUTH_SUCCEEDED,
    payload : {
        name : string,
    }
}

export type AuthFailed = {
    type: typeof AUTH_FAILED,
}

export type LogOut = {
    type: typeof LOGGING_OUT,
}