import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends,faClock} from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {name,url, course, rating, price, review, duration}= props.course
    return (
        <div className='course-container' >
            <div className='course-card'>
                <div className='course-pic-sec'><img className='course-pic' src={url} alt="" /></div>
                <div>
                <h2 ><Link to='*' className='course-name-link'>{course}</Link></h2>
                <h3 className='instructor-name'>with {name}</h3>
                <h4><FontAwesomeIcon icon={faClock}/> {duration}</h4>
                <p>Rating: {rating}</p>
                    <p> <FontAwesomeIcon icon={faUserFriends}/> { review} enrolled</p>

                </div>
                <button className='enroll-btn'><Link className='enroll-btn-link' to='*'>Enroll Now</Link></button>
            </div>
        </div>
    );
};

export default Course;