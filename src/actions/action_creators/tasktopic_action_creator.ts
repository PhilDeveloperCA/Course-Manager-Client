import {TASK_TOPIC_DELETED, TASK_TOPIC_ADDED, TASKS_TOPICS_FAILED, LOADED_TASKS_TOPICS, LOADING_TASKS_TOPICS, TopicAdded, TopicsFailed, TopicsLoaded, TopicDeleted, TopicsLoading} from '../action_names/task_topics_actions';
import axios from 'axios';
import {Dispatch} from 'redux';
const base_client = axios.create({baseURL : 'http://localhost:5000/topic'});



export const loadTopics = () => (dispatch:Dispatch<TopicsFailed|TopicsLoaded|TopicsLoading>) => {

}

export const addTopic = () => (dispatch:Dispatch<TopicAdded>) => {

}

export const deleteTopic = () => (dispatch:Dispatch<TopicDeleted>) => {

}

