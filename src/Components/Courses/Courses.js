import React, {useState, useEffect} from 'react';
import Course from '../Course/Course';
import Home from '../Header/NavBar/Home/Home';
import './Courses.css'


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (

        <div>
            <div className='search-field'>
                <input className='search-input' type="text"/>
                <button className='search-btn'>Search</button>
            </div>
            <p className='courses-found'>found {courses.length} courses</p>
            <div className='course-card-container '>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
           
            </div>
        </div>
    );
};

export default Courses;