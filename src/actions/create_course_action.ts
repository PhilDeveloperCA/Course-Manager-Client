import {Dispatch} from 'redux';
import axios from 'axios';

import {COURSES_LOADING, COURSES_FAILED, COURSES_LOADED, DELETE_COURSE, EDIT_COURSE, AddCourse, AddedCourse, DeleteCourse, EditCourse, Course, LoadCourses, LoadedCourses, FailedLoadingCourses} from './course_actions';

export type CourseActionStates = LoadedCourses | LoadCourses| FailedLoadingCourses;

export const getCourses = () => async(dispatch:Dispatch<CourseActionStates>) => {

    try{
        dispatch({
            type: COURSES_LOADING,
        })

        const res = await axios.get('http://localhost:5000/app/course');
        
        dispatch({
            type: COURSES_LOADED,
            payload: {
                courses : res.data,
            }
        })
        
    }

    catch(err){
        dispatch({
            type: COURSES_FAILED,
        })
    }
}

export const deleteCourse = (id:number) => async(dispatch:Dispatch<any>) => {
    
}

export const editCourse = (course:Course) => async(dispatch:Dispatch<EditCourse>) => {
    try {
        const res = await axios.put(`http://localhost:5000/app/course/${course.id}`, {
            body: course,
        })
        dispatch({
            type: EDIT_COURSE,
            payload: {
                course,
            }
        })
    }
    catch(err){

    }
}

export {}