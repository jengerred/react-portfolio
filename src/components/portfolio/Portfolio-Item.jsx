import React from 'react'
import {Link} from 'react-router-dom';

function Portfolio__Item(props) {
  return (
    <>

        <article className="portfolio__item">
      
                <div className="portfolio__item-image">
                     <img className="image" src={props.src} alt={props.alt}/>
                </div>

                <h3 className="title">{props.Title}</h3>

                <h5 className="project-description">{props.description}</h5>
                <h4 className="stack">Tech Stack:</h4>
                <h5 className="project-description">{props.tech}</h5>

                <div className="portfolio__item-cta">
                    <a href={props.github} className="btn" target="_blank">github</a>
                    <a href={props.link} className=" btn btn-primary" target="_blank">Live Demo</a>
                </div>
          
        </article>


    </>
  )
}

export default Portfolio__Item;