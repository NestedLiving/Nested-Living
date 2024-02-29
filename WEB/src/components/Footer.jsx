
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-section">
              <h5>Seguici sui social:</h5>
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
              <h5>Link utili:</h5>
              <ul className="useful-links">
                <li><a href="#!">Termini e condizioni</a></li>
                <li><a href="#!">Privacy Policy</a></li>
                <li><a href="#!">Domande frequenti</a></li>
                <li><a href="#!">Contatti</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-section">
              <h5>Nested Living</h5>
              <p>© {new Date().getFullYear()} Tutti i diritti riservati.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
