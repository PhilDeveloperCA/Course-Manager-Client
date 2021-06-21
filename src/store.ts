import {combineReducers, createStore, applyMiddleware} from 'redux';
import themeReducer from './reducers/themeReducer';
import CourseReducer from './reducers/courseReducer';
import QuizReducer from './reducers/quizReducer';
import taskReducer from './reducers/taskReducer';
import thunk from 'redux-thunk';
import courseTopicReducer from './reducers/courseTopicReducer';
import questionReducer from './reducers/questionReducer';
import linkReducer from './reducers/linkReducer';
import tasktopicReducer from './reducers/tasktopicReducer';
import AuthReducer from './reducers/authReducer';

const reducers = combineReducers({
    authState: AuthReducer,
    theme : themeReducer,
    courses: CourseReducer,
    quizzes : QuizReducer,
    tasks : taskReducer,
    courseTopics :courseTopicReducer,
    questions: questionReducer,
    links : linkReducer,
    taskTopics: tasktopicReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));


export type StoreState = ReturnType<typeof store.getState>

export default store;