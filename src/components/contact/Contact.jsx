import React, { useRef } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kk2p4gg', 'template_khkctp5', form.current, {
                public_key: 'x-8vdk0qzDcsQFRii9b-N',
            })
            .then(
                () => {
                    alert('Message sent successfully!');
                },
                (error) => {
                    alert('Failed to send message. Please try again.');
                    console.error('FAILED...', error.text);
                }
            );

        // Reset the form after submission
        e.target.reset();
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with include:
                </p>
                <div className="clientImgs">
                    <img src={walmart} alt="client" className="clientImg" />
                    <img src={Adobe} alt="client" className="clientImg" />
                    <img src={Microsoft} alt="client" className="clientImg" />
                    <img src={Facebook} alt="client" className="clientImg" />
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>

                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
