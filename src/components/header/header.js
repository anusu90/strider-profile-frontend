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
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>

                <Component {...rest}></Component>

                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
            </div>
        </header>

    )

}