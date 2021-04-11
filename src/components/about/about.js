import React from 'react';

export default function About() {

    return (

        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <p>While in college and after graduating writing code to solve problems always attracted me. This with the creative dimension of a web design,
                    a strong push towards taking everyone online to connect and grow, attracted me towards becoming a full stack web developer.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full Stack Web Developer &amp; Designer </h3>
                        <p className="font-italic">
                            This is 2 cents about me. Contact me if you like my work and maybe together we can build something good and interesting.
              </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 06 October</li>
                                    <li><i className="icofont-rounded-right" /> <strong>Website:</strong> www.anunaysinha.online</li>
                                    <li><i className="icofont-rounded-right" /> <strong>Phone:</strong> (+91)9840917857</li>
                                    <li><i className="icofont-rounded-right" /> <strong>City:</strong> City :Ranchi, Jharkhand</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 30</li>
                                    <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> B. Tech. (IIT) </li>
                                    <li><i className="icofont-rounded-right" /> <strong>Email:</strong> anusu90@gmail.com</li>
                                    <li><i className="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
                                </ul>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}