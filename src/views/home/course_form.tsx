import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom';
import { Course } from '../../actions/action_names/course_actions';
import {Typography, TextField, Button, Container, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import {editCourse} from '../../actions/action_creators/create_course_action';

 
type courseError = {
    nameError? : string|null,
    descriptionError? : string|null,
}

interface Props {
    formCourse:Course,
}


const CourseForm:React.FC<Props> = ({formCourse}) => {
    const [course, setCourse] = useState<Course>(formCourse);
    const [courseError, setCourseError] = useState<courseError|null>(null);

    const [open, setOpen] = useState<boolean>(true);

    const dispatch = useDispatch();

    const submitCourse = (e:any) => {
        e.preventDefault();

        if(!course.name || course.name.length<3){
            return setCourseError({...courseError, nameError:'Incorrect Name Entry'});
        }
        if(!course.description || course.description.length<15){
            return setCourseError({...courseError, descriptionError: 'Incorrect Description'})
        }

        dispatch(editCourse(course));
        //dispatch();
    }

    const handleChange = (e:any, name:string) => {
        if(name === 'name'){
            setCourse({...course, name:e.target.value});
        }
        if(name === 'description'){
            setCourse({...course, description:e.target.value});
        }
        if(name === 'start_date'){
            setCourse({...course, start_date:e.target.value});
        }
        if(name === 'end_date'){
            setCourse({...course, end_date:e.target.value});
        }
    }

    return(
        <React.Fragment>
            <Container style={{width:'400px'}}>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle> Edit Course: </DialogTitle>
                    <DialogContent>
                        <Typography>Course Name : </Typography> 
                        <TextField 
                        value = {course.name}
                        onChange = {(e) => {handleChange(e,'name')}}
                        fullWidth
                    />
                        <Typography> Course Description : </Typography>
                        <TextField
                        value = {course.description}
                        onChange={(e) =>{handleChange(e,'description')}}
                        fullWidth
                        multiline
                    />
                        <TextField 
                            type="date"
                            label="start date"
                            defaultValue={course.start_date?course.start_date.split('T')[0]:null}
                            onChange = {(e) => {handleChange(e,'start_date')}}
                        />
                        <TextField 
                            type="date"
                            label="end date"
                            defaultValue={course.end_date?course.end_date.split('T')[0]:null}
                            onChange = {(e) => {handleChange(e,'end_date')}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick = {submitCourse}
                        >
                            Submit 
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </React.Fragment>
    );
}

export default CourseForm;