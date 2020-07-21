import React, { useState } from 'react';
import { aboutData } from 'constants/constants';
import Team from './Components/Team';

const About = () => {
  const data = aboutData()[0];
  let videoHeight = '400';
  const [state, setState] = useState({ video: 'https://www.youtube.com/embed/Ht0IbFNbfSY' });

  if (window.innerWidth <= 600) {
    videoHeight = '100%';
  }

  const showVideo = (e) => {
    e.preventDefault();
    document.getElementsByClassName('overlay')[0].style.display = 'none';
    document.getElementsByClassName('video')[0].style.display = 'block';
    setState({ video: state.video + '?autoplay=1' });
  };

  return (
    <div className="row">
      <div className="about-container">
        <div className="top">
          <div className="video-section">
            <div className={data.videoBanner ? 'video center' : 'center'}>
              <iframe
                width="100%"
                id="aboutVideo"
                height={videoHeight}
                src={state.video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="0"
                title="about-us"
              ></iframe>
            </div>
            {data.videoBanner && (
              <div className="overlay" onClick={(e) => showVideo(e)}>
                <img src={data.videoBanner} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="bottom mt10">
          <div className="about-title">About Us</div>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
      <Team />
    </div>
  );
};

export default About;
