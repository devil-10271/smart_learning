
import './AboutUs.css';

import teamImage from '../assets/images/team.jpg';
import missionImage from '../assets/images/vision.jpg';
import Nav from "../Basics/Navbar"


const AboutUs = () => {

  return (

    <>
        <Nav/>   
        <div className="about-container">
        <div className="about-hero">
          <h1>About Us</h1>
          <p>Building Tomorrow's Leaders Through Quality Education</p>
        </div>

        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, our institution has been at the forefront of
                educational innovation. We believe in providing a holistic learning
                experience that prepares students for the challenges of tomorrow.
                Through cutting-edge technology and experienced faculty, we create an
                environment where learning thrives.
              </p>
            </div>
            <div className="about-image">
              <img src={teamImage} alt="Our Team" />
            </div>
          </div>
        </section>

        <section className="about-section mission-section">
          <div className="about-content reverse">
            <div className="about-image">
              <img src={missionImage} alt="Our Mission" />
            </div>
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To empower individuals with knowledge and skills that enable them to
                make meaningful contributions to society. We strive to create an
                inclusive learning environment that fosters creativity, critical
                thinking, and personal growth.
              </p>
              <ul className="mission-points">
                <li>Provide quality education accessible to all</li>
                <li>Foster innovation and research</li>
                <li>Build strong industry partnerships</li>
                <li>Promote lifelong learning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section values-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Excellence</h3>
                  <p>Striving for the highest standards in education</p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>Embracing new ideas and technologies</p>
                </div>
                <div className="value-card">
                  <h3>Integrity</h3>
                  <p>Maintaining ethical standards in all we do</p>
                </div>
                <div className="value-card">
                  <h3>Inclusion</h3>
                  <p>Creating opportunities for everyone</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>

  );
};

export default AboutUs;