import "../styles/Deploy.css";
import { useState } from "react";
import sendContactMessage from "../services/contactService";

const Deploy = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        setLoading(true);

        const response = await sendContactMessage(formData);

        alert(response.message || "Message sent successfully!");
        
        setFormData({
            name: "",
            email: "",
            projectType: "",
            message: ""
        });

    } catch (error) {

        alert(
            error.response?.data?.message ||
            "Failed to send message. Please try again."
        );

    } finally {
        setLoading(false);
    }
};

return (
    <section id="Deploy" className="deploy-container">
        <div>
            <div className="deploy-name">
                <h1>DEPLOY</h1>
                <h1 className="signal">SEND THE SIGNAL</h1>
            </div>

            <div className="first-section" >
                <p>—MISSION BRIEF</p>

                <h1>OPEN A CHANNEL</h1>

                <p className="mission-massage">A good mission deserves the right operator. Have a project that demands precision,
                    <br />performance, and someone who ships? The line is open.</p>


            </div>

            <div className="second-section">
                <div className="contact-left">

                    <div className="contact-card">
                        <p className="label">SECURE CHANNEL</p>
                        <a href="mailto:dronkumarthakare408@gmail.com">
                            dronkumarthakare408@gmail.com
                        </a>
                    </div>

                    <div className="contact-card">
                        <p className="label">DIRECT LINE</p>
                        <a href="https://github.com/yourusername" target="_blank">
                            +91 9322538656
                        </a>
                    </div>

                    <div className="contact-card">
                        <p className="label">BASE OF OPERATIONS</p>
                        <a href="" target="_blank">
                            Pune,Maharashtra,India
                        </a>
                    </div>

                    <div className="contact-card">
                        <p className="label">PROFESSIONAL NETWORK</p>
                        <a href="www.linkedin.com/in/dronkumar-thakare-2baab8316" target="_blank">
                            dronkumar-thakare-2baab8316
                        </a>

                    </div>

                    <div className="contact-card">
                        <p className="label">CODE REPOSITORY</p>
                        <a href="https://github.com/DKDev45" target="_blank">
                            github.com/Dronkumar-Thakare
                        </a>
                    </div>

                </div>

                <div className="contact-right">
                    <div className="form-container">

                        <form onSubmit={handleSubmit}>

                            <p className="form-subtitle">— TRANSMISSION FORM</p>
                            <h1 className="form-title">YOUR MISSION BRIEF</h1>

                            <div className="form-row">

                                <div className="input-group">
                                    <label>YOUR NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={100}
                                    />
                                </div>

                                <div className="input-group">
                                    <label>EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={254}
                                    />
                                </div>

                            </div>

                            <div className="input-group">
                                <label>PROJECT TYPE</label>
                                <input
                                    type="text"
                                    name="projectType"
                                    placeholder="e.g. Full Stack App, API..."
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    maxLength={150}
                                />
                            </div>

                            <div className="input-group">
                                <label>MISSION DETAILS</label>
                                <textarea
                                    name="message"
                                    placeholder="Describe what needs to be built..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    maxLength={5000}
                                />
                            </div>

                            <div className="form-footer">
                                <p>Response within 24 hrs • Pune, IN</p>

                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? "TRANSMITTING..." : "TRANSMIT"}
                                </button>
                            </div>

                            {status && (
                                <p className={`form-status ${status.type}`}>
                                    {status.message}
                                </p>
                            )}

                        </form>

                    </div>
                </div>

            </div>
        </div>
    </section>
)
}

export default Deploy