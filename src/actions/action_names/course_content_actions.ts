export const QUIZ_LOADING = 'quiz loading';
export const QUIZ_LOADED = 'quiz loaded';
export const QUIZ_FAILED = 'quiz failed';
export const QUIZ_ADDED = 'quiz added';
export const SELECT_COURSE ='select course';

export type SelectCourse = {
    type: typeof SELECT_COURSE;
    payload : {
        id : number,
    }
}

export type Quiz = {
    id:number,
    course_id:number,
    title:string
}

/*export type AddedQuiz = {
    course_id:number,
    title: string
}*/

export type QuizAdded ={
    type: typeof QUIZ_ADDED,
    payload : {
        quiz : Quiz,
    }
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

export const TASK_LOADING = 'course task loading';
export const TASK_LOADED = 'course task loaded';
export const TASK_FAILED = 'course task failed';
export const TASK_ADDED = 'course task added'
export const TASK_DELETED = 'course task deleted';

export type Task = {
    id?:number,
    course_id:number,
    name:string,
    description:string,
}

export type DeleteTask = {
    type: typeof TASK_DELETED,
    payload : {
        id : number,
    }
}

export type AddTask = {
    type: typeof TASK_ADDED,
    payload : {
        task : Task,
    }
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
export const COURSE_TOPIC_ADDED = 'course topic added';

export type CourseTopic = {
    id:number,
    course_id:number,
    name:string,
    description:string,
}

export type CourseTopicAdded = {
    type: typeof COURSE_TOPIC_ADDED,
    payload : CourseTopic, 
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

export type CourseTopicActionTypes = CourseTopicFailed | CourseTopicLoaded | CourseTopicLoading;
