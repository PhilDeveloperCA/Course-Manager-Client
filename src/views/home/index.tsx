import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CourseTable from './course_table';
import AddCourse from './add_course';
import {Typography, Button, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText,} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Auth from './auth';

type CourseFields = {
    id?:number,
    name:string,
    description:string,
}

interface formProps {
    course: CourseFields | null;
}


const Home:React.FC = () => {
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [editedCourse, setEditedCourse] = useState<number|null>(null);
    //const [course, setCourse] = useState<CourseFields>(formCourse);
    //const [courseError, setCourseError] = useState<courseError|null>(null);

    const handleClose = () => {
        setOpenForm(false);
        setEditedCourse(null);
    }

    return(
        <div> 
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
            <Typography variant="h6"> Add Course: </Typography>
            <IconButton onClick={(e) => {e.preventDefault(); setOpenForm(!openForm)}}>
                <AddIcon />
            </IconButton>
            </div> 
            <Dialog open={openForm} onClose={handleClose}>   
                <DialogTitle> Add Course : </DialogTitle>
                <DialogContent style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <DialogContentText>
                        Enter Username and Description
                    </DialogContentText>
                    <AddCourse name='' description='' />
                </DialogContent>
            </Dialog>
            <Grid></Grid>
            <CourseTable />
        </div>
    );
}

export default Home;