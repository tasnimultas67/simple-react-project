import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='about-sec'>
                <h1 className='about-title'>Hi <span className='title-color'>there, </span> </h1>
                <p className='about-info-2nd'>We’re building the best next-generation interactive react based UI Kit design tool for developers, engineers, Full-Stack developer, and digital agency.</p>
                <p className='about-info-3rd'>Tasvio provide clean and consistent page designs to help you to create beautiful looking contents. Tasvio is feature-rich components and beautifully designed pages that help you create the best possible website and web application projects.</p>
            </div>


            <div className='global-reach'>
                <div className='global-reach-text'>
                <h1 className='global-reach-title'>Our global reach</h1>
                <p>Tasvio is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.</p>
                </div>
                <div className='global-reach-count'>
                    <div className='reach-div'>
                        <p className='reach-count-title'>20M</p>
                        <p className='reach-count-sub-ttile'>LEARNERS</p>
                    </div>
                    <div className='reach-div'>
                        <p className='reach-count-title'>57K</p>
                        <p className='reach-count-sub-ttile'>INSTRUCTORS</p>
                    </div>
                    <div className='reach-div'>
                        <p className='reach-count-title'>21K</p>
                        <p className='reach-count-sub-ttile'>COURSES</p>
                    </div>
                    <div className='reach-div'>
                        <p className='reach-count-title'>380M</p>
                        <p className='reach-count-sub-ttile'>COURSE ENROLLMENTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;