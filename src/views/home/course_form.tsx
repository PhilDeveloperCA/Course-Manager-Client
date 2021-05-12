import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom';
import { Course } from '../../actions/course_actions';
import {Typography, TextField, Button, Container} from '@material-ui/core';
import {editCourse} from '../../actions/create_course_action';
 
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
    }

    return(
        <React.Fragment>
            <Container style={{width:'400px', backgroundColor : 'green'}}>
                <form>
                    <Typography variant="h5"> Edit Course </Typography>
                    <TextField 
                        value = {formCourse.name}
                        onChange = {(e) => {handleChange(e,'name')}}
                        fullWidth
                    />
                    <TextField
                        value = {formCourse.description}
                        onChange={(e) =>{handleChange(e,'description')}}
                        fullWidth
                        multiline
                    />
                    <Button 
                        onClick = {submitCourse}
                    >
                        Submit : 
                    </Button>

                </form>
            </Container>
        </React.Fragment>
    );
}

export default CourseForm;