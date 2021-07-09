import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Course } from '../../actions/action_names/course_actions';
import {getCourses, deleteCourse} from '../../actions/action_creators/create_course_action';
import CourseForm from './course_form';
import {useHistory} from 'react-router-dom';
import {StoreState} from '../../store';

import {makeStyles, CardContent, Card, CardActions, Typography, Button, IconButton, Grid, Modal, CircularProgress} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const CourseTable:React.FC = () => {

    const [selectedCourse, setSelected] = useState<null|number>(null);
    const [add, activeAdd] = useState<boolean>(false);
    const [selectedDelete, setDelete] = useState<null|number>(null);

    const dispatch = useDispatch();
    const courses = useSelector((state:StoreState) => state.courses);

    const currentCourses :Course[] = courses.courses;

    const history = useHistory();

    //delete Modal

    //edit Modal 
    const EditModal = (
        <Modal open={selectedCourse != null} onClose={(e) => {setSelected(null)}}>
            {<CourseForm  formCourse={currentCourses[selectedCourse!=null?selectedCourse:0]}/>}
        </Modal>
    );
    /*
            // <Button onClick={setDelete(null)}> No </Button>
            // <Button onClick={(e) => dispatch(deleteCourse(selectedDelete))}> Yes</Button>
    */

    const deleteModal = (
        <Modal open={selectedDelete !==null} onClose={(e) => setDelete(null)} aria-labelledby='simple-modal-title' aria-describedby = 'simple-modal-description' style={{color:'white', display : 'flex', alignItems : 'center', justifyContent:'center'}}>
            {
                <div>
                <Typography> Are You Sure You want To Delete  This Course ? </Typography>
                <Button onClick={(e) => setDelete(null)}> No </Button>
                <Button onClick={(e) => {dispatch(deleteCourse(selectedDelete)); setDelete(null);}}> Yes</Button>
                </div>
            }
        </Modal>
    );

    //dispatch(getCourses());

    useEffect(() => {
        if(courses.loading  || courses.failed){
            console.log('loading');
            dispatch(getCourses());
        }
    },[])

    const CourseMap = courses.courses?.map((course:Course,index:number) => {
        return(
            <Grid item key={course.id} xs={12} sm={6} container>
                <Card style={{display:'flex', justifyContent:'space-between', flexDirection:'column', margin:'20px', 
                padding:'30px'}}>
                    <CardContent>
                        <Typography variant="h4" > {course.name} </Typography>
                        <Typography variant="h6">
                            {course.description}
                        </Typography>
                    </CardContent>
                    <div>
                    <Typography variant="h6"> Started : {course.start_date?course.start_date.split('T')[0]:''}</Typography>
                    <CardActions style={{flexShrink:0}}>
                        <Button onClick={(e) => {e.preventDefault();setSelected(index)}}> Edit: </Button>
                        <Button onClick={(e) => {e.preventDefault();history.push(`/course/${course.id}/${course.name}`)}}> View: </Button> 
                        <IconButton onClick={(e) => {e.preventDefault(); setDelete(course.id)}}> <DeleteIcon /> </IconButton>
                    </CardActions>
                    </div>
                </Card>
            </Grid>
        );
    })

    //{courses?<CourseForm  formCourse={currentCourses[selectedCourse!=null?selectedCourse:0]}/>:null}

    return(
        <div>
             {courses.loading?<CircularProgress color="secondary"/>:null}
             <Grid container>
             {CourseMap}
             </Grid>
            {EditModal}
            {deleteModal}
        </div>
    );
}

export default CourseTable;