import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <>
      <div className="top-container">
        <div className="left-cont">
          <div className="top-left-img">
            <img src="images/web.png" alt="web logo" height="22" width="23" title="web-logo" />
          </div>
          <div className="top-left-text">
            <a href="https://www.iipacademy.com" className="toptext">www.iipacademy.com</a>
          </div>
        </div>
        <div className="right-cont">
          <div className="top-right-img">
            <img src="images/INFO.png" height="17" width="21" alt="info" />
          </div>
          <div className="top-right-text">
            <a href="mailto:info@iipacademy.com" className="toptext">info@iipacademy.com</a>
          </div>
        </div>
      </div>

      <div className="menu-container">
        <div className="img-logo">
          <Link to="/"><img src="images/logo.png" height="125" width="165" alt="logo" /></Link>
        </div>
        <div style={{ height: 'auto', width: '40px' }}></div>
        <div className="menu-bar">
          <div className="menu"><Link to="/" className="menuanchor">Home</Link></div>
          <div className="menu"><Link to="/about" className="menuanchor">AboutUs</Link></div>
          <div className="menu"><Link to="/courses" className="menuanchor">Courses</Link></div>
          <div className="menu"><Link to="/gallary" className="menuanchor">Gallary</Link></div>
          <div className="menu"><Link to="/enquiry" className="menuanchor">Enquiry</Link></div>
          <div className="menu"><Link to="/contact" className="menuanchor">Contact Us</Link></div>
        </div>
      </div>
    </>
  );
}

export default Header;
