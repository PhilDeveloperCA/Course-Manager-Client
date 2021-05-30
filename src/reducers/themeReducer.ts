import {formmode, SwitchFormMode,SELECT_COURSE, SelectCourse, COURSE_MODE, SwitchCourseMode, switchMode, SwitchThemeMode} from '../actions/action_names/theme_actions';

interface DefaultState {
    colorMode :  boolean,
    formCloseMode : boolean, 
    courseMode : number,
    loadedCourse : number|null,
}

const defaultState : DefaultState  =  {
    colorMode : true,
    formCloseMode : true,
    courseMode : 0,
    loadedCourse : null
}

const themeReducer = (state:DefaultState = defaultState, action: SwitchThemeMode|SwitchFormMode|SwitchCourseMode|SelectCourse) :DefaultState  => {
    //const newColor = state.colorMode===true? false:true;
    switch(action.type){
        case formmode:
            return {...state, formCloseMode:!state.formCloseMode}
        case switchMode:
            return {...state, colorMode:!state.colorMode}
        case COURSE_MODE:
            return{...state, courseMode:action.payload.index}
        case SELECT_COURSE:
            return {...state, loadedCourse:action.payload.id}
    }
    return {...state}
}

export default themeReducer;