import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {StoreState} from '../../store';
import {Card, CardContent, CardActions, Button, Typography, Grid, IconButton,TextField, Dialog, DialogContent, DialogTitle, DialogActions} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {addSAQuestion, editSAQuestion} from '../../actions/action_creators/quiz_action_creators';
import {useParams} from 'react-router-dom';


type ShortAnswerEnter = {
    id : number|null,
    question : string|null,
    answer : string|null,
    form : boolean,
}

const ShortAnswer:React.FC= () => {
    const [question, setQuestion] = useState<ShortAnswerEnter>({id:null, question:'', answer:'', form:false});
    const {quizid} = useParams<{quizid:string}>();

    const submitQuestion = (e:any) => {
        e.preventDefault();
        if(question.question === null || question.answer === null){
            return;
        }
        if(question.id === null){
            return addSAQuestion(parseInt(quizid), question.question, question.answer);
        }
        return editSAQuestion(parseInt(quizid), question.id, question.question, question.answer);
    }

    const shortAnswers = useSelector((store:StoreState) => store.questions.questions.sa);
    const newAnswers = shortAnswers.map((object) => {
        return {...object, show:true};
    })

    const [truths, setTruths] = useState<boolean[]>(shortAnswers.map(answer => false))

    function createDate(stringdate:string) : string {
        const date = stringdate.split('T')[0];
        const ymd = date.split('-');
        return (`${ymd[1]}/${ymd[2]}/${ymd[0]} `);
    }

    const shortAnswerAddDialog = (
        <React.Fragment>
            <Dialog open={question.form} onClose={() => setQuestion({...question, form:false})}>
                <DialogTitle>
                    Add Short Answer Question 
                </DialogTitle>
                <DialogContent>
                    <TextField 
                        label = "Question"
                        value={question.question}
                        onChange={(e) => {setQuestion({...question, question:e.target.value})}}
                        fullWidth
                        multiline
                    />
                    <TextField 
                        label = "Answer"
                        value={question.answer}
                        multiline
                        onChange={(e) => setQuestion({...question, answer:e.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button>
                        Submit : 
                    </Button> 
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );

    const JSX = newAnswers.map((answer, index) => {
        return(
            <Grid item xs={6} xl={4}>
            <Card>
                <CardContent>
                    <Typography variant="h4"> 
                        {answer.question}?    
                    </Typography>
                    <Typography variant="h6">
                        {createDate(answer.createdAt)}    
                    </Typography> 
                    {truths[index]? 
                    <Typography variant="h6"> 
                        {answer.answer}
                    </Typography>:null
                    }
                </CardContent>
                <CardActions>
                    <Button onClick = {(e) => {
                        setTruths([...truths.slice(0,index),!truths[index], ...truths.slice(index+1)]);
                    }}> {truths[index] ?'Hide Content': 'Show Content'} </Button>
                    <Button onClick={(e) => setQuestion({id:answer.id, question:answer.question, answer:answer.answer, form:true})}>
                        Edit : 
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        );
    })
    //{shortAnswers?.map((s) => <li key={s.id}> {s.question}</li>)}

    const handleNew = (e:any) => {
        e.preventDefault();
        if(question.id !== null){
            return setQuestion({id:null, question:'', answer:'', form:true});
        }
            setQuestion({...question, form:true});
    }

    return(
        <React.Fragment>
            {shortAnswerAddDialog}
            <IconButton onClick={handleNew}>
            <AddIcon />
            </IconButton>
            <Grid container>
                {JSX}
            </Grid>
        </React.Fragment>
    );
}

export default ShortAnswer;

