import React from "react";

import "./form-input.component.scss";

const FormInput = ({ id, handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      id={id}
      {...otherProps}
    ></input>
    {label ? (
      <label 
        htmlFor={id}
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
          {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
