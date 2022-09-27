import React, { useEffect, useState } from "react";
import "./AddTodoForm.css";

const AddTodoForm = (props) => {
  const [value, setValue] = useState({
    id: props.categories[0]?.id,
    text: props.defaultValue,
    category: props.categories[0]?.name,
  }); //[değer , setter]

  const handleInputChange = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSelectChange = (event) => {
    setValue((prev) => ({
      ...prev,
      id: event.target.value,
      category:
        event.nativeEvent.target[event.nativeEvent.target.selectedIndex]
          .textContent,
    }));
  };

  useEffect(() => {
    // initial değeri verdik
    setValue((prev) => ({
      ...prev,
      category: props.categories[0]?.name,
      id: props.categories[0]?.id,
    }));
  }, [props.categories]);

  const [statuValue, setStatuValue] = useState({
    id: props.status[0]?.id,
    name: props.status[0]?.name,
  });
  const handleStatuChange = (event) => {
    setStatuValue((prev) => ({
      ...prev,
      id: event.target.value,
      name: event.nativeEvent.target[event.nativeEvent.target.selectedIndex]
        .textContent,
    }));
  };

  useEffect(() => {
    // initial değeri verdik
    setStatuValue((prev) => ({
      ...prev,
      name: props.status[0]?.name,
      id: props.status[0]?.id,
    }));
  }, [props.status]);

  const handleClick = () => {
    props.onAddTodo({ ...value, statu: statuValue });
  };

  return (
    <div>
      <input
        className=" px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
        name="text"
        onChange={handleInputChange}
        type="text"
        value={value.text}
        placeholder="You can add plan"
      />
      <select
        className="px-4 py-2 mt-2 mx-6 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
        name="category"
        onChange={handleSelectChange}
      >
        {props.categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        className="px-4 py-2 mt-2 mx-4 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
        name="statu"
        onChange={handleStatuChange}
      >
        {props.status.map((statu) => (
          <option key={statu.id} value={statu.id}>
            {statu.name}
          </option>
        ))}
      </select>

      <button
        className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        onClick={handleClick}
      >
        Ekle
      </button>
    </div>
  );
};

export default AddTodoForm;
