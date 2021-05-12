import {Course} from '../actions/course_actions';
import { CourseActionStates } from '../actions/create_course_action';
import {COURSES_LOADING, COURSES_LOADED, COURSES_FAILED} from '../actions/course_actions';

type DefaultState = {
    loading: boolean,
    courses : Course[],
    failed : boolean,
}

const DefaultState = {
    loading:true,
    courses: [],
    failed:false,
}

const CourseReducer = (state:DefaultState = DefaultState, action:CourseActionStates) : DefaultState => {
    switch(action.type){
        case COURSES_LOADING: 
            return {...state, loading:true}
        case COURSES_LOADED:
            return {...state, courses: action.payload.courses, loading:false}
        case COURSES_FAILED:
            return {...state, failed:true}
    }
    return {...state}
}

export default CourseReducer;