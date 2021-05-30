import {DELETE_LINK,ADD_LINK, LINKS_FAILED, LINKS_LOADED, LINKS_LOADING} from '../action_names/links_actions';
import {DeleteLink, AddLink, LoadLinks, LoadedLinks, FailedLinks} from '../action_names/links_actions';
import axios from 'axios';
import {Dispatch} from 'redux';

const base_client = axios.create({
    baseURL: 'http://localhost:5000/app/topic' 
});

export const loadLinks = (topicid:number) => async (dispatch:Dispatch<LoadLinks| LoadedLinks|FailedLinks>) => {

    try {
        dispatch({
            type: LINKS_LOADING,
        })

        const res = await base_client.get(`/${topicid}/link`);

        dispatch({
            type: LINKS_LOADED,
            payload : {
                links : res.data,
            }
        })

    }
    catch(e){
        dispatch({
            type: LINKS_FAILED,
        })
    }
}

export const deleteLink = (topicid:number, linkid:number) => (dispatch:Dispatch<DeleteLink>) => {
    console.log('delete called');
    base_client.delete(`/${topicid}/link/${linkid}`)
    .then(res => {
        dispatch({
            type: DELETE_LINK,
            payload : {
                id : res.data.id,
            }
        })
    })
    .catch(err => console.log(err));
}

export const addLink = (topicid:number, name:string, url:string) => (dispatch:Dispatch<AddLink>) => {
    console.log(`name : ${name}, url : ${url}, topic # : ${topicid}`);
    base_client.post(`/${topicid}/link`, {
        name,
        url,
    })
    .then(res => {
        dispatch({
            type: ADD_LINK,
            payload : {
                link: res.data,
            }
        })
    })
    .catch(err => console.log(err));
}