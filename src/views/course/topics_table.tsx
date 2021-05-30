import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {useParams, useLocation, useHistory, useRouteMatch} from 'react-router-dom';
import {StoreState} from '../../store';
import {loadTopics, addTopic} from '../../actions/action_creators/create_course_content';
import {Card, CardActions, TextField, CardContent, Typography, Button, IconButton, Grid, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type TopicState = {
    open: boolean,
    title: string,
    description: string,
}

const TopicsTable:React.FC = () => {

    const dispatch = useDispatch();
    const {courseid} = useParams<{courseid:string}>();
    const history = useHistory();
    const {url} = useRouteMatch();

    const [topic, setTopic] = useState<TopicState>({open:false, title:'', description:''});

    useEffect(() => {
        //dispatch(loadTopics(parseInt(courseid)));
    }, [])

    const topics = useSelector((store:StoreState) => store.courseTopics);

    const addTopicDialog = (
        <Dialog open={topic.open} onClose={() => setTopic({...topic, open:false})}>
            <DialogTitle> Add Topic: </DialogTitle>
            <DialogContent>
                <TextField fullWidth label="task name" onChange={(e)=> {setTopic({...topic,title:e.target.value})}}/>
                <TextField fullWidth multiline label="task description" onChange={(e) => {setTopic({...topic, description:e.target.value})}} />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => {dispatch(addTopic(parseInt(courseid), topic.title, topic.description)); setTopic({open:false, title:'', description:''})}}> Submit : </Button>
            </DialogActions>
        </Dialog>
    );

    const topicsList = topics.topics.map(topic => {
        return (
            <div>
            <Card key={topic.id}>
            <CardContent>
                <Typography> {topic.name} </Typography>
                <Typography> {topic.description} </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={(e) => {e.preventDefault(); history.push(`/course/${courseid}/task/${topic.id}`)}}> Visit : </Button>
            </CardActions>
        </Card>
                <li key={topic.id}> {topic.name} </li>
                <button onClick={(e) => {e.preventDefault(); history.push(`${url}/topic/${topic.id}`)}}> Visit : </button>
            </div>
        );
    })

    return (
        <div>
            {addTopicDialog}
            <IconButton onClick={(e) => setTopic({...topic, open:true})}>
                <AddIcon />
            </IconButton>
            <h1> Topics Table : </h1>
            {topicsList}
        </div>
    )
}


export default TopicsTable;