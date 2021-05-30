import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {useParams, useLocation, useHistory,} from 'react-router-dom';
import {StoreState} from '../../store';
import {loadTasks, addTask} from '../../actions/action_creators/create_course_content';
import {Card, CardActions, TextField, CardContent, Typography, Button, IconButton, Grid, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type taskState = {
    open:boolean,
    title:string,
    description:string,
}

const TaskTable:React.FC = () => {

    const tasks = useSelector((state:StoreState) => state.tasks);
    const dispatch = useDispatch();
    const {courseid} = useParams<{courseid:string}>();
    const history = useHistory();

    const [task, setTask] = useState<taskState>({open:false, title:'', description:''});
    
    useEffect(() => {
    //dispatch(loadTasks(parseInt(courseid)));
    },[])

    const taskAddDialog = (
        <Dialog open={task.open} onClose={() => setTask({...task, open:false})}>
            <DialogTitle> Add Task: </DialogTitle>
            <DialogContent>
                <TextField fullWidth label="task name" onChange={(e)=> {setTask({...task,title:e.target.value})}}/>
                <TextField fullWidth multiline label="task description" onChange={(e) => {setTask({...task, description:e.target.value})}} />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => {dispatch(addTask(parseInt(courseid), task.title, task.description)); setTask({open:false, title:'', description:''})}}> Submit : </Button>
            </DialogActions>
        </Dialog>
    );

    //const taskList = tasks.tasks.map((task:any) => {
    const taskList = tasks?.tasks.map(task => {    
        return (
        <li key={task.id}>
        <Card key={task.id}>
            <CardContent>
                <Typography> {task.name} </Typography>
                <Typography> {task.description} </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={(e) => {e.preventDefault(); history.push(`/course/${courseid}/task/${task.id}`)}}> Visit : </Button>
            </CardActions>
        </Card>
        {task.name}
        </li>);
    })
   // const taskList = <div> </div>

    return(
        <div>
            {taskAddDialog}
            <IconButton>
                <AddIcon onClick={(e) => setTask({...task, open:true})}/>
            </IconButton>
            <h1> Task Table:  </h1> 
            {taskList}
        </div>
    );
}

export default TaskTable;