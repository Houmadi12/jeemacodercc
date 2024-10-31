import React from 'react';

class Button extends React.Component {
  render() {
    const { param, onclick, titre } = this.props;

    return (
      <button 
        type="button" 
        className={param} 
        onClick={onclick}
      >
        {titre}
      </button>
    );
  }
}

export default Button;