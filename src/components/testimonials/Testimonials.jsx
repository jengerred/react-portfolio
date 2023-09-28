import React from 'react';
import './testimonials.css';
import Placeholder from '../../assets/ATM.png';

import Notifications from "../../assets/Notifications.png"

const Testimonials = () => {
    return (
        <>
        <section id="testimonials" className="border">
        <h5 style={{marginTop: "5rem"}}>Experience</h5>
    <h2>Client Website</h2>
   
    <div className="videos">

    <div className="video-1">
        <h1 style={{fontSize: "1.3rem", marginTop: "2rem", color: "#83EEFF"}}>Full Website Video</h1>
        <iframe className="video2" src="https://www.youtube.com/embed/9AojvuJRfyE?si=--randX7kI690MpS"    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>

    </div>
    <div className="video-1">
        <h1 style={{fontSize: "1.3rem", marginTop: "2rem", color: "#83EEFF"}}>Responsive Design</h1>
        <iframe className="video2"       src="https://www.youtube.com/embed/wtu8Ox4g85g?si=DfMgmfGngy2dvUhH"    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
  
    </div>
    <div className="video-1">
        <h1 style={{fontSize: "1.3rem", marginTop: "2rem", color: "#83EEFF"}}>Text and Email Reminders</h1>
        <img className="video4" src={Notifications}/>
    </div>
</div>

<div className="border">
<h2 style={{textAlign: "center", marginTop: "4rem", color: "#83EEFF", fontSize: "1.5rem",marginBottom: "3rem", position: "relative", zIndex: "1"}}>YouTube Project Videos</h2>
        <div className="wrapper">

        <h2 className="img-title">Banking App Demo</h2>
        <iframe className="scroll-img" src="https://www.youtube.com/embed/Sn6ncDTncyc?si=9ogA9qCA3FFJuuIC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
      

        <h2 className="img-title">Restaurant App Demo</h2>
        <iframe className="scroll-img" src="https://www.youtube.com/embed/caSbElsdLqY?si=QuVD2r6IaGWls546"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>

<h2 className="img-title">Restaurant App 1</h2>
        <iframe className="scroll-img" src="https://www.youtube.com/embed/G-ImKbXsFpM?si=k7Mp3B0MRGgqgpW4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>

    <h2 className="img-title">Restaurant App 2</h2>
        <iframe className="scroll-img" src="https://www.youtube.com/embed/w9XITMiKrMc?si=UkuBVey7Gq0y7XNw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>

    <h2 className="img-title">Restaurant App 3</h2>
        <iframe className="scroll-img" src="https://www.youtube.com/embed/KiuSxOYt9Ec?si=355aGUEIKd02L0rP"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"   allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>

  
    </div>

    <div className="arrow-div">
         Scroll to view more
   </div>

   </div>
        </section>
        </>
    )
};
export default Testimonials;