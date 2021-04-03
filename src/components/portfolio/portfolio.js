import React from 'react';
import gymLogImg from "./gymlog/gymlog.png"
import chatAppImg from "./chatapp/chatapp2.png"
import gitHubImg from "./githubclone/github.png"
import todoAppImg from "./todoapp/todoapp.png"
import zoomCloneImg from "./zoomclone/zoomclonenode.png"

export default function Portfolio() {

    return (

        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p> Explore some of the projects that I did. </p>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">Full Stack</li>
                            <li data-filter=".filter-card">NODE</li>
                            <li data-filter=".filter-web">ReactJS</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={gymLogImg} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href={gymLogImg} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-zoom-in" /></a>
                                <a href="https://youthful-goldstine-c7cf0d.netlify.app/" target="_blank" title="Open Web Page"><i className="bx bx-plus" /></a>
                                <a href="https://github.com/anusu90/fitness-logger-frontend" title="Github link" target="_blank"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={chatAppImg} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href={chatAppImg} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-zoom-in" /></a>
                                <a href="https://stupefied-hawking-912e7d.netlify.app/" target="_blank" title="Open Web Page"><i className="bx bx-plus" /></a>
                                <a href="https://github.com/anusu90/chat-app-frontend" title="Github link" target="_blank"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src={todoAppImg} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href={todoAppImg} data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-zoom-in" /></a>
                                <a href="https://wizardly-liskov-a0396b.netlify.app" target="_blank" title="Website"><i className="bx bx-plus" /></a>
                                <a href="https://github.com/anusu90/Guvi-Todo-App" target="_blank" title="Github Link"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src={zoomCloneImg} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href={zoomCloneImg} data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-zooom-in" /></a>
                                <a href="https://node-zoom-clone-1.herokuapp.com" target="_blank" title="More Details"><i className="bx bx-plus" /></a>
                                <a href="https://github.com/anusu90/zoom-clone-node-1" target="_blank" title="More Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src={gitHubImg} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href={gitHubImg} data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-zooom-in" /></a>
                                <a href="https://wonderful-darwin-60d250.netlify.app/" target="_blank" title="More Details"><i className="bx bx-plus" /></a>
                                <a href="https://github.com/anusu90/git-clone-2" target="_blank" title="More Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}