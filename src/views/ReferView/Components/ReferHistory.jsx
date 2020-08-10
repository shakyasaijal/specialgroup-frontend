import React from 'react';
import MaterialTable from 'material-table';

const ReferHistory = (props) => {
  const state = {
    columns: [
      { title: 'Redeem Date', field: 'date' },
      { title: 'Status', field: 'status' },
      { title: 'Total Points', field: 'totalPoints', type: 'numeric' },
    ],
    data: props.data,
  };

  const isMobile = window.innerWidth <= 800 ? '' : 'Your Redeem History';

  return (
    <div className="row redeem-history-container">
      {isMobile === '' && <div className="page-title">Your Redeem History</div>}
      <div className="redeem-history mt10">
        <div className="table-container">
          <MaterialTable title={isMobile} columns={state.columns} data={state.data} />
        </div>
      </div>
    </div>
  );
};

export default ReferHistory;
