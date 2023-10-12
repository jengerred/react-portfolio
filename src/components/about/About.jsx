import React from 'react';
import './about.css';
import ME from '../../assets/test.png';
import {FaAward} from 'react-icons/fa';
import {BiBook} from 'react-icons/bi';
import {VscFolderLibrary} from 'react-icons/vsc';
import {FaGithub} from "react-icons/fa";



const About = () => {
    return (
        <>
        <section id="about" className="border" >
      
          <h5 style={{marginTop: "5rem"}}>Get to Know</h5>
          <h2>About Me</h2>
        
            <div className="container about__container">
      
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="jen's pic"/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Education</h5>
                            <small style={{color: "white"}}>MIT XPRO</small>
                            <br/>
                            <small> MERN Full Stack Development </small>
                        </article>

                        <article className="about__card">
                        <a href="https://github.com/jengerred" target="_blank"><FaGithub className="about__icon"/></a>
                            <h5>GitHub</h5>
                            <small>46 Repositories</small>
                        </article>

                        <article className="about__card">
                            <BiBook className='about__icon'/>
                            <h5>Projects</h5>
                            <small>40+ Completed Projects</small>
                        </article>
                    </div>
                    <br/>
                    <p>Hello World! My name is Jennifer Gerred. I am a full stack developer, specializing in MERN stack. 
                            I love learning new skills and continue growing and working with the skills I have. 
                            It is so exciting to see everything come together into a fully functional project.
                             I am looking forward to adding more projects to my portfolio as well as updating and adding to what I have currently.
                             I love that I can use my skills and knowledge to make other peoples jobs easier and more productive. 
                             I am excited to continue to learn and grow as a full stack developer! 
                              </p>

                              <p>
                        Check out my 
                        <a href='#portfolio' className="jump">
                             Recent Projects 
                        </a>   
                            to see what I have been able to do. 
                            </p>
<br/>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
        </>
    )
};
export default About;