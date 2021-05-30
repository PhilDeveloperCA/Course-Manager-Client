//export {}
import {QUIZ_FAILED, SELECT_COURSE, SelectCourse, QUIZ_LOADED, QUIZ_LOADING, QUIZ_ADDED, QuizLoad, QuizLoaded, QuizFailed, Quiz, QuizAdded} from '../actions/action_names/course_content_actions';


type ActionStates = QuizLoad|QuizLoaded|QuizFailed|QuizAdded;

type DefaultState = {
    quizzes : Quiz[],
    loadFailed : boolean,
    loading:boolean,
    selectedCourse:number|null
}

const defaultState:DefaultState = {
    quizzes : [],
    loadFailed : false,
    loading:true,
    selectedCourse:null
}

const QuizReducer = (state: DefaultState = defaultState,action:ActionStates) : DefaultState=> {
    switch(action.type){
        case QUIZ_LOADING:
            return {...state, loading:true}
        case QUIZ_LOADED:
            return {...state, quizzes:action.payload.quizzes}
        case QUIZ_FAILED:
            return {...state, loadFailed:true}
        case QUIZ_ADDED:
            return {...state, quizzes: [...state.quizzes,action.payload.quiz]}
    }
    return {...state};
}

export default QuizReducer