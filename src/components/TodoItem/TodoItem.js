import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TodoItem = (props) => {
  const handleStatusChange = (event) => {
    props.onStatusChange(props.idx, {
      color: event.target.value,
      text: event.target.text,
    });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className="py-0 my-2 grid grid-cols-5 gap-4 "
      key={props.idx}
      style={{ backgroundColor: props.item.status.color }}
      onChange={handleStatusChange}
    >
      <div className="text-bold col-span-2">
        <p>ToDo: {props.item.text}</p>
        <p> Category:{props.item.category} </p>
        <p> Date: {props.item.date}</p>

        <p> Statu: {props.item.status.color}</p>
      </div>

      <div className="flex w-[100px] h-[40px] opacity-80 text-indigo-700  my-6 rounded-md bg-[#ECF1F8] py-2 justify-center mb-3">
        <button
          type="button"
          onClick={() => {
            openModal();
          }}
        >
          Edit
        </button>
      </div>

      <div className="flex w-[100px] h-[60px] opacity-80 text-indigo-700  my-4 rounded-md bg-[#ECF1F8] py-2 justify-center mb-3">
        <button onClick={() => props.handleDeleteClick(props.item.id)}>
          Delete Categories
        </button>
      </div>
      <div className="flex w-[100px] h-[60px] opacity-80 text-indigo-700  my-4 rounded-md bg-[#ECF1F8] py-2 justify-center mb-3">
        <button onClick={() => props.handleDeleteClick(props.item.id)}>
          Delete All Plans
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button type="button" onClick={closeModal}>
            x
          </button>
        </div>
        <div
          id="extralarge-modal"
          tabIndex="-1"
          className="grid grid-cols-1 h-screen w-full lg:grid-cols-2 md:grid-cols-1 justify-items-center overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 h-modal lg:h-full md:inset-0"
        >
          <div className="ml-2 my-10 flex flex-col">
            <div className="px-4 py-2 mt-2 mx-4 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <select onChange={handleStatusChange}>
                <option value="0">All Categories </option>
                {props.categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="px-4 py-2 mt-2 mx-4 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <select onChange={handleStatusChange}>
                <option value="0">All Status </option>
                {props.status.map((statu) => {
                  return (
                    <option key={statu.id} value={statu.id}>
                      {statu.name}
                    </option>
                  );
                })}
              </select>{" "}
            </div>
          </div>
        </div>
        <button
          className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          type="button"
          onClick={closeModal}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};
export default TodoItem;
