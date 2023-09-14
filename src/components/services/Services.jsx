import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <>
<section id="services" className="border">

  <h5 style={{marginTop: "5rem"}}>What I Offer</h5>
  <h2>Services</h2>

  <div className="services__container">

{/* UI/UX Design Section */}
    <article className="services">

        <div className="service__head">
          <h3>Full Stack </h3>
        </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Express </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>REACT </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Node</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>AWS </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Firebase </p>
            </li>
          </ul>
    </article>


{/* Full Stack Section */}
    <article className="services">

        <div className="service__head">
          <h3>Frontend</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Tetris Game </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>PacMan Game </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </li>
        </ul>
    </article>


{/* Frontend Section */}
    <article className="services">

        <div className="service__head">
          <h3>Backend</h3>
        </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Bad Banking App </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
            </ul>

    </article>

  </div>

</section>

        </>
    )
}

export default Services;