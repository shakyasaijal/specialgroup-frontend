import React from 'react';
import { Link } from 'react-router-dom';
import { subCategories } from 'constants/constants';
import Skeleton from '@material-ui/lab/Skeleton';

const RandomSubCat = () => {
  // Sub categories having products will be displayed
  const data = subCategories();
  const [state, setState] = React.useState({ dataLoaded: false });
  const skeletons = [];
  const dataSize = window.innerWidth <= 800 ? 8 : 16;

  for (let i = 0; i < 16; i++) {
    skeletons.push(
      <div key={i} className="team-member">
        <Skeleton variant="rect" height={100} />
      </div>
    );
  }

  React.useEffect(() => {
    setInterval(() => {
      setState({ dataLoaded: true });
    }, 3000);
  }, []);

  return (
    <div className="row rsc">
      <div className="container center">
        <div className="title landing-title">Essentials</div>
        <div className="teams" data-size={dataSize}>
          {state.dataLoaded ? (
            data.slice(0, dataSize).map((sub, index) => (
              <Link to="/" className="team-member" key={index}>
                <div className="img-container center">
                  <img src={sub.image} alt={sub.name} />
                </div>
                <div className="fullName text-center">{sub.name}</div>
              </Link>
            ))
          ) : (
            <>{skeletons}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomSubCat;
