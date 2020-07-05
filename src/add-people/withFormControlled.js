import React, { Component } from "react";
import Form from "./Form";

const FormControlled = (Form) =>
  class FormWithControlled extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props.values,
      };
    }

    handleSelect = ({ culto, dia, hora }) => {
      this.setState({ culto, dia, hora });
    };

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      const qr = document.querySelector("#qr").toDataURL();
      
      this.props.handleSubmit({ ...this.state, qr });

      // vaciamos el state
      this.setState(this.props.values);
    };

    render() {
      return (
        <>
          <Form
            {...this.props}
            values={this.state}
            _handleSubmit={this.handleSubmit}
            _handleChange={this.handleChange}
            _handleSelect={this.handleSelect}
          />
        </>
      );
    }
  };

export default FormControlled(Form);
