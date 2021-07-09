import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {loadQuizzes, addQuiz} from '../../actions/action_creators/create_course_content';
import { Quiz } from '../../actions/action_names/course_content_actions';
import {makeStyles, Box,Button, Card, CardContent, IconButton, CardActions, Grid, Typography, Dialog, TextField, DialogContent, DialogTitle, DialogActions} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    li : {

    },
}))

type QuizState = {
    open: boolean,
    title: string,
}

const QuizTable:React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {courseid} = useParams<{courseid:string}>();
    const history = useHistory();
    const [quiz, setQuiz] = useState<QuizState>({open:false, title:''});

    const quizzes = useSelector((state:any) => state.quizzes);
    
    useEffect(() => {
        //dispatch(loadQuizzes(parseInt(courseid)));
    }, []);

    const quizList = quizzes?.quizzes.map((quiz:Quiz) => {
        return(
            <li key={quiz.id}>
                {quiz.title}
                <button onClick={(e) =>{e.preventDefault(); history.push(`/quiz/${quiz.id}/${quiz.title}`,{courseid:courseid}) }}> Visit : </button>
                <button style={{color:'red', backgroundColor:'blue'}}> Don;t Press</button>
            </li>
        );
    })

    const quizList2 = quizzes?.quizzes.map((quiz:Quiz) => {
        return(
            <Grid item xs={12} md={6} lg={4}>
            <Card>
                <CardContent>
                    <Typography variant="h4"> 
                        {quiz.title}
                    </Typography>
                </CardContent>
                <CardActions style={{flexGrow: 1}}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <Button onClick={(e) =>{e.preventDefault(); history.push(`/quiz/${quiz.id}/${quiz.title}`,{courseid:courseid}) }}>
                        View Quiz : 
                    </Button> 
                </CardActions>
            </Card>
            </Grid>
        );
    })

    //<h1 className={classes.li}> Quiz Table : </h1>
    const quizAddDialog = (
        <Dialog open={quiz.open} onClose={() => setQuiz({...quiz, open:false})}>
            <DialogTitle> Add Quiz: </DialogTitle>
            <DialogContent>
                <TextField label="quiz name" onChange={(e)=> {setQuiz({...quiz,title:e.target.value})}}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => {dispatch(addQuiz(parseInt(courseid), quiz.title)); setQuiz({open:false, title:''})}}> Submit : </Button>
            </DialogActions>

        </Dialog>
    );

    return (
        <div>
            {quizList2}
            <Grid container>
                {quizAddDialog}
                <Grid item xs={12} xl={12}>
                    <IconButton>
                        <AddIcon onClick={(e) => setQuiz({...quiz, open:true})}/>
                    </IconButton>
                </Grid>
                <Grid item xs={12} xl={12}>
                </Grid>
            </Grid>
            {quizList2}
        </div>
    );
}

export default QuizTable;