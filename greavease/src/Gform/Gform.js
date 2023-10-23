import React, { Component } from "react";
import "./Gform.css";

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      street: "",
      locality: "",
      city: "",
      state: "",
      description: "",
      selectedOption: "Choose The Department", // Default selected option
      countryCode: "+91",
      phoneNumber: "",
      image: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
    // You can add code to handle form submission here
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="name-container">
            <div className="input-container">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                Last Name:
                <input
                  className="inp"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
          </div>

          <br />

          <label>
            Street:
            <input
              type="text"
              name="street"
              value={this.state.street}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            Locality:
            <input
              type="text"
              name="locality"
              value={this.state.locality}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            Describe Your Case:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Please describe your case..."
            />
          </label>
          <br />

          <label>
            Choose an Option:
            <select
              name="selectedOption"
              placeholder="Choose The Department"
              value={this.state.selectedOption}
              onChange={this.handleSelectChange}
            >
              <option value="Miscellaneous">Choose The Department</option>
              <option value="Water Works">Water Works</option>
              <option value="Electricity">Electricity</option>
              <option value="RoadWays">RoadWays</option>
              <option value="Law-Enforcement">Law-Enforcement</option>
              <option value="Judicial">Judicial</option>
              <option value="Miscellaneous">Miscellaneous</option>
              
            </select>
          </label>
          <br />

          <label htmlFor="phoneNumber">Phone Number:</label>
            <div className="phone-input-container">
              <input
                type="tel"
                id="countryCode"
                name="countryCode"
                value={this.state.countryCode}
                onChange={this.handleInputChange}
                placeholder="+91"
                className="country-code-input"
              />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                placeholder="Enter your mobile number"
                className="phone-input"
              />
            </div>
          

          <br />

          <label>
            Upload an Image:
            <div className="file-upload-container">
              <input
                placeholder="Enter the supporting material"
                type="file"
                name="image"
                onChange={this.handleImageChange}
              />
            </div>
          </label>

          <br />

          <div className="button-container">
            <button type="submit" className="Gbutton" >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormComponent;
