import React, { useState } from 'react';

const Marketing = () => {
  const [state, setState] = useState({ others: true, othersValue: '', placeholder: '' });

  const handleChange = (event) => {
    setState({ others: true, marketing: event.target.value, placeholder: '', othersValue: '' });
  };

  const handleToggle = () => {
    setState({ ...state, others: !state.others, placeholder: state.others ? 'Mention Here' : '' });
  };

  const handleInput = (event) => {
    setState({ ...state, othersValue: event.target.value });
  };
  const market = [
    {
      id: '1',
      name: 'Facebook',
    },
    {
      id: 2,
      name: 'Instagram',
    },
    {
      id: 3,
      name: 'Website',
    },
    {
      id: 4,
      name: 'Friends',
    },
  ];

  return (
    <div className="personal-profile">
      <div className="profile-form center">
        <div className="form">
          <form className="center">
            <div className="title">Where did you hear us from?</div>
            <div className="form-group">
              {market.map((data, index) => (
                <div className="content" key={`marketing${index}`}>
                  <input
                    type="radio"
                    name="marketing"
                    className="radio"
                    onChange={(e) => handleChange(e)}
                    value={data.id}
                  />
                  <span className="verticle-center">{data.name}</span>
                </div>
              ))}
              <div className="content">
                <input type="radio" name="marketing" className="radio" onChange={handleToggle} value="others" />
                <span className="verticle-center">Others</span>
              </div>
              <input
                type="text"
                className="others"
                value={state.othersValue}
                placeholder={state.placeholder}
                onChange={(e) => handleInput(e)}
                name="othersValue"
                disabled={state.others ? 'disabled' : ''}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
