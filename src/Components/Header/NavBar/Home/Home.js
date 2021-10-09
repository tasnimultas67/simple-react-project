import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../../../../Images/Webinar (1).gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faUserFriends, faClock, faCog, faUser, faCertificate} from '@fortawesome/free-solid-svg-icons'
import Course from '../../../Course/Course';
import FooterLinks from '../../../FooterLinks/FooterLinks';



const Home = () => {

    // Hook here
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);
    const slicedCourse = courses.slice(0,4)


    return (
        <div className='home-container'>
            <div className='home-section'>
                <div className='home-title-info'>
                    <h1 className='home-title'><span className='blue-color'>Welcome to Tasvio</span> UI <br /> Learning Application</h1>
                    <p>Hand-picked Instructor and expertly crafted courses,<br /> designed for the modern students and entrepreneur.</p>
                    <div className='home-btns'>
                    <button className='home-btn blue-bg color-white'><Link className='color-white' to='*'>Browse Courses</Link></button>
                    <button className='home-btn'><Link to='*'>Are You Instructor?</Link></button>
                    </div>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className='header-content-footer'>

            <div className='box-field'>
                <div>
                <p className='box-icon'><FontAwesomeIcon icon={faVideo} /></p>
                </div>
                <div>
                    <p className='box-title'>30,000 online courses <br /> <small className='box-title-info'>Enjoy a variety of fresh topics</small></p>
                    <p></p>
                </div>
            </div>

            <div className='box-field'>
                <div>
                <p className='box-icon'><FontAwesomeIcon icon={faUserFriends} /></p>
                </div>
                <div>
                    <p className='box-title'>Expert instruction<br /> <small className='box-title-info'>Find the right instructor for you</small></p>
                    <p></p>
                </div>
            </div>

            <div className='box-field'>
                <div>
                <p className='box-icon'><FontAwesomeIcon icon={faClock} /></p>
                </div>
                <div>
                    <p className='box-title'>Lifetime access<br /> <small className='box-title-info'>Learn on your schedule</small></p>
                    <p></p>
                </div>
            </div>

            </div>
        
             {/* Additional Section / Courses card Section */}
             <div>
                 <div>
                     <h2 className='recomended-title'>Recomended for you</h2>
                 </div>
                 <div>
                    <div className='course-card-container '>
                        {
                            slicedCourse.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    
                    </div>
                    
                 </div>
             </div>

            {/* Additional Section / why learn Section */}
            <div className='learn-why-section'>
                <div className='why-learn-title-info'>
                    <p className='blue-color'>WHY LEARN WITH TASVIO</p>
                    <h1 className='why-learn-sec-title'>Build better skills,faster</h1>
                    <p className='light-gray-color'>Explore new skills, deepen existing passions, and get lost in creativity. What you <br /> find just might surprise and inspire you.</p>
                </div>
                <div className='learn-why-cards'>
                    <div className='learn-why-card'>
                        <FontAwesomeIcon className='learn-why-cards-icon' icon={faCog}/>
                        <h3 className='why-learn-card-title'>Learn the latest skills</h3>
                        <p className='light-gray-color-card'>Choose from many topics, skill levels, and languages. Study any topic when it suits you.</p>
                    </div>

                    <div className='learn-why-card'>
                    <FontAwesomeIcon className='learn-why-cards-icon' icon={faUser}/>
                    <h3 className='why-learn-card-title'>Get ready for a career</h3>
                    <p className='light-gray-color-card'>know about relevant helpdesk job vacancies and ease your job search No Experience Required.</p>
                    </div>

                    <div className='learn-why-card'>
                        <FontAwesomeIcon className='learn-why-cards-icon' icon={faCertificate}/>
                        <h3 className='why-learn-card-title'>Earn a Certificate</h3>
                        <p className='light-gray-color-card'>Gain a Certificate of Achievement on hundreds of online courses to include in your CV or portfolio.</p>
                    </div>
                </div>

            </div>
        
            <div className='offer-sec'>
                <div className='offer-sec-info'>
                    <h1 className='offer-sec-title'>Join more than 1 million learners worldwide</h1>
                    <p className='offer-sec-p'>Effective learning starts with assessment. Learning a new skill is hard <br /> work—Signal makes it easier.</p>
                </div>
                <div>
                    <button className='offer-btn-1'><Link className='offer-btn-link' to='*'>Start Learning for Free</Link></button>
                    <button className='offer-btn-2'><Link className='offer-btn-link' to='*'>Tasvio fo Business</Link></button>

                </div>
            </div>
                        {/* Footer */}
        </div>
    );
};

export default Home;