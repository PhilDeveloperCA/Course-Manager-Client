import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {loadQuizzes} from '../../actions/action_creators/create_course_content';
import {Quiz } from '../../actions/action_names/course_content_actions';
import {Login} from '../../actions/action_creators/create_auth_actions';

import {Typography, TextField, Button, Container} from '@material-ui/core';

const AddQuiz:React.FC = () => {
    useEffect(() => {
        console.log('here');
    },[])
    
    return(
        <div>
            <form>
                <TextField label="quiz name" />
            </form>
        </div>
    );
}
 
export default AddQuiz;

