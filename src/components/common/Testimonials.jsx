import React from "react";
import "../../assets/css/testimonial.scss";

import Client1 from "../../assets/images/client1.jpg";
import Client2 from "../../assets/images/client2.jpg";
import Client3 from "../../assets/images/client3.jpg";

const testimonials = [
    {
        image: Client1,
        name: "Ahmed Khan",
        role: "Business Owner",
        company: "AK Solutions",
        text: "Aziz did an amazing job on our website. The design was clean, modern and the website worked perfectly on all devices.",
    },
    {
        image: Client2,
        name: "Usman Ali",
        role: "Startup Founder",
        company: "TechNova",
        text: "Working with Aziz was a great experience. He understood our requirements quickly and delivered a professional Laravel application.",
    },
    {
        image: Client3,
        name: "Hamza Raza",
        role: "Project Manager",
        company: "BuildPro",
        text: "Very professional developer. The project was completed smoothly and the communication throughout the project was excellent.",
    },
];

const Testimonials = () => {
    return (
        <>
        
        <section className="testimonials-section" id="testimonials">
            <div className="container">

                {/* Heading */}
                <div className="testimonials-heading">
                    <span className="testimonials-subtitle">
                        TESTIMONIALS
                    </span>

                    <h2>
                        What My <span>Clients Say</span>
                    </h2>

                    <p>
                        Feedback from clients and people I have worked with.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="testimonials-container">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className="testimonial-card"
                            key={index}
                        >
                            {/* Client Image */}
                            <div className="client-image-wrapper">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                            </div>

                            <div className="testimonial-content">

                                {/* Quote */}
                                <div className="quote-icon">
                                    “
                                </div>

                                {/* Text */}
                                <p className="testimonial-text">
                                    {testimonial.text}
                                </p>

                                {/* Client Info */}
                                <div className="testimonial-client">
                                    <h4>
                                        {testimonial.name}
                                    </h4>

                                    <p>
                                        {testimonial.role}
                                    </p>

                                    <span>
                                        {testimonial.company}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
        </>

    );
};

export default Testimonials;