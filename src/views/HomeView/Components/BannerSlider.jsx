import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesForChips, carouselImages } from 'constants/constants';
import Slider from 'react-slick';
import Skeleton from '@material-ui/lab/Skeleton';

const BannerSlider = () => {
  const [state, setState] = useState({ slidersLoaded: false, categoryLoaded: false, slides: [] });
  const skeletons = [];

  const cat = categoriesForChips();

  for (let i = 0; i < 10; i++) {
    skeletons.push(
      <div className="category">
        <Skeleton variant="rect" height={15} />
      </div>
    );
  }

  const sliders = carouselImages();
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const load = () => {
    for (let i = 0; i < sliders.length; i++) {
      if (window.innerWidth <= 800) {
        state.slides.push({
          image: sliders[i].small,
          link: `marts/${sliders[i].categoryId}`,
        });
      } else {
        state.slides.push({
          image: sliders[i].big,
          link: `marts/${sliders[i].categoryId}`,
        });
      }
    }
  };

  React.useEffect(() => {
    if (state.slides && cat) {
      setInterval(() => {
        setState({ ...state, categoryLoaded: true, slidersLoaded: true });
      }, 2500);
    }
    load();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cat-bs-slider">
      <div className="categories hide-on-mobile">
        {state.categoryLoaded ? (
          cat.map((category, index) => (
            <Link to={`/category/${category.id}`} key={index}>
              <div className="category">{category.name}</div>
            </Link>
          ))
        ) : (
          <>{skeletons}</>
        )}
      </div>
      <div className="bs-slider">
        <div className="bs-img-container">
          <Slider {...settings}>
            {state.slidersLoaded ? (
              state.slides.map((slide, index) => (
                <Link to={slide.link} key={`carousel${index}`} className="bs-image">
                  <img src={slide.image} alt={index} />
                </Link>
              ))
            ) : (
              <Skeleton variant="rect" height={334} />
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
