//export {}
import {QUIZ_FAILED, QUIZ_LOADED, QUIZ_LOADING, QuizLoad, QuizLoaded, QuizFailed, Quiz} from '../actions/course_content_actions';


type ActionStates = QuizLoad|QuizLoaded|QuizFailed;

type DefaultState = {
    quizzes : Quiz[],
    loadFailed : boolean,
    loading:boolean,
}

const defaultState:DefaultState = {
    quizzes : [],
    loadFailed : false,
    loading:true
}

const QuizReducer = (state: DefaultState = defaultState,action:ActionStates) => {
    switch(action.type){
        case QUIZ_LOADING:
            return {...state, loading:true}
        case QUIZ_LOADED:
            return {...state, quizzes:action.payload}
        case QUIZ_FAILED:
            return {...state, loadFailed:true}
    }
    return {...state};
}

export default QuizReducer