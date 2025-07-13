import LeftMenu from './components/LeftMenu';
import NewsList from './components/NewsList';
import galleryImages from './data/galleryData';

const Gallary = () => {
  return (
    <div className="main">

      <div className="middle-containercourses">
        <div className="middle-left">
          <LeftMenu />
          <NewsList />
        </div>

        <div className="middle-right">
          <div className="page-status">
            <h1
              style={{
                height: '30px',
                width: '300px',
                fontFamily: 'Arial',
                color: 'black',
                fontSize: '30px',
                paddingLeft: '15px',
                fontWeight: 'bold'
              }}
            >
              Gallary
            </h1>
            <h2
              style={{
                height: '30px',
                width: '200px',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                color: 'black',
                fontSize: '24px',
                wordSpacing: '10px',
                textAlign: 'right'
              }}
            >
              <a href="/" style={{ textDecoration: 'none', color: 'rgb(0,168,236)' }}>
                <i>Home</i>
              </a>
              /Gallary
            </h2>
          </div>

          <div className="cs1">
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }, (_, rowIndex) => (
              <div className="cs2" key={rowIndex}>
                {galleryImages
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map(({ src, title }, index) => (
                    <div className="cs" key={index}>
                      <div className="csimage">
                        <img src={src} alt={title} height="100%" width="100%" />
                      </div>
                      <div className="cstext">
                        <h3>{title}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Gallary;
