import React from 'react';

const Form = (props) => {
  const { className, children, onSubmit } = props;
  const formClass = className ? className : '';

  return (
    <form onSubmit={onSubmit} className={formClass}>
      {children}
      <input type="submit" className="hidden" />
    </form>
  );
};

export default Form;
