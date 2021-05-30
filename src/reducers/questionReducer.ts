import { MultipleChoice, ShortAnswer, MCQUESTION_DELETE, SAQUESTION_DELETE,QUESTIONS_LOADED, MCQUESTION_ADD, SA_SHOW } from "../actions/action_names/quiz_content_actions";
import {AllQuestionTypes, QUESTIONS_FAILED, QUESTIONS_LOADING} from '../actions/action_names/quiz_content_actions';

export type QuestionsState = {
    loading : boolean,
    failed : boolean,
    questions : {
        mc : MultipleChoice[],
        sa : ShortAnswer[]
    }
}

const initialState:QuestionsState = {
    loading: true,
    failed : false,
    questions: {
        mc: [],
        sa: []
    }
}

const questionReducer = (state:QuestionsState = initialState, action:AllQuestionTypes):QuestionsState=> {
    switch(action.type){
        case QUESTIONS_LOADED:{
            console.log(action.payload);
            return {...state, loading:false, questions:{mc:action.payload.MC, sa: action.payload.SA.map((SA) =>{
                return {...SA, show:false};
            })}}
        }
        case QUESTIONS_LOADING:{
            return {...state, loading:true}
        }
        case QUESTIONS_FAILED:{
            return {...state, failed:true}
        }
        case MCQUESTION_ADD: {
            return {...state}
        }
        case SA_SHOW:{
            return {...state} //do we really need to do this???
        }
        default : {
            return state;
        }
    }
}

export default questionReducer;