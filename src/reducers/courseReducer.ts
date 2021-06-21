import {AddCourse, Course, DeleteCourse, DELETE_COURSE, EditCourse, SelectCourse} from '../actions/action_names/course_actions';
import { CourseActionStates } from '../actions/action_creators/create_course_action';
import {COURSES_LOADING, COURSES_LOADED, COURSES_FAILED, SELECT_COURSE, EDIT_COURSE, ADD_COURSE} from '../actions/action_names/course_actions';

type DefaultState = {
    loading: boolean,
    courses : Course[],
    failed : boolean,
    selectedCourse : number | null,
}

const DefaultState = {
    loading:true,
    courses: [],
    failed:false,
    selectedCourse: null, 
}


const CourseReducer = (state:DefaultState = DefaultState, action:AddCourse|EditCourse|CourseActionStates|SelectCourse|DeleteCourse) : DefaultState => {
    switch(action.type){
        case COURSES_LOADING: 
            return {...state, loading:true}
        case COURSES_LOADED:
            return {...state, courses: action.payload.courses, loading:false}
        case COURSES_FAILED:
            localStorage.removeItem('username');
            return {...state, loading:false, failed:true}
        case SELECT_COURSE:
            return {...state, selectedCourse : action.payload.id}
        case DELETE_COURSE:
            return {...state, courses: state.courses.filter((value,index,arr) => value.id != action.payload.course_id)}
        case ADD_COURSE:
            return {...state, courses:[...state.courses,action.payload.course]}
        case EDIT_COURSE:
            console.log(action);
            return {...state, courses: state.courses.map((course) => {
                if(course.id === action.payload.course.id){
                    return action.payload.course;
                }
                return course;
            })}
    }
    return {...state}
}

export default CourseReducer;