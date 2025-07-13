// src/Home.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftMenu from './components/LeftMenu';
import NewsList from './components/NewsList';

const Home = () => {
  return (
    <div className="main">
      <div className="middle-container">
        {/* Left Sidebar */}
        <div className="middle-left">
          <LeftMenu />
          <NewsList />
        </div>

        {/* Right Content */}
        <div className="middle-right">
          <div className="banner">
            <img src="images/banners.png" alt="Banner" className="banner-img" />
          </div>

          <div className="course-text">Courses</div>

          <div className="course-container">
            <div className="divcourseflex">
              {/* Courses Left */}
              <div className="courseleft">
                <div className="icon">
                  <img src="images/courses/php.png" alt="PHP" title="PHP" />
                  <h3>PHP (Website Development)</h3>
                </div>
                <div className="icon adv-php">
                  <img src="images/courses/adv-php.png" alt="Advance PHP" title="Advance PHP" />
                  <h3>Advance PHP</h3>
                </div>
                <div className="icon py">
                  <img src="images/courses/python.png" alt="Python" title="Python" />
                  <h3>Python</h3>
                </div>
                <div className="icon android">
                  <img src="images/courses/Android.png" alt="Android" title="Android" />
                  <h3>Android App Development</h3>
                </div>
              </div>

              {/* Courses Right */}
              <div className="courseright">
                <div className="icon digi">
                  <img src="images/courses/digi-marketing.png" alt="Digital Marketing" />
                  <h3>Digital Marketing</h3>
                </div>
                <div className="icon graphics">
                  <img src="images/courses/graphic-design.png" alt="Graphic Design" />
                  <h3>Graphic Designing</h3>
                </div>
                <div className="icon seo">
                  <img src="images/courses/seo.png" alt="SEO" />
                  <h3>Search Engine Optimization</h3>
                </div>
                <div className="icon wordpress">
                  <img src="images/courses/Wordpress.png" alt="Wordpress" />
                  <h3>Wordpress</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                {/* How We Work */}
          <div className="workheading">How We Work</div>
          <div className="work-container">
            <div className="workimages1">
              <img src="images/how/HOW-WE-WORK1.png" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40, width: '100%', height: '100%', opacity: 0.5 }} />
              <div className="img-text">We Listen <br /> to You</div>
            </div>
            <div className="workimages2">
              <img src="images/how/HOW-WE-WORK2.png" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40, width: '100%', height: '100%', opacity: 0.5 }} />
              <div className="img-text">We Plan <br /> Your Work</div>
            </div>
            <div className="workimages3">
              <img src="images/how/HOW-WE-WORK3.png" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40, width: '100%', height: '100%', opacity: 0.5 }} />
              <div className="img-text">We Design <br /> Creativity</div>
            </div>
            <div className="workimages4">
              <img src="images/how/HOW-WE-WORK4.png" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40, width: '100%', height: '100%', opacity: 0.5 }} />
              <div className="img-text">We Execute <br /> Publish & Maintain</div>
            </div>
          </div>
    </div>
  );
};

export default Home;
