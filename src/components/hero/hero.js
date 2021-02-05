import React, { useState } from 'react';
// import anunayBackGroundPic from "../../statics/images/anunay-bg.jpg"
import anunayBackGroundPic from "../../statics/images/cool-background.jpg"
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';

export default function Hero() {

    let data = "a Developer a Learner a Designer"
    let i = 0;

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${anunayBackGroundPic})` }}>
            <div className="hero-container" data-aos="fade-in">

                <Pulse>
                    <h1 style={{ color: "whitesmoke" }}>
                        Anunay Sinha
                        </h1>
                </Pulse>

                <p className="whatIam">I'm <span className="iamAnimation"> {data} </span>
                    <span id="cursor" className="cursor"> | </span>
                    <Jump>  </Jump> </p>
            </div>
        </section>
    )


}