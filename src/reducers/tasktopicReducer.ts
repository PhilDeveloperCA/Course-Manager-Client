import {TASKS_TOPICS_FAILED, LOADED_TASKS_TOPICS, LOADING_TASKS_TOPICS, TASK_TOPIC_ADDED, TASK_TOPIC_DELETED} from '../actions/action_names/task_topics_actions';
import {TopicDeleted, TopicAdded, TopicsFailed, TaskTopic, TopicsLoaded, TopicsLoading} from '../actions/action_names/task_topics_actions';

type taskTopicState = {
    topics : TaskTopic[],
    loading : boolean,
    failed : boolean,
}

const defaultState:taskTopicState = {
    topics: [],
    loading: true,
    failed : false,
}

type validActions = TopicDeleted|TopicAdded|TopicsFailed|TopicsLoaded|TopicsLoading;

const tasktopicReducer = (state:taskTopicState = defaultState, action:validActions) : taskTopicState => {
    switch(action.type){
        case LOADING_TASKS_TOPICS: 
            return {...state, loading:true}
        case LOADED_TASKS_TOPICS:
            return {...state, loading:false, topics:action.payload.topics}
        case TASKS_TOPICS_FAILED:
            return {...state, loading:false,failed:true}
        case TASK_TOPIC_ADDED:
            return {...state, topics:[...state.topics, action.payload.task]}
        case TASK_TOPIC_DELETED:
            return {...state, topics:state.topics.filter(value => value.id != action.payload.id)}
        default : {
            return state;
        }
    }
    return state;
}

export default tasktopicReducer;