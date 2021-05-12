import {switchMode, SwitchThemeMode} from '../actions/theme_actions';

interface DefaultState {
    colorMode :  boolean, 
}

const DefaultState  =  {
    colorMode : true,
}

const themeReducer = (state:DefaultState = DefaultState, action: SwitchThemeMode) :DefaultState  => {
    const newColor = state.colorMode===true? false:true;

    return {
        colorMode : newColor,
    }
}

export default themeReducer;