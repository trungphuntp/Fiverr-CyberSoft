"use client";
import React from "react";
import { Input } from "antd";
const InputCustom = ({ value, type, placeholder,  id,onChange }) => {
  return (  
    <div>
     
      <Input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      ></Input>
    </div>
  );
};

export default InputCustom;
