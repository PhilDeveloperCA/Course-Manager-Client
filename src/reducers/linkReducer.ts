import {Link, LINKS_FAILED, LINKS_LOADED, LINKS_LOADING, ADD_LINK, DELETE_LINK, DeleteLink, LoadLinks, LoadedLinks, AddLink, FailedLinks} from '../actions/action_names/links_actions';

type actionTypes = DeleteLink | AddLink | LoadLinks | LoadedLinks | FailedLinks;

type StateType = {
    loading : boolean,
    links: Link[],
    failed: boolean,
}

const defaultState:StateType= {
    loading: true,
    links : [],
    failed:false,
}

const linkReducer = (state:StateType = defaultState,action: actionTypes):StateType => {
    switch(action.type){
        case LINKS_LOADING:
            return {...state, loading:true};
        case LINKS_LOADED:
            return {...state, links:action.payload.links}
        case LINKS_FAILED:
            return {...state, links:[], failed:true};
        case ADD_LINK:
            return {...state, links:[...state.links,action.payload.link]}
        case DELETE_LINK:
            return {...state, links:state.links.filter((value) => value.id != action.payload.id)}
        default : {
            return state;
        }
    }
    return state;
}

export default linkReducer;