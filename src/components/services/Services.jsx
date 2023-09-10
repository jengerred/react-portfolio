import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <>
<section id="services" className="border">

  <h5>What I Offer</h5>
  <h2>Services</h2>

  <div className="services__container">

{/* UI/UX Design Section */}
    <article className="services">

        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

          <ul className="service__list">
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
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
    </article>


{/* Full Stack Section */}
    <article className="services">

        <div className="service__head">
          <h3>Full Stack</h3>
        </div>

        <ul className="service__list">
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
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </li>
        </ul>
    </article>


{/* Frontend Section */}
    <article className="services">

        <div className="service__head">
          <h3>Frontend</h3>
        </div>

            <ul className="service__list">
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