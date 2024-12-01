import React from 'react';


const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Welcome to Coffee Haven</h1>
          <p>Your ultimate destination for exceptional coffee and unforgettable moments.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container about-content">
          <h2>About Us</h2>
          <p>
            At Coffee Haven, we’re passionate about delivering the perfect cup of coffee. Located in the heart of the city,
            we provide a warm and inviting space for coffee lovers to relax, connect, and recharge.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to serve the finest coffee while creating a community of coffee enthusiasts who value
            quality, sustainability, and connection.
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties">
        <div className="container">
          <h2>Our Specialties</h2>
          <div className="specialties-grid">
            <div className="specialty-item">
              <img src="images/coffee/c1.jpg" alt="Espresso" />
              <h3>Signature Espresso</h3>
              <p>Rich, bold, and unforgettable – a must-try for any coffee lover.</p>
            </div>
            <div className="specialty-item">
              <img src="images/coffee/c2.jpg" alt="Latte Art" />
              <h3>Latte Art</h3>
              <p>Beautifully crafted lattes with intricate designs, made by our expert baristas.</p>
            </div>
            <div className="specialty-item">
              <img src="images/coffee/c3.jpg" alt="Cold Brew" />
              <h3>Cold Brew</h3>
              <p>Perfectly brewed over hours for a smooth, refreshing taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h4>Quality</h4>
              <p>We are committed to serving the best coffee, every time.</p>
            </div>
            <div className="value-item">
              <h4>Sustainability</h4>
              <p>We prioritize ethical sourcing and environmental responsibility.</p>
            </div>
            <div className="value-item">
              <h4>Community</h4>
              <p>We aim to foster a welcoming and inclusive coffee culture.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
