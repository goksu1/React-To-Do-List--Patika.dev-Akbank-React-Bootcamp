import React, { useState } from "react";

const AddStatus = (props) => {
  const [inputStatus, setInputStatus] = useState("");
  return (
    <div>
      <form className="mt-6">
        <div className="mb-2">
          <input
            placeholder="You can add statu"
            className="px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(event) => {
              setInputStatus(event.target.value);
            }}
          />
        </div>
      </form>
      <button
        className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        onClick={() => {
          props.handleStatus(inputStatus);
        }}
      >
        Add Status
      </button>
    </div>
  );
};

export default AddStatus;
