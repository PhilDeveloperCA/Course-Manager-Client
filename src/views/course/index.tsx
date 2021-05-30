import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useLocation, useHistory, useParams} from 'react-router-dom';
import {StoreState} from '../../store';
import {SwitchCourseModes, selectCourse} from '../../actions/action_creators/create_theme_action';
import {loadTasks, loadQuizzes, loadTopics} from '../../actions/action_creators/create_course_content';

import {Typography, Button, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText,} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
 
import QuizTable from './quiz_table';
import TaskTable from './task_table';
import TopicsTable from './topics_table';

const CoursePage:React.FC = () => {
    const {courseid} = useParams<{courseid:string}>();

    const dispatch = useDispatch();
    const themeMode = useSelector((state:StoreState) => state.theme);
    const courseMode:number = useSelector((state:StoreState) => state.theme.courseMode);

    useEffect(() => {
        if(!courseid) return;
        if(themeMode.loadedCourse != parseInt(courseid)){
            dispatch(loadQuizzes(parseInt(courseid)));
            dispatch(loadTasks(parseInt(courseid)));
            dispatch(loadTopics(parseInt(courseid)));
            dispatch(selectCourse(parseInt(courseid)));
        }
    },[])
    
    
    const handleCourseModeChange = (e:any, index:number) => {
        e.preventDefault();
        dispatch(SwitchCourseModes(index));
    }

    return(
        <div>
            <Grid container>
                <Grid item xs={4} xl={12}>
                    <Button disabled={courseMode===0} onClick={(e) => handleCourseModeChange(e,0)}> Quiz </Button>
                </Grid>
                <Grid item xs={4} xl={12}>
                    <Button disabled={courseMode===1} onClick={(e) => handleCourseModeChange(e,1)}> Task </Button>
                </Grid>
                <Grid item xs={4} xl={12}>
                    <Button disabled={courseMode===2} onClick={(e) => handleCourseModeChange(e,2)}> Topics </Button>
                </Grid>
            </Grid>
            <h1> Quiz Table </h1>
            <h1> </h1>
            <div> </div>
            {courseMode === 0? <QuizTable />:null}
            {courseMode === 1? <TaskTable />:null}
            {courseMode === 2? <TopicsTable />:null}
        </div>
    );
}

export default CoursePage;