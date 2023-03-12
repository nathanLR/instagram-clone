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
};

const Input = ({ placeholder, label, type, id, name }: InputPropType) => {
  const [value, setValue] = useState<string>("");
  const handleChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>): void => {
    setValue(currentTarget.value);
  };
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
          handleChange(e);
        }}
        id={id}
        name={name}
      />
    </div>
  );
};

export default Input;
