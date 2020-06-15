import React from 'react';

const Form = (props) => {
  const { children, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      {children}
      <input type="submit" className="hidden" />
    </form>
  );
};

export default Form;
