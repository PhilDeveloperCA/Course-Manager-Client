export const QUIZ_LOADING = 'quiz loading';
export const QUIZ_LOADED = 'quiz loaded';
export const QUIZ_FAILED = 'quiz failed';

export type Quiz = {
    id:number,
    course_id:number,
    title:string
}

export type QuizLoad = {
    type : typeof QUIZ_LOADING,
}

export type QuizLoaded = {
    type: typeof QUIZ_LOADED,
    payload : {
        quizzes: Quiz[]
    }
}

export type QuizFailed = {
    type: typeof QUIZ_FAILED,
}

export const TASK_LOADING = 'task loading';
export const TASK_LOADED = 'task loaded';
export const TASK_FAILED = 'task failed';

export type Task = {
    id:number,
    course_id:number,
    name:string
}

export type TaskLoad = {
    type: typeof TASK_LOADING
}

export type TaskLoaded = {
    type: typeof TASK_LOADED,
    payload: {
        tasks : Task[]
    }
}

export type TaskFailed = {
    type: typeof TASK_FAILED,
}

export const COURSE_TOPIC_LOADING ='course topic loading';
export const COURSE_TOPIC_LOADED ='course topic loaded';
export const COURSE_TOPIC_FAILED='course topic failed';

export type CourseTopic = {
    id:number,
    course_id:number,
    name:string,
}

export type CourseTopicLoading = {
    type: typeof COURSE_TOPIC_LOADING
}

export type CourseTopicLoaded = {  
    type: typeof COURSE_TOPIC_LOADED,
    payload: CourseTopic[],
}

export type CourseTopicFailed = {
    type: typeof COURSE_TOPIC_FAILED,
}
