import { useState } from "react";
import InputClasses from "./input.module.scss";
type MarginType = {
  mt?: "auto" | number;
  mr?: "auto" | number;
  mb?: "auto" | number;
  ml?: "auto" | number;
};

type InputPropType = {
  placeholder: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, label, type, id, name, value, onChange }: InputPropType) => {
  return (
    <div className={InputClasses.inputContainer}>
      <label htmlFor={id} style={{ display: "none" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        id={id}
        name={name}
      />
    </div>
  );
};

export default Input;
