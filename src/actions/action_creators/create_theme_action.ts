import {Dispatch} from 'redux';
//import {switchModeS} from './action_names/action_names/theme_actions';
import {switchMode, SwitchThemeMode, SwitchCourseMode, COURSE_MODE, formmode, SELECT_COURSE, SelectCourse} from '../action_names/theme_actions';

//switchThemeMode
//set local storage here 

export const SwitchCourseModes = (index:number) => (dispatch:Dispatch<SwitchCourseMode>)=> {
    dispatch({
        type: COURSE_MODE, 
        payload : {
            index,
        }
    });
}

export const selectCourse = (id:number) => async(dispatch:Dispatch<SelectCourse>) => {
    dispatch({
        type : SELECT_COURSE,
        payload : {
            id,
        }
    })
}   

export const SwitchFormModes = () => {
    return({
        type: formmode,
    })
}

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