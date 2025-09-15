import { useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    // Or localStorage.clear() if you want to clear everything
    navigate("/"); // redirect to home
    window.location.reload(); // ✅ force navbar re-render
  };

  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          The <span>AIGTE</span>
        </div>

        <nav>
          <ul>
            <div className="firdiv">
              <li><a href="/">Home</a></li>
              <li><a href="/Programs">Programs</a></li>
              <li><a href="/About_us">About Us</a></li>

              {/* Show profile link only if logged in */}
              {isLoggedIn && (
                <li><a href="/student_profile">Profile</a></li>
              )}
            </div>

            {/* Conditional rendering for auth buttons */}
            {isLoggedIn ? (
              <div className="containerauth">
                
                  <button 
                    onClick={handleLogout} 
                  >
                    Logout
                  </button>
                  
              </div>
            ) : (
              <div className="containerauth">
                <li><a href="/Login">Login</a></li>
                <li><a href="/Signup">Sign Up</a></li>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
