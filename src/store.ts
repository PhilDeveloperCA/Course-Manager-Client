import {combineReducers, createStore, applyMiddleware} from 'redux';
import themeReducer from './reducers/themeReducer';
import CourseReducer from './reducers/courseReducer';
import QuizReducer from './reducers/quizReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    theme : themeReducer,
    courses: CourseReducer,
    quizzes : QuizReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;