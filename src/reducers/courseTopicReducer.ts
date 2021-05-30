
import { CourseActionStates } from '../actions/action_creators/create_course_action';
import { CourseTopic, CourseTopicActionTypes, CourseTopicAdded, COURSE_TOPIC_ADDED, COURSE_TOPIC_FAILED, COURSE_TOPIC_LOADED, COURSE_TOPIC_LOADING } from '../actions/action_names/course_content_actions';

type DefaultCourseTopicState = {
    topics : CourseTopic[],
    loading:boolean,
    failed:boolean 
}

const Startstate : DefaultCourseTopicState = {
    topics : [],
    loading : true,
    failed : false
}

const courseTopicReducer = (state:DefaultCourseTopicState = Startstate, action:CourseTopicActionTypes|CourseTopicAdded) : DefaultCourseTopicState=> {
    switch(action.type){
        case COURSE_TOPIC_LOADING: {
            return {...state, loading:true};
        }
        case COURSE_TOPIC_LOADED : {
            return {...state, topics:action.payload};
        }
        case COURSE_TOPIC_FAILED : {
            return {...state, failed:true};
        }
        case COURSE_TOPIC_ADDED: {
            return {...state, topics:[...state.topics, action.payload]}
        }
        default: {
            return {...state}
        }
    }
}

const courseTopicReducer2 = (start:DefaultCourseTopicState = Startstate, action:CourseTopicActionTypes):DefaultCourseTopicState => {
    console.log(action);
    const newState = courseTopicReducer(start, action);
    console.log(newState);
    return Startstate;
}
 
export default courseTopicReducer;