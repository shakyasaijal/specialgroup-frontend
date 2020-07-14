import React, { useState } from 'react';
import { ourTeam } from 'constants/constants';
import Paginations from 'components/SearchView/Components/Pagination';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Team = () => {
  const teams = ourTeam();
  let perPage = 10;

  if (window.innerWidth <= 600) {
    perPage = 6;
  }

  const [pagination, setPagination] = useState({ currentPage: 1, teamPerPage: perPage });
  // Get Teams
  const indexOfLastProduct = pagination.currentPage * pagination.teamPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.teamPerPage;
  const currentTeams = teams.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (event, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  
  return (
    <div className="row team mt10">
      <div className="container center">
        <div className="about-title">Our Team</div>
        <div className="teams">
          {currentTeams.map((team, index) => (
            <div className="team-member" key={index}>
              <div className="img-container center">
                <img src={team.image} alt={team.fullName} />
              </div>
              <div className="fullName text-center">{team.fullName}</div>
              <div className="designation text-center">{team.designation}</div>
              <div className="social text-center">
                <ul>
                  <li>
                    <a href="/">
                      <FacebookIcon size="small" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <TwitterIcon size="small" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <LinkedInIcon size="small" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="pagine center mt10">
          <Paginations
            productsPerPage={pagination.teamPerPage}
            totalProducts={teams.length}
            currentPage={pagination.currentPage}
            handleChange={handleChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
