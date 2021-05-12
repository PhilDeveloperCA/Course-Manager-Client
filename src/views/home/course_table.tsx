import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Course } from '../../actions/course_actions';
import {getCourses} from '../../actions/create_course_action';
import CourseForm from './course_form';
import {useHistory} from 'react-router-dom';

import {makeStyles, CardContent, Card, CardActions, Typography, Button, IconButton, Grid, Modal, CircularProgress} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const CourseTable:React.FC = () => {

    const [selectedCourse, setSelected] = useState<null|number>(null);
    const [add, activeAdd] = useState<boolean>(false);

    const dispatch = useDispatch();
    const courses = useSelector((state:any) => state.courses);

    const currentCourses :Course[] = courses.courses;

    const history = useHistory();

    //delete Modal

    //edit Modal 
    const EditModal = (
        <Modal open={selectedCourse != null} onClose={(e) => {setSelected(null)}}>
            {<CourseForm  formCourse={currentCourses[selectedCourse!=null?selectedCourse:0]}/>}
        </Modal>
    );

    //dispatch(getCourses());

    useEffect(() => {
            console.log('loading');
            dispatch(getCourses());
    },[])

    const CourseMap = courses.courses?.map((course:Course,index:number) => {
        return(
            <Grid item key={course.id} xs={12} sm={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" > {course.name} </Typography>
                        <Typography variant="h6">
                            {course.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={(e) => {e.preventDefault();setSelected(index)}}> Edit: </Button>
                        <Button onClick={(e) => {e.preventDefault();history.push(`/course/${course.id}`)}}> View: </Button> 
                        <IconButton> <DeleteIcon /> </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    })

    //{courses?<CourseForm  formCourse={currentCourses[selectedCourse!=null?selectedCourse:0]}/>:null}

    return(
        <div>
             {courses.loading?<CircularProgress color="secondary"/>:null}
            {CourseMap}
            {EditModal}
        </div>
    );
}

export default CourseTable;