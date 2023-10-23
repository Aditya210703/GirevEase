import React, { Component } from 'react';
import FormComponent from './Gform';
import './Gcard.css'
class CardComponent extends Component {
  render() {
    return (
      <div className="cardG">
        <div className="card-headerG">Grievance  Form</div>
        <div className="card-bodyG">
          <FormComponent />
        </div>
      </div>
    );
  }
}

export default CardComponent;
