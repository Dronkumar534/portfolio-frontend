import "../styles/Arsenal.css";



const Arsenal = () => {
    return (


        <section className="arsenal" id="Arsenal">
            <div>
                <h1 className="arsenal-name">THE ARSENAL</h1>
            </div>

            <div className="arsenal-container">

                {/* LEFT SIDE */}
                <div className="arsenal2">

                    <div className="arsenal-left">
                        <p className="tag">—WEAPONS OF CHOICE</p>
                        <h1>TECHNICAL<br />ARSENAL</h1>

                        <p className="desc">
                            A warrior's strength lies not in having every weapon — but in mastering the ones that matter.
                            These tools have been proven in production, battle-tested across industries, and sharpened
                            through real-world use.
                        </p>
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="arsenal-grid">

                        <div className="cards">
                            <h4>LANGUAGES</h4>
                            <p>Java</p>
                            <p>Python</p>
                            <p>JavaScript</p>
                            <p>HTML5, CSS3</p>
                        </div>

                        <div className="cards">
                            <h4>FRAMEWORKS</h4>
                            <p>Spring Boot</p>
                            <p>Hibernate</p>
                            <p>React.js</p>
                            <p>Servlet & JSP</p>
                        </div>

                        <div className="cards">
                            <h4>DATABASES</h4>
                            <p>MySQL</p>
                            <p>PostgreSQL</p>
                        </div>

                        <div className="cards">
                            <h4>PLATFORMS & TOOLS</h4>
                            <p>IntelliJ</p>
                            <p>VS Code</p>
                            <p>Maven</p>
                            <p>GitHub</p>
                            <p>Postman</p>
                            <p>DBewer</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arsenal