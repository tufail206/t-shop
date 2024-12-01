import React from 'react';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Our Services</h1>
                    <p>Discover the wide range of services we offer to cater to all your coffee needs.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <h2>What We Offer</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <img src="images/coffee/c2.jpg" alt="Coffee Tasting" />
                            <h3>Coffee Tasting</h3>
                            <p>Experience the rich flavors and aromas of our finest coffee blends.</p>
                        </div>
                        <div className="service-item">
                            <img src="images/coffee/c1.jpg" alt="Barista Workshops" />
                            <h3>Barista Workshops</h3>
                            <p>Learn the art of coffee making from our skilled baristas.</p>
                        </div>
                        <div className="service-item">
                            <img src="images/coffee/c3.jpg" alt="Catering" />
                            <h3>Catering</h3>
                            <p>Bring the coffee shop experience to your events with our catering services.</p>
                        </div>
                        <div className="service-item">
                            <img src="images/coffee/c4.jpg" alt="Custom Coffee Blends" />
                            <h3>Custom Coffee Blends</h3>
                            <p>Create your unique blend with our expert guidance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-item">
                            <p>"The coffee tasting experience was phenomenal! I never knew coffee could taste this good."</p>
                            <h4>- Sarah L.</h4>
                        </div>
                        <div className="testimonial-item">
                            <p>"The barista workshop was incredibly informative. I feel like a coffee expert now!"</p>
                            <h4>- James K.</h4>
                        </div>
                        <div className="testimonial-item">
                            <p>"Their catering service added a touch of class to our event. Highly recommended!"</p>
                            <h4>- Emily R.</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <div className="container">
                    <h3>Get in Touch</h3>
                    <p>Interested in our services? Contact us today to learn more and make a booking!</p>
                    <a href="/contact" className="btn">Contact Us</a>
                </div>
            </section>
        </div>
    );
};

export default Services;
