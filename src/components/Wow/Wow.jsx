import React, { useEffect, useState } from 'react';
import { wowData } from 'constants/constants';
import WowPaginations from './WowPaginations.jsx';

const Wow = () => {
  const [state, setState] = useState({ dataLoaded: false, data: [], isLoggedIn: false, bannerImage: '', title: '' });

  const getData = wowData();

  useEffect(() => {
    const { title, small, big } = getData[0];

    setState({
      ...state,
      dataLoaded: true,
      data: getData[0].subCategories,
      bannerImage: window.innerWidth <= 800 ? small : big,
      title: title,
    });
  }, []);

  return (
    <div className="row noTop wowjsx center">
      <div className="banner-image center">
        <img src={`/${state.bannerImage}`} alt="" />
      </div>
      <div className="title">
        <h3>{state.title}</h3>
      </div>
      <div className="main-container search-results">
        {state.data &&
          state.data.map((subCat, index) => (
            <div className="sub-cat" key={index}>
              <div className="sub-title">{subCat.name}</div>
              <div className="products results mt10">
                <WowPaginations products={subCat.products} isLoggedIn={state.isLoggedIn} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wow;
