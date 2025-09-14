 import React from 'react'
 import './footer.css'
 
 const Footer = () => {
   return (
     <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>The AIGTE</h3>
            <p>Empowering students with skills to transform themselves, others, and our global communities.</p>
            <div className="social-icons">
              <a href={"/"}><i className="fab fa-facebook"></i></a>
              <a href={"/"}><i className="fab fa-twitter"></i></a>
              <a href={"/"}><i className="fab fa-instagram"></i></a>
              <a href={"/"}><i className="fab fa-linkedin"></i></a>
              <a href={"/"}><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href={"/"}>About Us</a></li>
              <li><a href={"/"}>Programs</a></li>
              <li><a href={"/"}>Admissions</a></li>
              <li><a href={"/"}>Campus Life</a></li>
              <li><a href={"/"}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Education Street, Knowledge City</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> info@theaigte.edu</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 The AIGTE. All rights reserved.</p>
        </div>
      </footer>
   )
 }
 
export default Footer
