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
              <p>Full Websites and Apps </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>User Login </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Accept payments</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Book Appointments</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>ECommerce</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>No project too big or too small</p>
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
            <p>Professional websites and Apps</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Unique designs</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Professional designs </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Easy to use User Interface</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Fully Functional </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Transform your website or app into REACT app. </p>
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
                <p>MongoDB </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Amazon AWS </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Google Firebase </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Docker </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Axios </p>
              </li>
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Stripe</p>
              </li>
            </ul>

    </article>

  </div>

</section>

        </>
    )
}

export default Services;