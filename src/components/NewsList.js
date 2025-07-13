// import React from 'react';

const newsItems = [
  'ipsum dolor sit amet,',
  'ipsum dolor sit amet,',
  'ipsum dolor sit amet,',
  'ipsum dolor sit amet,',
  'ipsum dolor sit amet,',
];

const NewsList = () => {
  return (
    <div className="newsdiv">
      <div className="news">News</div>
      <div className="news-container">
        <ul className="news-list" type="none">
          {newsItems.map((item, index) => (
            <li className="list-item" key={index}>
              <img src="images/dot.jpg" width="12px" height="11px" className="imagedot" alt="dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
