import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {StoreState} from '../../store';
import {Card, CardContent,Dialog, DialogTitle, DialogContent, DialogActions, CardActions, Button, Typography, Grid, IconButton,makeStyles, Checkbox,FormLabel, FormControl, FormGroup, FormControlLabel} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = makeStyles(theme => ({

}))

const MultipleChoice:React.FC = () => {
    const questions = useSelector((store:StoreState) => store.questions.questions.mc); 
    const [truths, setTruths] = useState<boolean[]>(questions.map(answer => false))
    const [answers, setAnswers] = useState<number[]>(questions.map(answer => 0));

    const showIndex = (e:any, index:number) => {
        e.preventDefault();
        setTruths([...truths.slice(0,index), !truths[index], ...truths.slice(index+1)])
    }

    const answerQuestion = (e:any, index:number, answer:number) => {
        setTruths([...truths.slice(0,index), false, ...truths.slice(index+1)])
        setAnswers([...answers.slice(0,index), answer, ...answers.slice(index+1)]);
    }

    const shortAnswerDialog = (
        <div>
            <Dialog open={true}>
                <DialogTitle></DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions></DialogActions>
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
            {questionList}
        </React.Fragment>
    );
}

export default MultipleChoice;