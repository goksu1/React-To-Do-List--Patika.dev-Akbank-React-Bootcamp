import React from "react";

const Filter = (props) => {
  function handleChange(event) {
    props.handleFilter(event.target.value);
  
  }

  return (
    <div>
      <select
        className="px-4 py-2 mt-2 mx-6 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleChange}
      >
        <option value="0">All Categories </option>
        {props.categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <select
        className="px-4 py-2 mt-2 mx-6 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleChange}
        
      >
        <option value="0">All Status </option>
        {props.status.map((statu) => {
          return (
            <option key={statu.id} value={statu.id}>
              {statu.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
