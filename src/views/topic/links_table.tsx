import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StoreState} from '../../store';
import {Typography, Button, Card, CardContent, CardActions} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import { deleteLink } from '../../actions/action_creators/links_actions';

const LinksTable:React.FC =() => {
    const links = useSelector((store:StoreState) => store.links);
    const {topicid} = useParams<{topicid:string}>();
    const dispatch = useDispatch();
    
    const linkTable = links.links?.map((link) => {
        return (
            <div key={link.id}>
                <Card>
                    <CardContent>
                        <Typography> {link.name}</Typography>
                        <Typography> {link.url} </Typography>
                        <a target="blank" href={link.url} onClick={e => false}> Visit : </a> 
                    </CardContent>
                    <CardActions>
                        <Button onClick={(e) => {e.preventDefault();dispatch(deleteLink(parseInt(topicid), link.id))}}> Delete: </Button>
                    </CardActions>
                </Card>
            </div>
        );
    })

    return (
        <div>
            <Typography> Links Table : </Typography>
            {linkTable}
        </div>
    )
}

export default LinksTable;