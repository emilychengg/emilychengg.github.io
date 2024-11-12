import React, { Component } from "react";
import "./GalleryHome.css";

class Gallery extends Component {
  componentDidMount() {
    document.title = "Emily Cheng > Gallery";
  }

  render() {
    const images = [
      { src: process.env.PUBLIC_URL + '/img/boston/boston1.JPG', alt: 'Boston Skyline', link: '/boston', label: 'Boston' },
      { src: process.env.PUBLIC_URL + '/img/mit/mit1.JPG', alt: 'MIT Building 1', link: '/gallery', label: 'MIT' },
      { src: process.env.PUBLIC_URL + '/img/korea/korea1.JPG', alt: 'Gamcheon Culture Village', link: '/korea', label: 'Korea' },
      { src: process.env.PUBLIC_URL + '/img/china/china1.JPG', alt: 'Shanghai Skyline', link: '/china', label: 'China' },
      // Add more images as needed
    ];

    return (
      <div id="shell">
        <p className="gallery-text">
          I primarily document my life through my iPhone 13 Pro Max and FujiFilm X100V. This gallery is categorized by location or by event. 
        </p>
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <div className="text">
                  <a href={image.link}>{image.label}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="gallery-text">
          <br></br>
          Last updated September 2024.
        </p>
      </div>
    );
  }
}

export default Gallery;