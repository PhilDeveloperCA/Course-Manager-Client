import {QUIZ_FAILED, QUIZ_LOADED, QUIZ_LOADING, QuizLoad, QuizLoaded, QuizFailed, TASK_LOADING, TASK_LOADED,TASK_FAILED,TaskLoad,TaskLoaded,TaskFailed} from './course_content_actions';
import {Dispatch} from 'redux';
import axios from 'axios';

type LoadQuizActionTypes = QuizLoad|QuizLoaded|QuizFailed;

const base_client = axios.create({
    baseURL : 'http://localhost:5000/'
})

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

type TaskLoadTypes = TaskLoad|TaskLoaded|TaskFailed;


