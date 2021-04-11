import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {

    let resumeURL = "https://drive.google.com/file/d/18C_8xdBPNxuwbGnfx7AGB4QUrPx57igM/view?usp=sharing";

    return (
        < section id="resume" className="resume" >
            <div className="container">
                <div className="section-title">
                    <h2>Resume  &nbsp;&nbsp; <a href={resumeURL} target="_blank"><FontAwesomeIcon icon={faDownload} /></a></h2>
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
                            <h4>SKill Sets and Hobbies</h4>
                            <h5>Problem Solving || Quick learner || Hard-working</h5>
                            <p><em>After joining Guvi classes despite being a mechanical Engineering graduate I quickly grasped to all the concepts and received very positive feedback from the faculty there.</em></p>
                            <h5>History || Cricket || Learning Languages</h5>
                            <p><em>Can have long discussion over History or Cricket or History of Cricket</em></p>
                            {/* <p><em>Over last few years got the opportunity to live in Maharashtra and Tamil Nadu where I picked up Marathi and Tamizh. Actually still picking Tamizh</em></p> */}
                            <p><em>Can speak English, Hindi, Bhojpuri, Marathi and bit of Tamizh. </em></p>
                            <p><em>Open to work anywhere</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="resume-title">Professional Experience &amp; Certification</h3>
                        <div className="resume-item">
                            <h4>Full Stack Bootcamp</h4>
                            <p><em>GUVI Zen Classes</em></p>
                            <h5>Oct 2020 - April 2021</h5>

                            <ul>
                                <li>ReactJS || Express || NodeJS || MongoDB</li>
                                <li>SQL</li>
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
                            <h5>Nov 2020 - Current</h5>
                            <p><em>UDEMY</em></p>
                            <ul>
                                <li>Learnt basic as well as intermediate concepts of Python including libraries like Numpy, Pandas, Matplotlib, BeautifulSoup </li>
                                <li>In process of learning Flask </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}