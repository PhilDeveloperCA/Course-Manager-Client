import {Dispatch} from 'redux';
import {SwitchThemeMode, switchMode} from './theme_actions';

//set local storage here 

export const ChangeColorTheme = () => (dispatch:Dispatch<SwitchThemeMode>) => {
    dispatch({
        type: switchMode,
    })
}

export const ChangeColorTheme2 = () => {
    return {
        type: switchMode,
    }
}