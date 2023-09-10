import React from 'react';
import './portfolio.css';
import Tetris from '../../assets/Tetris.png';


const Portfolio = () => {
    return (
        <>
        <section id="portfolio" className="border2">
            <h5>My Recent Projects</h5>
            <h2>Projects</h2>
            <div className="portfolio__container">

                <article className="portfolio__item">

                        <div className="portfolio__item-image">
                        <img src={Tetris} alt="Tetris-game"/>
                        </div>

                        <h3>Tetris</h3>

                        <div className="portfolio__item-cta">
                            <a href="https://github.com/jengerred/Tetris-Basic.github.io" className="btn" target="_blank">github</a>
                            <a href="https://jengerred.github.io/Tetris-Basic.github.io/" className=" btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                   
                </article>

               <article className="portfolio__item">

                        <div className="portfolio__item-image">
                        <img src={Tetris} alt="Tetris-game"/>
                        </div>

                        <h3>Project Title 2</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/jengerred/Tetris-Basic.github.io" className="btn" target="_blank">github</a>
                            <a href="https://jengerred.github.io/Tetris-Basic.github.io/" className=" btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                   
                </article>

                <article className="portfolio__item">

                    <div className="portfolio__item-image">
                    <img src={Tetris} alt="Tetris-game"/>
                    </div>

                    <h3>Project Title 3</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com/jengerred/Tetris-Basic.github.io" className="btn" target="_blank">github</a>
                        <a href="https://jengerred.github.io/Tetris-Basic.github.io/" className=" btn btn-primary" target="_blank">Live Demo</a>
                    </div>

                </article>

                <article className="portfolio__item">

                    <div className="portfolio__item-image">
                    <img src={Tetris} alt="Tetris-game"/>
                    </div>

                    <h3>Project Title 4</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com/jengerred/Tetris-Basic.github.io" className="btn" target="_blank">github</a>
                        <a href="https://jengerred.github.io/Tetris-Basic.github.io/" className=" btn btn-primary" target="_blank">Live Demo</a>
                    </div>

                </article>

                <article className="portfolio__item">

                    <div className="portfolio__item-image">
                    <img src={Tetris} alt="Tetris-game"/>
                    </div>

                    <h3>Project Title 5</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com/jengerred/Tetris-Basic.github.io" className="btn" target="_blank">github</a>
                        <a href="https://jengerred.github.io/Tetris-Basic.github.io/" className=" btn btn-primary" target="_blank">Live Demo</a>
                    </div>

                </article>

                <article className="portfolio__item">

                    <div className="portfolio__item-image">
                    <img src={Tetris} alt="Tetris-game"/>
                    </div>

                    <h3>Project Title 6</h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com/jengerred/Tetris-Basic.github.io" className="btn" target="_blank">github</a>
                        <a href="https://jengerred.github.io/Tetris-Basic.github.io/" className=" btn btn-primary" target="_blank">Live Demo</a>
                    </div>

                </article>

            </div>
        </section>
        </>
    )
}

export default Portfolio;