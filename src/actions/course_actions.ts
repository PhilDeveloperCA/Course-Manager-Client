export const COURSES_LOADING = 'loading courses';
export const COURSES_LOADED ='loadedcourses';
export const COURSES_FAILED='failed loading courses'
export const ADD_COURSE_LOADING ='adding course';
export const ADD_COURSE_LOADED = 'added course';
export const ADD_COURSE_FAILED = 'adding course failed';
export const DELETE_COURSE ='delete course';
export const EDIT_COURSE = 'edit course';

export type Course  = {
    id: number,
    name:string,
    description:string,
    start_date?:any,
    end_Date?:any,
    completed?:boolean,
}

export type AddedCourse = {
    name:string,
    description:string,
    start_date?:any,
    end_Date?:any,
    completed?:boolean,
}

export type LoadCourses  = {
    type : typeof COURSES_LOADING,
}

export type LoadedCourses = {
    type: typeof COURSES_LOADED,
    payload : {
        courses : Course[],
    }
}

export type FailedLoadingCourses = {
    type: typeof COURSES_FAILED
}

export type AddCourse = {
    //type: typeof ADD_COURSE,
    payload : {
        course: AddedCourse,
    }
}

export type EditCourse = {
    type: typeof EDIT_COURSE,
    payload: {
        course:AddedCourse,
    }
}

export type DeleteCourse = {
    type: typeof DELETE_COURSE,
    payload : {
        course_id : number,
    }
}

export {}