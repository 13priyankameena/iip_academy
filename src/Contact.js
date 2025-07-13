import contactData from "./data/contactData";
import LeftMenu from "./components/LeftMenu";
import NewsList from "./components/NewsList";

const Contact = () => {
  return (
      <div className="middle-container">
        <div className="middle-left">
          <LeftMenu />
          <NewsList />
        </div>

        <div className="middle-right">
          <div className="page-status">
            <h1 className="page-title">Contact:</h1>
            <h2 className="breadcrumb">
              <a href="/" style={{ textDecorationLine: 'none', color: 'rgb(0,168,236)' }}><i>Home</i></a>/Contact
            </h2>
          </div>

          <div className="contact-content">
            <div className="contact-row">
              <div className="contact-row-left">
                <img src={contactData.contactIcons.phone} alt="phone" />
                <p><b>Phone:</b> {contactData.phone.join(", ")}</p>
                <p>
                  <b>Email ID:</b>
                  <a href={`mailto:${contactData.email}`} className="contact-link">
                    {contactData.email}
                  </a>
                </p>
                <p>
                  <b>Website:</b>
                  <a href={`http://${contactData.website}`} className="contact-link" target="_blank" rel="noreferrer">
                    {contactData.website}
                  </a>
                </p>
              </div>
              <div className="contact-row-right">
                <img src={contactData.contactIcons.address} alt="address" />
                <p>{contactData.address}</p>
              </div>
            </div>

            <h1 className="map-heading">Find Us On Map</h1>
            <div className="contact-map">
              <img src={contactData.mapImage} alt="Map" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
