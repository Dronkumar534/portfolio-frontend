import { div } from "framer-motion/client"
import "../styles/Battlefield.css";


const Battlefield = () => {
    return (
        <div>
            <section id="battlefield" className="battlefield">

                <div className="battlefield-heading">
                    <h1 className="battlefield-title">THE BATTLEFIELD</h1>
                </div>
                <div className="forged-in-production">
                    <h1>FORGED IN PRODUCTION</h1>
                </div>

                <div className="projects">

                    {/* Tournexa */}
                    <div className="first-project card">
                        <h2>Tournexa – Tournament Management System</h2>
                        <p>
                            Developed a tournament management platform to manage teams,
                            players, and match scheduling efficiently. Implemented admin
                            and team owner functionalities with secure password hashing
                            and role-based access. Built using React, Spring Boot, and
                            MySQL with RESTful API integration.
                        </p>

                        <div className="divider1"></div>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Spring Boot</span>
                            <span>MySQL</span>
                            <span>REST API</span>
                        </div>
                    </div>


                    {/* SmartBuy */}
                    <div className="second-project card">
                        <h2>SmartBuy – Product Price Tracker</h2>
                        <p>
                            Developing a product tracking application that allows users
                            to set preferred price limits and product specifications.
                            Enables users to track product prices and receive email
                            notifications when matching products meet their requirements.
                            Built using Spring Boot with database integration.
                        </p>

                        <div className="divider1"></div>

                        <div className="tech-stack">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>MySQL</span>
                            <span>Java Mail</span>
                        </div>
                    </div>


                    {/* Container Tracking System */}
                    <div className="third-project card">
                        <h2>Smart Container Tracking System</h2>
                        <p>
                            Designed a logistics management database to track shipping
                            containers across warehouses, ports, vessels, and customers.
                            Structured relational data to manage shipments, inspections,
                            routes, and deliveries efficiently. Developed using SQL with
                            database normalization and query optimization.
                        </p>

                        <div className="divider1"></div>

                        <div className="tech-stack">
                            <span>SQL</span>
                            <span>MySQL</span>
                            <span>Database Design</span>
                            <span>ER Diagram</span>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Battlefield