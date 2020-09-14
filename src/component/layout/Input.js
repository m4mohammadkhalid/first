import React from 'react'

const Input = (props) => {
 const {placeholder="Enter PlaceHolder",name,value,onChange,type="text"}=props;
    return (
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="form-control"
        onChange={onChange}
        />
    );
}

export default Input
