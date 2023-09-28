import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import MIT from '../../assets/MIT Certificate.png'
import {AiFillHtml5} from 'react-icons/ai';
import {SiJavascript} from 'react-icons/si';
import {SiCsswizardry} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {FaBootstrap} from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {SiAmazonaws} from 'react-icons/si';
import {BsFiletypeJson} from 'react-icons/bs';
import {FaDocker} from 'react-icons/fa';
import {SiAxios} from 'react-icons/si';
import {TbBrandGraphql} from 'react-icons/tb';
import {SiNextdotjs} from 'react-icons/si';
import {SiPostgresql} from 'react-icons/si';
import {FaNpm} from 'react-icons/fa';
import {FaGitAlt} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';
import {SiFirebase} from 'react-icons/si';


import Particle3 from '../particles/Particle3'


const Experience= () => {
    return (
        <>
          <section id="experience" className="border2">
          <div id="tsparticles3"><Particle3/></div>
            <h5 style={{position: "relative", zIndex: "1"}}>My Skills</h5>
            <h2 style={{position: "relative", zIndex: "1"}}>My Experience</h2>

            <div className="MIT">
               <img src={MIT} className="certificate"/>
            </div>

            <div className="container experience__container">


              <div className="experience__frontend">
                  <h3>Frontend Development</h3>
                
                  <div className="experience__content">
                  <article className="experience__details">
                      <AiFillHtml5 className="experience__details-icon"/>
                      <div>
                      <h4>HTML</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <SiCsswizardry className="experience__details-icon"/>
                      <div>
                      <h4>CSS</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <SiJavascript className="experience__details-icon"/>
                      <div>
                      <h4>Javascript</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <FaReact className="experience__details-icon"/>
                      <div>
                      <h4>React</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <SiNextdotjs className="experience__details-icon"/>
                      <div>
                      <h4>Next</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <FaBootstrap className="experience__details-icon"/>
                      <div>
                      <h4>Bootstrap</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <FaNpm className="experience__details-icon"/>
                      <div>
                      <h4>NPM</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <FaGitAlt className="experience__details-icon"/>
                      <div>
                      <h4>Git</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <BsGithub className="experience__details-icon"/>
                      <div>
                      <h4>GitHub</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
                  <article className="experience__details">
                      <FaCodepen className="experience__details-icon"/>
                      <div>
                      <h4>CodePen</h4>
                      <small className="text-light">Experienced</small>
                      </div>
                  </article>
              </div>
              </div>

              <div className="experience__backend">
                  <h3>Backend Development</h3>
             
                  <div className="experience__content">
                      <article className="experience__details">
                        <SiMongodb className="experience__details-icon"/>
                        <div>
                          <h4>MongoDB</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <FaNodeJs className="experience__details-icon"/>
                        <div>
                          <h4>Node</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <SiExpress className="experience__details-icon"/>
                        <div>
                          <h4>Express</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                        </article>
                      <article className="experience__details">
                        <BsFiletypeJson className="experience__details-icon"/>
                        <div>
                          <h4>JSON</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <SiAmazonaws className="experience__details-icon"/>
                        <div>
                          <h4>AWS</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <FaDocker className="experience__details-icon"/>
                        <div>
                          <h4>Docker</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <SiAxios className="experience__details-icon"/>
                        <div>
                          <h4>AXIOS</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <TbBrandGraphql className="experience__details-icon"/>
                        <div>
                          <h4>GraphQL</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        <SiPostgresql className="experience__details-icon"/>
                        <div>
                          <h4>PostgreSQL</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                      <article className="experience__details">
                        < SiFirebase className="experience__details-icon"/>
                        <div>
                          <h4>Firebase</h4>
                          <small className="text-light">Experienced</small>
                        </div>
                      </article>
                     
                  </div>
              </div>

            </div>
          </section>
        </>
    )
};
export default Experience;
