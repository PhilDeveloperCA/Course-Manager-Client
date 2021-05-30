export const LINKS_LOADING = 'loading topics';
export const LINKS_LOADED = 'loading links';
export const LINKS_FAILED = 'failed links';
export const ADD_LINK = 'add link';
export const DELETE_LINK = 'delete link';

export type Link = { 
    id: number,
    topic_id:number,
    name:string,
    url:string,
}

export type LoadLinks = {
    type: typeof LINKS_LOADING
}

export type LoadedLinks = {
    type: typeof LINKS_LOADED,
    payload : {
        links : Link[],
    }
}

export type FailedLinks = {
    type: typeof LINKS_FAILED,
}

export type AddLink = {
    type: typeof ADD_LINK,
    payload  : {
        link: Link,
    }
}

export type DeleteLink = {
    type: typeof DELETE_LINK,
    payload : {
        id: number,
    }
}