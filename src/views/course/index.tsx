import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useLocation, useHistory, useParams} from 'react-router-dom';

import {Typography, Button} from '@material-ui/core';

import QuizTable from './quiz_table';

const CoursePage:React.FC = () => {
    const {courseid} = useParams<{courseid:string}>();

    return(
        <div>
            <h1> Quiz Table </h1>
            <h1> </h1>
            <div> </div>
            <QuizTable />
            <Typography> Course Page : </Typography>
        </div>
    );
}

export default CoursePage;