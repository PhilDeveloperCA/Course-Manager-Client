import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {loadQuizzes} from '../../actions/create_course_content';
import { Quiz } from '../../actions/course_content_actions';

const QuizTable:React.FC = () => {
    const dispatch = useDispatch();

    const {courseid} = useParams<{courseid:string}>();

    const quizzes = useSelector((state:any) => state.quizzes);
    
    useEffect(() => {
        dispatch(loadQuizzes(parseInt(courseid)));
    }, []);

    const quizList = quizzes?.quizzes.map((quiz:Quiz) => {
        return(
            <li key={quiz.id}>
                {quiz.title}
            </li>
        );
    })

    return (
        <div>
            {quizList}
        </div>
    );
}

export default QuizTable;