import React from 'react'
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_jxlgi4b";
const TEMPLATE_ID = "template_xy3r556";
const PUBLIC_KEY = "oWeMuN4wf6JuuA8gO";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
        e.target.reset()
    };
    return (
        <div className='request'>
            <form onSubmit={handleOnSubmit}>
                <h2>Have any questions ?</h2>
                <h4 style={{ color: "orange" }}>Leave a request and we will respond !</h4><br />
                <input type='text' placeholder='Name' id="from_name" name="from_name" required /><br />
                <input type='tel' placeholder='Telephone' name="message" rows="8" cols="30" required /><br />
                <input type='email' placeholder='Email' id="from_email" name="from_email" required />
                <button type='submit' className='btn'>Leave a request</button>
            </form>
        </div>
    )
}
export default ContactForm;