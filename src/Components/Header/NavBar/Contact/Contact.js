import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-info-text'>
                <h1>Get In Touch.</h1>
                <p>Fill in the form to the right to get in touch with someone on our team, and we will reach out shortly.</p>
                <br />
                <br />
                <p>If you are seeking support please visit our support portal before reaching out directly.</p>
                <br /> <br />
                <p><FontAwesomeIcon icon={faPhone}/> + 0123-456-7890</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> hello@geekui.com</p>
                <p><FontAwesomeIcon icon={faMapMarker}/> 2652 Kooter Lane Charlotte, NC 28263</p>
            </div>
            <div className='form-container'>
            <div className='form-box'>
                <div className='name-field'>
                    <div className='f-name-field'>
                    <p>First Name:*</p>
                    <input className='input-field' type="text" />
                    </div>
                    <div>
                    <p>Last Name:*</p>
                    <input className='input-field' type="text" />
                    </div>
                </div>
                <div className='email-field'>
                    <p>Email:*</p>
                    <input className='input-field common-input' type="text" />
                </div>
                <div>
                    <p>Contact Reason:*</p>
                    <input className='input-field common-input' type="text" />
                </div>
                <p>Message:</p>
                <textarea className='' name="" id="" cols="56" rows="10"></textarea>
            </div>
            <button className='form-btn'>Submit</button>

            </div>
        </div>
    );
};

export default Contact;