import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import VerticalAds from 'components/Advertisement/VerticalAds';

const ReferAnalytics = (props) => {
  const currentData = [
    {
      views: props.data.views,
      registered: props.data.registered,
      ordered: props.data.ordered,
    },
  ];
  const data = {
    labels: ['Views', 'Registered', 'Ordered'],
    datasets: [
      {
        data: [currentData[0].views, currentData[0].registered, currentData[0].ordered],
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
              <div className="points">{currentData[0].views}</div>
            </div>
            <div className="view">
              <div className="label">Registered</div>
              <div className="points">{currentData[0].registered}</div>
            </div>
            <div className="view">
              <div className="label">Ordered</div>
              <div className="points">{currentData[0].ordered}</div>
            </div>
          </div>
          <div className="graph">
            <div className="sub-title">Refer Analytics</div>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAnalytics;
