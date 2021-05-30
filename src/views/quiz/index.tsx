import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { loadQuestions } from '../../actions/action_creators/quiz_action_creators';
import {Button, ButtonGroup, Grid, IconButton, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import ShortAnswer from './shortAnswer';
import MultipleChoice from './multipleChoice';

type propsInterface = {
    courseid:string|undefined|null,
}

const QuizPage:React.FC<any> = (props) => {
    const [index, setIndex] = useState<number>(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const {quizid} = useParams<{quizid:string}>();
    
    useEffect(() => {
        dispatch(loadQuestions(parseInt(quizid)));
    },[])

    return(
        <div> 
            <Grid container>
                <Grid item xs={6} lg={6}>
                    <Button onClick={(e) => {e.preventDefault(); setIndex(0)}} 
                        disabled={index===0}> Short Answer :  </Button>
                </Grid>
                <Grid xs={6} lg={6}>
                    <Button disabled={index===1} 
                    onClick={(e) => {e.preventDefault(); setIndex(1)}}> Multiple Choice:  </Button> 
                </Grid>
            </Grid>
            <Grid item xs={12} xl={12}>
            </Grid>
            <h1> Welcome to Quiz </h1>
            <button onClick={(e) => {e.preventDefault();history.push(`/course/${props.history.location.state.courseid}`) }}> </button>
            <IconButton onClick={(e) => {e.preventDefault();history.push(`/course/${props.history.location.state.courseid}`) }}>
                <ArrowBackIcon />
            </IconButton>
            {index === 0? <ShortAnswer />:<MultipleChoice />}
        </div>
    );
}

export default QuizPage; 