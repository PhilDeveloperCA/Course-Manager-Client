import { Dispatch } from 'redux';
import {QUESTIONS_FAILED, MCEDIT_QUESTION, EditSAQuestion,EditMCQuestion,QUESTIONS_LOADED, QUESTIONS_LOADING, MCQUESTION_ADD, MCQUESTION_DELETE, SAQUESTION_EDIT, SAQUESTION_ADD, SAQUESTION_DELETE, AddMCQuestion, AddSAQuestion, DeleteMCQuestion, DeleteSAQuestion, QuestionsLoaded, QuestionsFailed, QuestionsLoading} from '../action_names/quiz_content_actions';
import axios from 'axios';

const base_client = axios.create({
    baseURL : 'http://localhost:5000/app/quiz'
})


type QuestionLoadTypes = QuestionsLoaded | QuestionsLoading | QuestionsFailed;

export const loadQuestions = (quizid:number) => async (dispatch:Dispatch<QuestionLoadTypes>)=> {
    try {
        dispatch({
            type: QUESTIONS_LOADING,
        })

        const res = await base_client.get(`/${quizid}/question`);
        
        dispatch({
            type: QUESTIONS_LOADED,
            payload : res.data,
        })
    }
    catch(e){
        dispatch({
            type: QUESTIONS_FAILED,
        })
    }
}

export const addSAQuestion =  (quizid:number, question:string, answer:string) => async (dispatch:Dispatch<AddSAQuestion>) => {
    
    const res = await base_client.post(`/${quizid}/sa`,
    {
        question,
        answer
    })

    dispatch({ 
        type: SAQUESTION_ADD,
        payload: {
            question: res.data,
        }
    })
}

export const editSAQuestion =  (quizid:number, questionid:number, question:string, answer:string) => async (dispatch:Dispatch<EditSAQuestion>) => {
    
    const res = await base_client.put(`/${quizid}/sa/${questionid}}`,
    {
        question,
        answer
    })

    dispatch({ 
        type: SAQUESTION_EDIT,
        payload: {
            question: res.data,
        }
    })
}

export const addMCQuestion =  (quizid:number,question:string, answer:string, a1:number, a2:number|null = null, 
        a3:number|null = null, a4:number|null = null, a5:number|null) => async (dispatch:Dispatch<AddMCQuestion>) => {
    
    const res = await base_client.post(`/${quizid}/mc`,
    {
        question,
        a1,
        a2,
        a3,
        a4,
        a5,
        answer
    })

    dispatch({ 
        type: MCQUESTION_ADD,
        payload: {
            question: res.data,
        }
    })
}

export const editMCQuestion = (quizid:number, questionid:number, question:string, answer:string, a1:number, a2:number|null = null, 
    a3:number|null = null, a4:number|null = null, a5:number|null) => async (dispatch:Dispatch<EditMCQuestion>) => {
    
        const res = await base_client.put(`/${quizid}/mc/${questionid}`,
        {
            question,
            a1,
            a2,
            a3,
            a4,
            a5,
            answer
        })
    
        dispatch({ 
            type: MCEDIT_QUESTION,
            payload: {
                question: res.data,
            }
        })
}
