
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-section">
              <h5>Follow us on social media:</h5>
              <div className="social-icons">
                <Link to="https://www.twitter.com" className="social-icon"><i className="fab fa-twitter"></i></Link>
                <Link to="https://www.facebook.com" className="social-icon"><i className="fab fa-facebook"></i></Link>
                <Link to="https://www.instagram.com" className="social-icon"><i className="fab fa-instagram"></i></Link>
                <Link to="https://www.linkedin.com" className="social-icon"><i className="fab fa-linkedin"></i></Link>
                <Link to="https://www.youtube.com" className="social-icon"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-section">
              <h5>Links:</h5>
              <ul className="useful-links">
                <li><Link to="#">Therms and conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">FAQ</Link></li>
                <li><Link to="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-section">
              <h5>Nested Living</h5>
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
