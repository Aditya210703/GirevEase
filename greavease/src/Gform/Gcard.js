import React, { Component } from 'react';
import FormComponent from './Gform';
import './Gcard.css'
class CardComponent extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Grievance  Form</div>
        <div className="card-body">
          <FormComponent />
        </div>
      </div>
    );
  }
}

export default CardComponent;
