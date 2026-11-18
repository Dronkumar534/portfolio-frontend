import "../styles/Hero.css"
import "../styles/Battlefield.css"
const myImage = "/Dronkumar.jpeg";
// import mySecondImage from "../public/DronK.jpeg";
const Hero = () => {
    return (

        <div>
            <section className="hero-container">

                <div className="hero-top">
                    <div className="hero-left">
                        <p className="tag">FULL STACK DEVELOPER — BACKEND FOCUSED (JAVA & SPRING)</p>

                        <h1 className="name">
                            DRONKUMAR <br />
                            <span>THAKARE</span>
                        </h1>

                        <p className="role">JAVA FULL STACK DEVELOPER</p>

                        <p className="desc">
                            Full-stack developer with hands-on experience in Spring Boot and React, building secure, scalable backend systems and responsive user interfaces.
                        </p>
                    </div>


                    <div className="hero-right">
                        <div className=""></div>
                        <div className="image-box">
                            <img src={myImage} alt="profile" />

                            <div className="status-badge">
                                <span className="dot"></span>
                                <span className="text">AVAILABLE FOR MISSIONS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="third-content">
                    <div className="buttons">

                        <button className="Commision-Me">
                            <a href="#Deploy">COMMISSION ME</a>
                        </button>
                        <a href="/Resume.pdf" download={"Resume.pdf"}>
                            <button className="war-record">
                                WAR RECORD (CV)
                            </button>
                        </a>

                    </div>

                    {/* <div className="social">
                        <div className="linkedin">LinkedIn</div>
                        <div className="github">GitHub</div>
                        <div className="email">Email</div>
                    </div> */}
                </div>
            </section>

            {/* <section id="battlefield" className="battlefield">

                <div className="battlefield-name">
                    <h1>THE BATTLEFIELD</h1>
                </div>

                <div className="forged-in-production">
                    <h1>FORGED IN PRODUCTION</h1>
                </div>

                <div className="projects">

                    <div className="first-project card">
                        <h2>Bank Management System</h2>
                        <p>
                            Full-stack banking application with secure JWT-based authentication and role-based access control.
                            Handles account management and transaction processing through RESTful APIs.
                            Built using Spring Boot, React, and MySQL with focus on security and scalability.
                        </p>

                        <div className="divider"></div>

                        <div className="tech-stack">
                            <span>Spring Boot</span>
                            <span>React</span>
                            <span>MySQL</span>
                            <span>REST API</span>
                        </div>
                    </div>

                    <div className="second-project card">
                        <h2>JWT Authentication System</h2>
                        <p>
                            Implemented a secure authentication system using JWT for stateless session management.
                            Integrated Spring Security with password hashing using BCrypt for enhanced protection.
                            Designed role-based authorization to control access to protected resources.
                        </p>

                        <div className="divider"></div>


                        <div className="tech-stack">
                            <span>Spring Boot</span>
                            <span>JWT</span>
                            <span>Spring Security</span>
                            <span>BCrypt</span>
                        </div>
                    </div>

                    <div className="third-project card">
                        <h2>Task Management System</h2>
                        <p>
                            Developed a full-stack task management system with complete CRUD functionality.
                            Enabled user authentication and real-time task updates for efficient workflow tracking.
                            Built using React, Spring Boot, and MySQL with clean UI and API integration.
                        </p>

                        <div className="divider"></div>


                        <div className="tech-stack">
                            <span>React</span>
                            <span>Spring Boot</span>
                            <span>MySQL</span>
                            <span>REST API</span>
                        </div>
                    </div>

                </div>

            </section>

            <section>
                
            </section> */}

        </div>





    );
};

export default Hero;