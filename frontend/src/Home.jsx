import React, { useEffect } from "react";
// import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/SignUp";
import "./Home.css";
import doc from "../src/assets/images/doc.png"
import AboutUs from "./About_us/AboutUs";
import Prog from "./Programs/Programs";
import Nav from "./Basics/Navbar"
// import SP from "./Profile/Student_Profile";s
import Foot from "./Basics/footer";
import { ToastContainer } from 'react-toastify';
import StudentProfile from "./Profile/Student_Profile";

import axios from "axios";
import FacultyProfile from "./Profile/Faculty_profile";
// import PortalPage from "./Auth/Choose";




function App() {

  useEffect(() => {
    axios.post("http://localhost:8081/")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })


  useEffect(() => {
    const statNumbers = document.querySelectorAll(".stat-number");
    const statsSection = document.querySelector(".stats");

    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statNumbers.forEach((stat) => {
            const target = +stat.innerText.replace("%", "").replace("+", "");
            let current = 0;
            const increment = target / 50;

            const updateNumber = () => {
              if (current < target) {
                current += increment;
                stat.innerText = stat.innerText.includes("%")
                  ? Math.round(current) + "%"
                  : stat.innerText.includes(":")
                    ? stat.innerText
                    : Math.round(current) + "+";
                setTimeout(updateNumber, 30);
              } else {
                stat.innerText = stat.innerText.includes("%")
                  ? target + "%"
                  : stat.innerText.includes(":")
                    ? stat.innerText
                    : target + "+";
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
    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  return (<>
    {/* <h1>Hello world</h1>
    {comeData.map((data) =>

    (<div>

      <h5>{data.CountryCode}</h5>
      <br></br>
      <h5>{data.District}</h5>
    </div>
    ))} */}
    <Routes>
      {/* ====== HOME PAGE ====== */}
      <Route
        path="/"
        element={
          <>
            {/* ====== HEADER ====== */}
            <Nav data={1}/>
            {/* ====== HERO SECTION ====== */}
            <section className="hero">
              <div className="hero-content">
                <h1>Transforming Students, Transforming Communities</h1>
                <p>
                  We provide students with the skills they need to transform
                  themselves, others, and our global communities.
                </p>
                <a href="/" className="btn">Explore Programs</a>
              </div>
            </section>

            {/* ====== ACADEMICS ====== */}
            <section className="academics">
              <div className="container1">
                <h2 className="section-title">Our Academics</h2>
                <p className="section-subtitle">
                  Discover our diverse range of academic programs designed to empower
                  students with the knowledge and skills needed for success in a rapidly changing world.
                </p>

                <div className="programs">
                  <div className="program-card">
                    <div className="program-img">
                      <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1170&q=80"
                        alt="Engineering"
                      />
                    </div>
                    <div className="program-content">
                      <h3>Engineering</h3>
                      <p>
                        Cutting-edge programs that prepare students for technological
                        innovation and problem-solving.
                      </p>
                      <a href="/" className="btn">Learn More</a>
                    </div>
                  </div>

                  <div className="program-card">
                    <div className="program-img">
                      <img
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1170&q=80"
                        alt="Business"
                      />
                    </div>
                    <div className="program-content">
                      <h3>Business Studies</h3>
                      <p>
                        Develop leadership skills and business acumen to thrive in the global economy.
                      </p>
                      <a href="/" className="btn">Learn More</a>
                    </div>
                  </div>

                  <div className="program-card">
                    <div className="program-img">
                      <img
                        src={doc}
                        alt="Health Sciences"
                      />
                    </div>
                    <div className="program-content">
                      <h3>Health Sciences</h3>
                      <p>
                        Prepare for a rewarding career in healthcare with our comprehensive programs.
                      </p>
                      <a href="/" className="btn">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====== STATS ====== */}
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

            {/* ====== TESTIMONIALS ====== */}
            <section className="testimonials">

                <h2 className="section-title">What Our Students Say</h2>
                <div className="testimonial-container">
                  <div className="testimonial">
                    <p className="testimonial-text">
                      "The AIGTE transformed my life. The skills I gained here have
                      allowed me to make a real difference in my community. The
                      faculty is supportive and the learning environment is
                      incredible."
                    </p>
                    <div className="testimonial-author">
                      - Maria Rodriguez, Engineering Graduate
                    </div>
                  </div>
                </div>

            </section>
            <Foot/>
            {/* <SP></SP> */}

            <ToastContainer/>
          </>
        }
      />

      {/* ====== AUTH PAGES ====== */}
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/About_us" element={<AboutUs/>}/>
      <Route path="/Programs" element={<Prog/>}/>
      <Route path="/Student_profile" element={<StudentProfile/>}/>
      <Route path="/Faculty_profile" element={<FacultyProfile/>}/>

    </Routes>
  </>

    

  );
}

export default App;
