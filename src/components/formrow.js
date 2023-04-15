import React from "react";

const Formrow = ({type,name,value,handlechange,labeltext}) => {
  return (
    <div className="form-row">
          
      <label htmlFor={labeltext} className='form-label' >
        {labeltext||name}
        <input
          type={type}
          name={name}
          value={value}
          onChange={handlechange}
          className="form-input"
        />
      </label>
    </div>
  );
};

export default Formrow;
