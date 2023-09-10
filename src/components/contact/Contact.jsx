import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aym51aw', 'template_syg3uii', form.current, 'FOs0QOlouYoucY9AT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        alert("Your Message was sent successfully!");
    };
        
    return (
        <>
        <section id="contact" className="border2">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="contact__container">
                <div className="contact__options">
                
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>jengerred@aol.com</h5>
                        <a href="mailto:jengerred01@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>jennifergerred</h5>
                        <a href="https://www.linkedin.com/in/jennifergerred/" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                    <BsWhatsapp className="contact__option-icon"/>
                        <h4>Phone</h4>
                        <h5>+1 (616) 498-2923</h5>
                        <a href="https://www.linkedin.com/in/jennifergerred/" target="_blank">Call/Text</a>
                    </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="message" rows="/" placeholder="Write Your Message" required/>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
        </>
    )
};
export default Contact;