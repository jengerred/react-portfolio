import React from 'react';
import './about.css';
import ME from '../../assets/test.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <>
        <section id="about" className="border" >
          <h5>Get to Know</h5>
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
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>300+ clients worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed Projects</small>
                        </article>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cum, incidunt labore, rerum totam recusandae mollitia neque sit, dicta quaerat repellendus. Delectus eaque deserunt qui dolore sit amet nesciunt similique.</p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
        </>
    )
};
export default About;