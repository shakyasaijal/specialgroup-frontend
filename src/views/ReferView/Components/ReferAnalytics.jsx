import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import VerticalAds from 'components/Advertisement/VerticalAds';

const ReferAnalytics = (props) => {
  const views = props.referralInfo.points;
  const registered = props.referralInfo.registeredUsers;
  const ordered = props.referralInfo.ordersByUsers;
  const doughnutData = {
    labels: ['Views', 'Registered', 'Ordered'],
    datasets: [
      {
        data: [views, registered, ordered],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="row refer">
      <div className="analytics-container mt10">
        <VerticalAds ads={props.data.smallAds} />
        <div className="analytics">
          <div className="numbers">
            <div className="view">
              <div className="label">Views</div>
              <div className="points">{views}</div>
            </div>
            <div className="view">
              <div className="label">Registered</div>
              <div className="points">{registered}</div>
            </div>
            <div className="view">
              <div className="label">Ordered</div>
              <div className="points">{ordered}</div>
            </div>
          </div>
          <div className="graph">
            <div className="sub-title">Refer Analytics</div>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAnalytics;
