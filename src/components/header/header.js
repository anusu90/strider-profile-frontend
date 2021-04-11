import React from 'react';
import anunayProfilePic from "../../statics/images/anunay-profile.jpg"

export default function Header({ component: Component, ...rest }) {

    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src={anunayProfilePic} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Anunay Sinha</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://www.linkedin.com/in/anunay-sinha-6214b227" target="_blank" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        <a href="https://www.twitter.com/anusu90" target="_blank" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="https://www.facebook.com/anusu90" target="_blank" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="https://www.instagram.com/strider0610/" target="_blank" className="instagram"><i className="bx bxl-instagram" /></a>
                    </div>
                </div>

                <Component {...rest}></Component>

                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
            </div>
        </header>

    )

}