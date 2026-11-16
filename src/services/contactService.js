import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const sendContactMessage = async (contactData) => {
    const response = await axios.post(
        `${API_URL}/api/contact`,
        contactData
    );
    // const response = await axios.post(
    //     `${import.meta.env.VITE_API_URL}/api/contact`,
    //     {
    //         name,
    //         email,
    //         projectType,
    //         message
    //     }
    // );

    return response.data;
};

export default sendContactMessage;