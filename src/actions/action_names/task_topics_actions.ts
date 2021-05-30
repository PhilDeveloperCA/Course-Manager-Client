export const LOADING_TASKS_TOPICS = 'loading tasks';
export const LOADED_TASKS_TOPICS = 'loaded tasks';
export const TASKS_TOPICS_FAILED = 'failed loading tasks';
export const TASK_TOPIC_ADDED = 'added task topic';
export const TASK_TOPIC_DELETED = 'deleted task topic';

export type TaskTopic = {
    id: number,
    task_id:number,
    name: string,
    description:string, 
}

export type TopicsLoading = {
    type: typeof LOADING_TASKS_TOPICS,
}

export type TopicsLoaded = {
    type: typeof LOADED_TASKS_TOPICS,
    payload : {
        topics: TaskTopic[],
    }
}

export type TopicsFailed = {
    type: typeof TASKS_TOPICS_FAILED,
}

export type TopicAdded = {
    type: typeof TASK_TOPIC_ADDED,
    payload : {
        task : TaskTopic,
    }
}

export type TopicDeleted = {
    type: typeof TASK_TOPIC_DELETED,
    payload : {
        id : number,
    }
}

