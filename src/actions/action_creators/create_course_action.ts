import {Dispatch} from 'redux';
import axios from 'axios';

import {COURSES_LOADING, COURSES_FAILED, SELECT_COURSE, SelectCourse, COURSES_LOADED, DELETE_COURSE, EDIT_COURSE, AddCourse, AddedCourse, DeleteCourse, EditCourse, Course, LoadCourses, LoadedCourses, FailedLoadingCourses, ADD_COURSE_LOADED, ADD_COURSE} from '../action_names/course_actions';

export type CourseActionStates = LoadedCourses | LoadCourses| FailedLoadingCourses;

export const getCourses = () => async(dispatch:Dispatch<CourseActionStates>) => {

    try{
        dispatch({
            type: COURSES_LOADING,
        })

        const res = await axios.get('http://localhost:5000/app/course', {withCredentials:true});
        
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

export const selectCourse = (id:number) => async(dispatch:Dispatch<SelectCourse>) => {
    dispatch({
        type : SELECT_COURSE,
        payload : {
            id,
        }
    })
}   

export const deleteCourse = (id:number|null) => async(dispatch:Dispatch<DeleteCourse>) => {
    if(id === null){
        return;
    }

    const res = axios.delete(`http://localhost:5000/app/course/${id}`,{withCredentials:true})
    .then(res => {
        dispatch({
            type: DELETE_COURSE,
            payload : {
                course_id:id,
            }
        })
    })
    .catch(err => {
        console.log(err);
    }) 
}

export const addCourse = (name:string, description:string, start_date:null|string = null) => async(dispatch:Dispatch<AddCourse>) => {
    
    console.log({name, description});
    const res = await axios.post(`http://localhost:5000/app/course`, {
        name,
        description,
        start_date
    },{
        withCredentials:true,
    });

    console.log(res.data);

    dispatch({
        type: ADD_COURSE,
        payload: {
            course: res.data,
        },
    })
}

export const editCourse = (course:Course) => async(dispatch:Dispatch<EditCourse>) => {
    try {
        const res = await axios.put(`http://localhost:5000/app/course/${course.id}`, {
            course,
        })
        
        dispatch({
            type: EDIT_COURSE,
            payload: {
                course,
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

export {}