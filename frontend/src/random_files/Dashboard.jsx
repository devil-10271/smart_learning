import React, { useEffect } from 'react'
import './Dashboard.css'

// Copy everything from sl/src/App.js here, but rename App to Dashboard
function Dashboard() {
  // Copy all hooks, functions, and state from App.js
  useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');

    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(stat => {
            const target = +stat.innerText.replace('%', '').replace('+', '');
            let current = 0;
            const increment = target / 50;

            const updateNumber = () => {
              if (current < target) {
                current += increment;
                stat.innerText = stat.innerText.includes('%')
                  ? Math.round(current) + '%'
                  : stat.innerText.includes(':')
                    ? stat.innerText
                    : Math.round(current) + '+';
                setTimeout(updateNumber, 30);
              } else {
                stat.innerText = stat.innerText.includes('%')
                  ? target + '%'
                  : stat.innerText.includes(':')
                    ? stat.innerText
                    : target + '+';
              }
            };

            updateNumber();
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (statsSection) {
      observer.observe(statsSection);
    }

    // Cleanup function
    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []); // Empty dependency array for running once on mount


  return (
    <div className="dashboard-container">
      <section className="dashboard-hero">
        <div className="hero-content">
          <h1>Transforming Students, Transforming Communities</h1>
          <p>We provide students with the skills they need to transform themselves, others, and our global communities.</p>
          <a href={"/"} className="btn">Explore Programs</a>
        </div>
      </section>

      <section className="dashboard-academics">
        <div className="container">
          <h2 className="dashboard-section-title">Our Academics</h2>
          <p className="section-subtitle">Discover our diverse range of academic programs designed to empower students with the knowledge and skills needed for success in a rapidly changing world.</p>

          <div className="programs">
            <div className="program-card">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Engineering" />
              </div>
              <div className="program-content">
                <h3>Engineering</h3>
                <p>Cutting-edge programs that prepare students for technological innovation and problem-solving.</p>
                <a href={"/"} className="btn">Learn More</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Business"/>
              </div>
              <div className="program-content">
                <h3>Business Studies</h3>
                <p>Develop leadership skills and business acumen to thrive in the global economy.</p>
                <a href={"/"} className="btn">Learn More</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Health Sciences"/>
              </div>
              <div className="program-content">
                <h3>Health Sciences</h3>
                <p>Prepare for a rewarding career in healthcare with our comprehensive programs.</p>
                <a href={"/"} className="btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-text">Graduation Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-text">Global Partners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10:1</div>
            <div className="stat-text">Student-Teacher Ratio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">87%</div>
            <div className="stat-text">Employment Rate</div>
          </div>
        </div>
      </section>


      <section className="testimonials">
        <div className="testimonial-container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonial-container">
            <div className="testimonial">
              <p className="testimonial-text">"The AIGTE transformed my life. The skills I gained here have allowed me to make a real difference in my community. The faculty is supportive and the learning environment is incredible."</p>
              <div className="testimonial-author">- Maria Rodriguez, Engineering Graduate</div>
            </div>
          </div>
        </div>
      </section>

     

    </div>


  );
}

export default Dashboard;