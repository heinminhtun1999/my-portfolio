import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import Fade from 'react-reveal/Fade';
import "./Contact.css";

const Contact = (props) => {

    const { sendEmail, form, formHandleChange, formInputs } = props;

    return (
        <div className="contact">
            <div className="contact-contents">
                <div className="contact-me">
                    <h1>
                        Contact
                    </h1>
                </div>
                <div className="form-parent">
                    <Fade cascade up>
                    <form ref={form} onSubmit={sendEmail} className="email-form">
                        <div className="get-in-touch">
                            <hr />
                            <span>Get in touch</span>
                        </div>
                        <div className="form-name">
                            <label>Name:</label>
                            <input type="text" name="user_name" onChange={formHandleChange} value={formInputs.user_name} required/>
                        </div>
                        <div className="form-email">
                            <label>Email:</label>
                            <input type="email" name="user_email" onChange={formHandleChange} value={formInputs.user_email} required/>
                        </div>
                        <div className="form-message">
                            <label>Message:</label>
                            <textarea name="message" onChange={formHandleChange} value={formInputs.message} required/>
                        </div>
                        <button type="submit" value="Send" className="button">Send</button>
                    </form>
                    </Fade>
                </div>
                <div className="contact-me-desc">
                    <h1>Contact Me</h1>
                    <p>It'd be pleasure to cooperate with you.<br/>If you are interested in working togehter with me in the future, feel free to contact me.</p>
                    <p><PhoneIcon className="phone-icon" />&nbsp;-&nbsp;&nbsp;09 783 2139 73</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;