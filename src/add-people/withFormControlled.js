import React, { Component } from "react";
import Form from "./Form";

const initialState = {
  asiento: null,
  edad: null,
  culto: null,
  nombres: "",
  lider: "",
  dia: "",
  hora: "",
};

const FormControlled = (Form, initialState) =>
  class FormWithControlled extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...initialState,
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

export default FormControlled(Form, initialState);
