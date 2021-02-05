import React from 'react';
import { Link } from "react-router-dom";
import { Link as SLink, Scroll, animateScroll as scroll } from "react-scroll";
// const ScrollLink = Scroll.ScrollLink

export default function NavBar(props) {

    console.log(props)

    return (

        <nav className="nav-menu">
            <ul>
                <li className="active"> <Link to="/"><i className="bx bx-home" /> <span> <a onClick={() => scroll.scrollTo(0)}>Home</a></span></Link></li>
                <li><SLink to="about" smooth={true} duration={500}><i className="bx bx-user" /> <span> <a href="/">About</a> </span></SLink></li>
                <li><SLink to="portfolio" smooth={true} duration={500} ><i className="bx bx-book-content" /> <a href="/">Projects</a> </SLink></li>
                <li><SLink to="resume" smooth={true} duration={500}><i className="bx bx-file-blank" /> <a href="/">Resume</a></SLink></li>
                <li><SLink to="contact" smooth={true} duration={500} ><i className="bx bx-envelope" /> <a href="/">Contact</a> </SLink></li>
            </ul>
        </nav>
    )


}