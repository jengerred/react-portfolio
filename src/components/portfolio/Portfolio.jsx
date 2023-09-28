import React from 'react';
import './portfolio.css';

import Tetris from '../../assets/Tetris.png';
import Restaurant from '../../assets/Restaurant-App.png';
import Bank from '../../assets/BadBank.png';
import First from '../../assets/First-Webpage.png';
import PacMan from '../../assets/PacManGame.png';
import Bus from '../../assets/BusTracker.png';
import Dice from '../../assets/DiceGame.png';
import Eyes from '../../assets/eyes.png';
import Objects from '../../assets/MovingObjects.png';
import Console from '../../assets/Reports.png';
import ATM from '../../assets/ATM.png';
import TicTacToe from '../../assets/Tic-Tac-Toe.png';
import StrapiCart from '../../assets/Strapi-Cart.png';
import MovieApp from '../../assets/Movie-App.png';
import ToDo from '../../assets/ToDo.png';
import Cart from '../../assets/Shopping Cart.png';


import Portfolio__Item from './Portfolio-Item';

import Particle4 from '../particles/Particle4'; 

const Portfolio = () => {
    return (
        <>
        <section id="portfolio" className="border2">
        <div id="tsparticles4"><Particle4/></div>
            <h5 style={{position: "relative", zIndex: "1"}}>My Recent Projects</h5>
            <h2 style={{position: "relative", zIndex: "1"}}>Projects</h2>
            <div className="portfolio__container">

     <article className="portfolio__item">
      
      <div className="portfolio__item-image">
           <img className="image" src={Restaurant} alt="Restaurant-App"/>
      </div>

      <h3 className="title">Restaurant-App</h3>

      <h5 className="project-description">This project is a full stack project using local restaurants.</h5>
      <h4 className="stack">Tech Stack:</h4>
      <h5 className="project-description">CSS, Node, React, Next, MongoDB, Axios, Strapi, Stripe, Vercel, Heroku</h5>

      <div className="portfolio__item-cta">
          <a href="https://github.com/jengerred/restaurant-app-frontend" className="btn" target="_blank">github</a>
          <a href="https://www.youtube.com/embed/caSbElsdLqY?si=QuVD2r6IaGWls546" className=" btn btn-primary" target="_blank">Video Demo</a>
      </div>

</article>

           

<Portfolio__Item
                src={Bank}
                alt="Banking-App"
                Title="Banking-App Static Website"
                description="This project was an assignment from MIT XPro course.
                 We were instructed to create an app that will create a user account,
                  have the user login, and have a functional deposit and withdrawal page
                   as well as a page to display all the account data."

                tech="HTML, CSS, Node, React, MongoDB, Docker, Axios, Amazon AWS"
                github="https://github.com/jengerred/BadBank-App"
                link="http://jensbadbank.s3-website.us-east-2.amazonaws.com/"
            />

            <Portfolio__Item
                src={Tetris}
                alt="Tetris-game"
                Title="Tetris"
                description="This was another fun project! Go ahead and try it for yourself.
                Caution: This game can be addicting!"

                tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/Tetris-Basic.github.io"
                link="https://jengerred.github.io/Tetris-Basic.github.io/"
            />

<Portfolio__Item
                src={Dice}
                alt="Dice Game"
                Title="Dice Game"
                description="This was a fun 2 player game project! Grab a friend and play.
                 Be sure to read the rules of the game first. First to get 100 points wins!"

                 tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/DiceGame.io"
                link="https://jengerred.github.io/DiceGame.io/"
                />

<Portfolio__Item
                src={PacMan}
                alt="PacMan-game"
                Title="Pac-Man Game"
                description="This project was fun to test out. I can't wait to create more games,
                 they are so much fun to create and see how my code is working!"

                 tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/PacMan.io"
                link="https://jengerred.github.io/PacMan.io/"
                />


<Portfolio__Item
                src={First}
                alt="First"
                Title="First Webpage"
                description="This is my very first webpage ever! This was a really fun project.
                 You can check out what there is to do in my hometown, Grand Rapids!"

                 tech="HTML, CSS"
                github="https://github.com/jengerred/FirstWebpage.github.io"
                link="https://jengerred.github.io/FirstWebpage.github.io/"
                />


<Portfolio__Item
                src={Objects}
                alt="Moving Objects"
                Title="Moving Objects"
                description="This was a great project for working with moving objects.
                 I also worked a lot with setTimeout and placing words at a set time."

                 tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/MovingBalls.io"
                link="https://jengerred.github.io/MovingBalls.io/"
                />


<Portfolio__Item
                src={Bus}
                alt="Bus Tracker"
                Title="Bus Tracker"
                description="This bus tracker will show you all the bus stops between MIT and Harvard.
                 I plan to update this project with Grand Rapids area."

                 tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/Bus-Tracker"
                link="https://jengerred.github.io/Bus-Tracker/"
                />

<Portfolio__Item
                src={Eyes}
                alt="Eyes"
                Title="Eyes"
                description="I have create an animation! Watch the eyes follow and move with the cursor.
                 I can't wait to see what other fun animations I can do with this!"

                 tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/Eyes"
                link="https://jengerred.github.io/Eyes/"
                />


<Portfolio__Item
                src={Console}
                alt="Console Reports"
                Title="Console Reports"
                description="This was the first time I worked with a lot of data 
                and formulas to get averages and sums. I really enjoyed working with objects and arrays."

                 tech="HTML, CSS, JavaScript"
                github="https://github.com/jengerred/PacMan.io"
                link="https://jengerred.github.io/SchoolReporting.io/"
                />

<Portfolio__Item
                src={ATM}
                alt="ATM"
                Title="ATM"
                description="Created a page with user friendly UI to input ATM transactions
                 and added an alert when the withdrawal amount is less than the current deposited amount."

                 tech="HTML, CSS, JavaScript, Node, React, Bootstrap"
                github="https://github.com/jengerred/ATM"
                link="https://jocular-croissant-2e176e.netlify.app/"
                />

<Portfolio__Item
                src={MovieApp}
                alt="Classic Movies Demo"
                Title="Classic Movies Demo"
                description="Demo of website that sells Classic Movies and tickets.
                 This is another project from MIT course that was really fun to create and style.
                  I look forward to adding signup and login functionality."

                 tech="HTML, CSS, JavaScript, Node, React, Bootstrap"
                github="https://github.com/jengerred/Classic-Movies-Demo/tree/main"
                link="https://lovely-wisp-706111.netlify.app/"
                />

<Portfolio__Item
                src={StrapiCart}
                alt="React Shopping Cart"
                Title="React Shopping Cart"
                description="Demo of a simple Shopping Cart using React. "

                 tech="HTML, CSS, JavaScript, Node, React, Bootstrap, Strapi, AWS"
                github="https://github.com/jengerred/strapi-cart"
                link="http://react-strapi-cart.s3-website.us-east-2.amazonaws.com/"
                />


<Portfolio__Item
                src={TicTacToe}
                alt="Tic-Tac-Toe"
                Title="Tic-Tac-Toe"
                description="Another fun project from class! We focused on Parent And Child components in A game, Mounting And Unmounting square components, Parent And Child Re-render and improve the Tic-Tac-Toe game."

                 tech="HTML, CSS, JavaScript, Node, React, Bootstrap"
                github="https://github.com/jengerred/tic-tac-toe"
                link="https://main--tranquil-dasik-658a2c.netlify.app/"
                />

<Portfolio__Item
                src={Cart}
                alt="Shopping Cart"
                Title="Shopping Cart"
                description="Shopping cart demo. 
                I plan to update css and add functionality to how many are in stock."

                 tech="HTML, CSS, JavaScript, Node, React, Bootstrap"
                github="https://github.com/jengerred/Shopping-Cart"
                link="https://dreamy-crumble-fff4bc.netlify.app/"
                />

<Portfolio__Item
                src={ToDo}
                alt="TODO"
                Title="ToDo"
                description="Simple ToDo LIst I styled to display
                 encouraging quotes and alert congratulations on completing a task."

                 tech="HTML, CSS, JavaScript, Node, React, Bootstrap"
                github="https://github.com/jengerred/ToDo"
                link="https://jengerred.github.io/ToDo/"
                />

            </div>
        </section>
        </>
    )
}

export default Portfolio;