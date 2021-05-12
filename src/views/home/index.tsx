import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CourseTable from './course_table';

const Home:React.FC = () => {
    
    return(
        <div> 
            <CourseTable />
        </div>
    );
}

export default Home;