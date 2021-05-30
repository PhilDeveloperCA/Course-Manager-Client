import React,{useState} from 'react';
import {addCourse} from '../../actions/action_creators/create_course_action';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {makeStyles, Box,Button, IconButton, TextField, Grid, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';

type CourseFields = {
    id?:number,
    name:string,
    description:string,
    start_date?:string,
}

interface formProps {
    course: CourseFields | null;
}

const AddCourse:React.FC<CourseFields> = ({name = '', description=''}) => {
    const [courseState, setCourseState] = useState<CourseFields>({name,description});
    const [date, setDate] = useState<any>(null);
    const currentDate = new Date();
    const dispatch = useDispatch();

    const handleChange = (e:any,desc:string) => {
        if(e.target.value === undefined) return;
        if(desc === 'name'){
            setCourseState({...courseState, name:e.target.value});
        }
        if(desc === 'description'){
            setCourseState({...courseState, description:e.target.value});
        }
        if(desc === 'start_date'){
            console.log(e.target.value);
            setCourseState({...courseState, start_date:e.target.value});
        }
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(courseState.start_date);
        dispatch(addCourse(courseState.name, courseState.description, courseState.start_date));
    }

    // </React.Fragment><form style={{flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>

    return(
        <React.Fragment>
            <TextField fullWidth multiline rows={1} label="course name" onChange={(e) => {handleChange(e,'name')}}/>
            <TextField fullWidth multiline rows={5} label="course description" onChange={(e) => {handleChange(e,'description')}}/>
            <TextField 
                id="date"
                label="Start Date"
                type="date"
                //defaultValue={`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`}
                defaultValue={currentDate.toLocaleDateString()}
                onChange={(e) => handleChange(e,'start_date')}
            />
            <Button onClick={handleSubmit}>  Submit : </Button>
        </React.Fragment>
    );
}

export default AddCourse;
