import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
       
        <section id='skills'>
            <span className="skillTitle">what I do </span>
            <span className="skillDesc">I am a skilled and passionate web designer with With expertise in React.js, JavaScript, HTML, CSS, and Tailwind CSS on the front end and Node.js, Express.js, SQL, and MongoDB on the back end, I develop seamless applications that enhance user experience. I also have experience with Java, Python, and RESTful APIs, ensuring efficient database management and robust backend solutions.

I am committed to writing clean, efficient, and maintainable code while continuously learning and staying updated with industry trends. My projects, including StoryWay, Agriculture Waste Management System, and Fresh-Faces Gallery, reflect my ability to create intuitive, responsive, and performance-optimized web solutions.</span>
        <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>This demo text can be changed while making the productionready website.</p>

        </div>
        </div>

        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Web Design</h2>
            <p>You can write text related to web development.</p>

        </div>
        </div>

        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>App Design</h2>
            <p>You can write text related to App development.</p>

        </div>
        </div>

        </div>
        </section>
    );
};

export default Skills;