import { Task, TaskFailed, TaskLoad, TaskLoaded, TASK_LOADED, TASK_LOADING,TASK_FAILED, TASK_ADDED, AddTask, TASK_DELETED, DeleteTask } from "../actions/action_names/course_content_actions";

type TaskLoadTypes = TaskLoad|TaskLoaded|TaskFailed|AddTask|DeleteTask;

type DefaultTaskState = {
    loading : boolean,
    tasks : Task[],
    failed : boolean
}

const defaultState = {
    loading: true,
    tasks : [],
    failed : false
}

const taskReducer = (state:DefaultTaskState = defaultState, action:TaskLoadTypes):DefaultTaskState => {
   switch(action.type){
        case TASK_LOADING:
            return {...state, loading:true}
        case TASK_LOADED:
            if(!action.payload.tasks){
                return {...state}
            }
            return {...state, tasks:action.payload.tasks,loading:false}
        case TASK_FAILED:
            return {...state, failed:true, tasks:[]}
        case TASK_ADDED:
            return {...state, tasks:[...state.tasks, action.payload.task]}
        case TASK_DELETED:
            return {...state, tasks: state.tasks.filter((value,index,array) => value.id!=action.payload.id)}
        default : {
            return {...state}
        }
    }
    return{...state}
}

export default taskReducer;