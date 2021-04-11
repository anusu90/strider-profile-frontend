import React from 'react';

export default function Resume() {
    return (

        < section id="resume" className="resume" >
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>B. Tech Graduate from IIT, with aptitute towards problem solving and quick learning abililities. I work great in teams and have experience in leading a group of over 50 people.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Anunay Sinha</h4>
                            <p><em>Innovative and deadline-driven full stack web developer with strong foundation on ReactJS, NodeJS , Express, MongoDB and ability to create polished and ready to deploy
                                apps right from initial concepts to final product</em></p>
                            <ul>
                                <li>25 Jail Road East, Ranchi</li>
                                <li>(+91) 9840917857</li>
                                <li>anusu90@gmail.com</li>
                            </ul>
                        </div>
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Technology</h4>
                            <h5>2009 - 2013</h5>
                            <p><em>Indian Institute of Technology, BHU, Varanasi</em></p>
                            <p>Mechanical Engineering</p>
                            <p>Explored programming in Python, Fortran and C</p>
                            <p>Departmental Rank Holder</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                            <h5>2010 - 2014</h5>
                            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
                            unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart
                  dila</p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="resume-title">Professional Experience &amp; Certification</h3>
                        <div className="resume-item">
                            <h4>Full Stack Bootcamp</h4>
                            <p><em>GUVI Zen Classes</em></p>
                            <h5>Oct 2020 - April 2021</h5>

                            <ul>
                                <li>MERN Stack</li>
                                <li>AWS</li>
                                <li>NGINX</li>
                                <li>SocketIO/WebRTC</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Advanced Certification in Machine Learning &amp; Cloud </h4>
                            <p><em>UPGRAD</em></p>
                            <h5>Oct 2020 - Current</h5>

                            <ul>
                                <li>Big-Data using Hadoop</li>
                                <li>SQL &amp; HIVE</li>
                                <li>Spark &amp; PySpark</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Python Certification</h4>
                            <h5>2020 - Current</h5>
                            <p><em>UDEMY</em></p>
                            <ul>
                                <li>Learnt basic as well as intermediate concepts of Python </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}