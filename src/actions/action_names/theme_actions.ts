export const switchMode = 'SWITCH THEME MODE';
export const formmode = 'SWITCH FORM MODE';
export const COURSE_MODE = 'SWITCH COURSE MODE';
export const SELECT_COURSE ='select course';

export type SelectCourse = {
    type: typeof SELECT_COURSE;
    payload : {
        id : number,
    }
}

export interface SwitchCourseMode {
    type: typeof COURSE_MODE,
    payload: {
        index: number,
    }
}

export interface SwitchThemeMode {
    type : typeof switchMode
}

export interface SwitchFormMode {
    type: typeof formmode;
}