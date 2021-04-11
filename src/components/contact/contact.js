import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")
    let [loading, setLoading] = useState(false)
    let [displayMessage, setDisplayMessage] = useState(false)

    let messageRef = useRef(null)

    const btnStyle1 = {
        width: "200px"
    }

    const handleSendEmail = async (e) => {
        setLoading(true)
        e.preventDefault();
        let url = process.env.REACT_APP_BACKEND
        let data = {
            name,
            email,
            subject,
            message
        }

        let sendMailReq = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })

        let sendMailBody = await sendMailReq.json();
        console.log(sendMailBody)
        setLoading(false)
        setDisplayMessage(true)
        setTimeout(() => {
            setDisplayMessage(false)
        }, 2000);

        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to connect with me for a chat or a cup of coffee </p>
                </div>
                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map" />
                                <h4>Location:</h4>
                                <p>Ranchi, Jharkhand, India 834002</p>
                            </div>
                            <div className="email">
                                <i className="icofont-envelope" />
                                <h4>Email:</h4>
                                <p>anusu90@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="icofont-phone" />
                                <h4>Call:</h4>
                                <p>+919840917857</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen frameBorder={0} />
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form role="form" className="php-email-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={name} onChange={(e) => { setName(e.target.value) }} required />
                                    <div className="validate" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} required />
                                <div className="validate" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows={10} data-rule="required" data-msg="Please write something for us" defaultValue={""} value={message} onChange={(e) => { setMessage(e.target.value) }} required />
                                <div className="validate" />
                            </div>
                            {
                                (displayMessage) ? (
                                    <div className="mb-3" ref={messageRef}>
                                        <FontAwesomeIcon color="green" icon={faCheck} /> &nbsp; <div className="message" style={{ color: "green", display: "inline-block" }}>Your message has been sent. Thank you!</div>
                                    </div>
                                ) : <div></div>
                            }
                            <div className="text-center"><button type="submit" style={btnStyle1} onClick={(e) => handleSendEmail(e)}>{(loading) ? <FontAwesomeIcon icon={faSync} spin /> : "Send Message"}</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}