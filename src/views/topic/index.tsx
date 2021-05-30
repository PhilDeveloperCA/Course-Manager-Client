import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addLink, loadLinks } from '../../actions/action_creators/links_actions';
import {StoreState} from '../../store';
import {useHistory, useParams, useLocation} from 'react-router-dom';
import LinksTable from './links_table';
import {Button, Dialog, DialogContent, DialogActions, TextField, Typography} from '@material-ui/core';

type AddLink = {
    topicid:number,
    name:string,
    url:string,
    open:boolean,
}

type addError = {
    name:string|null,
    url: string|null,
}

const LinkPage:React.FC = () => {
    const dispatch = useDispatch();
    const {topicid} = useParams<{topicid:string}>();
    
    const [link, setLink] = useState<AddLink>({topicid:parseInt(topicid), name:'', url:'', open:false});
    const [addError, setAddError] = useState<addError>({name:null, url:null});

    const submitLink = (e:any) => {
        e.preventDefault();
        if(!link.name || link.name ===''){
            return setAddError({...addError, name:'Enter a Valid Name'});
        }
        if(!link.url|| link.url ===''){
            return setAddError({...addError, url: 'Enter a Valid Description'});
        }

        dispatch(addLink(link.topicid, link.name, link.url));
        setLink({topicid:parseInt(topicid), name:'', url:'', open:false});
    }
    
    useEffect(() => {
        dispatch(loadLinks(parseInt(topicid)));
    }, [])
    
    return(
        <React.Fragment>
            <Button onClick={(e) => {e.preventDefault(); setLink({...link, open:true})}}> Add Link : </Button>
            <Typography> Links Page </Typography>
            <Dialog open={link.open} onClose={() => setLink({...link, open:false})}>
                <DialogContent>
                    <TextField error={addError.name !== null} helperText={addError.name} label="name" multiline fullWidth onBlur={(e) => {setLink({...link, name:e.target.value})}}/>
                    <TextField error={addError.name !== null} helperText={addError.url}  label="url/link" fullWidth onBlur={(e) => {setLink({...link, url:e.target.value})}}/>
                    <Button onClick={submitLink}> Submit : </Button>
                </DialogContent> 
            </Dialog>
            <LinksTable />
        </React.Fragment>
    );
}

export default LinkPage;