import '../App.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-topcontainer">
        <div className="footerquicklink">
          <h2>QuickLinks</h2>
          <ul>
            {['Home', 'About Us', 'Courses', 'Gallary', 'Enquiry', 'Contact Us'].map((item, i) => {
              const routeMap = {
                'Home': '/',
                'About Us': '/about',
                'Contact Us': '/contact',
              };
              const path = routeMap[item] || `/${item.toLowerCase().replace(/ /g, '')}`;

              return (
                <li key={i}>
                  <a href={path} className="footerquicklinkanchor">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footertraining">
          <div className="train-content">
            <h2 className='cont-details'>Training</h2>
            <ul>
              {['PHP(Web Development)', 'Advance PHP', 'Python', 'Android APP Development', 'Digital Marketing'].map((item, i) => (
                <li key={i}><a href="/" className="footerquicklinkanchor">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="train-content2">
            <ul>
              {['Graphic Design', 'Search Engine Optimization', 'Wordpress', 'Web design', 'Java'].map((item, i) => (
                <li key={i}><a href="/" className="footerquicklinkanchor">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-contact-container">
          <h2>Contact Info:</h2>
          <p className='footer-paragraph'>Call At: 9269698122</p>
          <p className='footer-paragraph'>1st floor, Laxmi Tower,</p>
          <p className='footer-paragraph'>Bhaskar Circle,</p>
          <p className='footer-paragraph'>Ratanda, Raj - Jodhpur(342001)</p>
          {['instagram', 'twitter', 'facebook', 'linked-in'].map((platform, i) => (
            <a key={i} href={`#`}>
              <img src={`images/${platform}.png`} alt={platform} />
            </a>
          ))}
        </div>
      </div>
      <div className="copy-right">Copyright © 2019</div>
    </div>
  );
}

export default Footer;
