import {COURSE_TOPIC_FAILED, COURSE_TOPIC_LOADED, TASK_ADDED, AddTask, SELECT_COURSE, SelectCourse, COURSE_TOPIC_LOADING, CourseTopic, CourseTopicFailed, CourseTopicLoaded,CourseTopicLoading, QUIZ_FAILED, QUIZ_LOADED, QUIZ_LOADING,QUIZ_ADDED, QuizAdded, QuizLoad, QuizLoaded, QuizFailed, TASK_LOADING, TASK_LOADED,TASK_FAILED,TaskLoad,TaskLoaded,TaskFailed, CourseTopicAdded, COURSE_TOPIC_ADDED, DeleteTask, TASK_DELETED} from '../action_names/course_content_actions';
//import {TOPI} from '../action_creators/create_course_action';
import {Dispatch} from 'redux';
import axios from 'axios';

type LoadQuizActionTypes = QuizLoad|QuizLoaded|QuizFailed;

const base_client = axios.create({
    baseURL : 'http://localhost:5000/app/course',
    withCredentials : true,
})


export const selectCourse = (id:number) => async(dispatch:Dispatch<SelectCourse>) => {
    dispatch({
        type : SELECT_COURSE,
        payload : {
            id,
        }
    })
}   

export const loadQuizzes = (courseid:number) => async (dispatch:Dispatch<LoadQuizActionTypes>) => {
    try{
        dispatch({
            type: QUIZ_LOADING,
        })  
        
        const res = await base_client.get(`${courseid}/quiz`);

        dispatch({
            type:QUIZ_LOADED,
            payload: {
                quizzes : res.data,
            }
        })
    }
    catch(err){
        dispatch({
            type:QUIZ_FAILED,
        })
    }
}

export const addQuiz = (courseid:number, title:string) => async(dispatch:Dispatch<QuizAdded>) => {
    const res = await base_client.post(`/${courseid}/quiz`, {
        title,
    })
    dispatch({
        type: QUIZ_ADDED,
        payload : {
            quiz: res.data
        }
    })
}

type TaskLoadTypes = TaskLoad|TaskLoaded|TaskFailed;

export const loadTasks = (courseid:number) => async (dispatch:Dispatch<TaskLoadTypes>) => {
    try {
        dispatch({
            type: TASK_LOADING,
        })

        const res = await base_client.get(`/${courseid}/task`, );

        dispatch({
            type: TASK_LOADED,
            payload : {
                tasks: res.data,
            }
        })
    }
    catch(e){
        dispatch({
            type: TASK_FAILED,
        })
    }
}

export const addTask = (courseid:number, name:string, description:string) => async (dispatch:Dispatch<any>) => {
    try {
        const res = await base_client.post(`/${courseid}/task`, {
            courseid,
            name,
            description,
        });

        dispatch({
            type: TASK_ADDED,
            payload : {
                task: res.data,
            }
        })
    }   
    catch(e){

    }
}

type CourseTopicActionTypes = CourseTopicFailed | CourseTopicLoading | CourseTopicLoaded;

export const loadTopics = (courseid:number) => async (dispatch:Dispatch<CourseTopicActionTypes>) => {
    try { 
        dispatch({
            type: COURSE_TOPIC_LOADING,
        })

        const res = await base_client.get(`/${courseid}/topic`);

        dispatch({
            type: COURSE_TOPIC_LOADED,
            payload: res.data,
        })
    }
    catch(err){
        dispatch({
            type: COURSE_TOPIC_FAILED,
        })
    }
}

export const addTopic = (courseid:number, name:string, description:string) => async(dispatch:Dispatch<CourseTopicAdded>) => {
    try {
        const res = await base_client.post(`/${courseid}/topic`,{
            courseid,
            name,
            description,
        })

        dispatch({
            type: COURSE_TOPIC_ADDED,
            payload :  res.data,
        })
    }
    catch(e){
        //
    }
}

export const deleteTaskAction = (courseid:number, topcid:number) => async(dispatch:Dispatch<DeleteTask>) => {
    try {
        const res = await base_client.delete(`/${courseid}/task/${topcid}`);

        dispatch({
            type: TASK_DELETED,
            payload : {
                id: res.data.id,
            }
        })
    }
    catch(e){
        
    }
}