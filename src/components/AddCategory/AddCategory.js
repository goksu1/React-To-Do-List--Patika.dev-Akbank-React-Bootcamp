import React, { useState } from "react";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy mt-6">
        Wow! You have amazing plans!
      </h1>
      <form className="mt-6">
        <div className="mb-2">
          <input
            placeholder="You can add category"
            className="justify-center tracking-wide px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>
      </form>
      <button
        className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        onClick={() => {
          props.handleCategories(inputValue);
        }}
      >
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
