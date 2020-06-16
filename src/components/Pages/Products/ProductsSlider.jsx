import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productsList } from '../../../constants/constants';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const ProductsSlider = () => {
  const products = productsList();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="product-slider-container mt30">
      <h2 className="medium-dark">Recommended for you</h2>
      <div className="product-slider">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="product-container" key={index}>
              <Paper className="padding">
                <Link to="/">
                  <div className="column-flex">
                    <div className="image-container">
                      <img src={product.img} alt={product.name} />
                    </div>
                    <h3 className="text-center">{product.name}</h3>
                    <small className="text-center">{product.price}</small>
                  </div>
                </Link>
              </Paper>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsSlider;
