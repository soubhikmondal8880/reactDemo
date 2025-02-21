import React from 'react';
import './intro.css';
import bg from './../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Soubhik</span><br/>Full-Stack Developer</span>
                <p className="introPara">With a passion for software engineering and web development.<br/> Despite being new to the industry, I showcase strong skills in<br/> front-end development, React.js, and full-stack technologies.</p>

                <Link>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me
                    </button>
                </Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    );
};

export default Intro;
