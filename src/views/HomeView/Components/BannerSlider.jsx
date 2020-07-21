import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import Skeleton from '@material-ui/lab/Skeleton';

import { bannerDataRequest } from 'actions/product';

import { getBanners, getCategories } from 'selectors/product';

import { getImageBasePath } from 'config/Config';
import { getImageUrl } from 'constants/constants';
import PATHS from 'routes';

const BannerSlider = (props) => {
  const [bannerSliderLoaded, setBannerSliderLoaded] = useState(false);
  const referer =
    window.innerWidth <= 800 ? getImageUrl('images/marketingSmall.png') : getImageUrl('images/marketingBig.png');

  useEffect(() => {
    props.bannerDataRequest(callbackSuccess);
    // eslint-disable-next-line
  }, []);

  const callbackSuccess = () => {
    setBannerSliderLoaded(true);
  };

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getFittedImage = (banner) => {
    let imageURL = banner.bigImage;

    if (window.innerWidth <= 800) {
      imageURL = banner.smallImage;
    }

    return imageURL;
  };

  const skeletons = () => {
    const categorySkeletons = [];

    for (let i = 0; i < 10; i++) {
      categorySkeletons.push(
        <div className="category" key={i}>
          <Skeleton variant="rect" height={15} />
        </div>
      );
    }

    return (
      <>
        <div className="categories hide-on-mobile">{categorySkeletons}</div>
        <div className="bs-slider">
          <div className="bs-img-container">
            <Skeleton variant="rect" height={334} />
          </div>
        </div>
      </>
    );
  };

  return bannerSliderLoaded ? (
    <div className="cat-bs-slider">
      <div className="categories hide-on-mobile">
        {props.categories.map((category, index) => (
          <Link to={`/category/${category.id}`} key={index}>
            <div className="category">{category.name}</div>
          </Link>
        ))}
      </div>
      <div className="bs-slider">
        <div className="bs-img-container">
          <Slider {...settings}>
            <Link to={PATHS.ABOUT_REFER} key="carousel01" className="bs-image">
              <img src={referer} alt="Refer" />
            </Link>
            {props.banners.map((slide, index) => (
              <Link to={`/wow/${slide.slug}`} key={`carousel${index}`} className="bs-image">
                <img src={getImageBasePath(getFittedImage(slide))} alt={slide.title} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  ) : (
    skeletons()
  );
};

const mapStateToProps = (state) => {
  return {
    banners: getBanners(state),
    categories: getCategories(state),
  };
};

const dispatchProps = { bannerDataRequest };

export default connect(mapStateToProps, dispatchProps)(BannerSlider);
