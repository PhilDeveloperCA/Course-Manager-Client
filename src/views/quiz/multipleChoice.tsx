import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {StoreState} from '../../store';
import {Card, CardContent,Dialog, DialogTitle, DialogContent, TextField, DialogActions, CardActions, Button, Typography, Grid, IconButton,makeStyles, Checkbox,FormLabel, FormControl, FormGroup, FormControlLabel} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {addMCQuestion} from '../../actions/action_creators/quiz_action_creators';

const styles = makeStyles(theme => ({
    
}))

type multipleChoiceState = {
    show: boolean,
    question:string,
    options : string[],
    answer: number,
}

const MultipleChoice:React.FC = () => {
    const questions = useSelector((store:StoreState) => store.questions.questions.mc); 
    const [truths, setTruths] = useState<boolean[]>(questions.map(answer => false));
    const [answers, setAnswers] = useState<number[]>(questions.map(answer => 0));
    const [currentQuestion, setQuestion] = useState<multipleChoiceState>({show:false, question:'', options:[''], answer:1});

    const dispatch = useDispatch();

    const showIndex = (e:any, index:number) => {
        e.preventDefault();
        setTruths([...truths.slice(0,index), !truths[index], ...truths.slice(index+1)])
    }

    const answerQuestion = (e:any, index:number, answer:number) => {
        setTruths([...truths.slice(0,index), false, ...truths.slice(index+1)])
        setAnswers([...answers.slice(0,index), answer, ...answers.slice(index+1)]);
    }

    const handleOptionAdd = (e:any) => {
        e.preventDefault();
        if(currentQuestion.options.length<5){
            setQuestion({...currentQuestion, options:[...currentQuestion.options, '']});
        }
    }

    const shortAnswerDialog = (
        <div>
            <Dialog open={currentQuestion.show} onClose={() => setQuestion({...currentQuestion, show:false})}>
                <DialogTitle></DialogTitle>
                <DialogContent>
                    <IconButton onClick={handleOptionAdd}> <AddIcon /></IconButton>
                    <TextField fullWidth onChange={(e) => setQuestion({...currentQuestion, question:e.target.value})}/>
                    {currentQuestion.options.map((option:string,index:number) => {
                        return <TextField fullWidth key={index} onChange={(e) => setQuestion({...currentQuestion, options:[...currentQuestion.options.slice(0,index), e.target.value, ...currentQuestion.options.slice(index+1)]})}/>
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => dispatch({'hello':'world'})}> Submit </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    const questionList = questions?.map((question,index) => {
        //error={truths[index]?answers[index] != question.answer:undefined}

        return (
            <Card key={question.id}> 
                <CardContent>
                    <FormControl required error={truths[index] && answers[index] !== question.answer}>
                    <FormLabel component="legend" > {question.question} </FormLabel>
                        <FormGroup>
                        {question.a1?<FormControlLabel onChange={(e)=>answerQuestion(e,index,1)} checked={answers[index] === 1} label = {question.a1} control={<Checkbox />}/>:null}
                        {question.a2?<FormControlLabel onChange={(e)=>answerQuestion(e,index,2)} checked={answers[index] === 2} label = {question.a2} control={<Checkbox />}/>:null}
                        {question.a3?<FormControlLabel onChange={(e)=>answerQuestion(e,index,3)} checked={answers[index] === 3} label = {question.a3} control={<Checkbox />}/>:null}
                        {question.a4?<FormControlLabel onChange={(e)=>answerQuestion(e,index,4)} checked={answers[index] === 4} label = {question.a4} control={<Checkbox />}/>:null}
                        {question.a5?<FormControlLabel onChange={(e)=>answerQuestion(e,index,5)} checked={answers[index] === 5} label = {question.a5} control={<Checkbox />}/>:null} 
                        </FormGroup>
                    </FormControl>
                    <Typography > {question.question} </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={(e) => showIndex(e,index)}> Show Answer </Button>
                </CardActions>
            </Card>
        );
    })

    return(
        <React.Fragment>
            {shortAnswerDialog}
            <IconButton onClick={(e) => setQuestion({...currentQuestion, show:true})}> <AddIcon /></IconButton>
            {questionList}
        </React.Fragment>
    );
}

export default MultipleChoice;