import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import AddCategory from "./components/AddCategory/AddCategory";
import Filter from "./components/Filter/Filter";
import AddStatus from "./components/AddStatus/AddStatus";
import randomColor from "randomcolor";

function App() {
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);
  function handleCategories(categoryName) {
    setCategories((prev) => {
      return [
        ...prev,
        { name: categoryName, id: Math.random().toString(), status: [] },
      ];
    });
  }
  const [filter, setFilter] = useState({ categoryId:"0", statuId:"0"});
  function handleFilter(key, value) {
    setFilter((prev) => {
      const obj={}
      obj[key]=value
      return { ...prev, ...obj};
    });
  }

  const [statusList, setStatusList] = useState([]);

  const handleAddTodo = ({ text, category, id, statu }) => {
    setList((prev) => [
      ...prev,
      {
        id,
        text,
        category,
        statu,
        date: new Date().toLocaleDateString(),
        status: { id: Math.random().toString(), color: randomColor() },
      },
    ]);
  };
  const [status, setStatus] = useState([]);
  function handleStatus(statuName) {
    setStatus((prev) => {
      return [
        ...prev,
        { name: statuName, id: Math.random().toString(), text: "" },
      ];
    });
  }
  const handleStatusChange = (idx, status) => {
    setStatusList((prev) =>
      prev.map((item, itemIdx) => ({
        ...item,
        status: itemIdx === idx ? status : item.status,
      }))
    );
  };console.log('list', list)
  console.log('filter', filter)
  const filterList =
    (filter.categoryId === "0" && filter.statuId === "0")
      ? list
      : list.filter((item) => {
          return filter.categoryId === item.id || filter.statuId === item.statu.id; // status için koşulu buraya ekle.  ve statusun idsi bu mu diye bak
        });

  function handleDeleteClick(id) {
    let removeItem = [...list].filter((category) => category.id !== id);
    setList(removeItem);
  }

  function editListItem(id, category, statu, categoryId)  {
    const cloneList= [...list];
    const foundElement= cloneList.find((element) => {
      return(
        
        element.statu.id === id
      )
    })
    if (foundElement) {
    foundElement.category = category
    foundElement.statu.name = statu.name
    foundElement.statu.id = statu.id
    foundElement.id = categoryId
    setList(cloneList)
  }
  }
  return (
    <div className="container mx-auto mt-6">
      <div className="App">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <iframe
            title="iframetitle"
            src="https://giphy.com/embed/Y2y9IpjbPDakvK6LrR"
            width="1100"
            height="250"
            position="relative"
            frameBorder="0"
            className="giphy-embed mx-20 justify-center"
            allowFullScreen
          ></iframe>
          <AddCategory handleCategories={handleCategories} />
          <AddStatus handleStatus={handleStatus} />

          <AddTodoForm
            categories={categories}
            status={status}
            defaultValue=""
            onAddTodo={handleAddTodo}
          />
          <Filter
            categories={categories}
            status={status}
            handleFilter={handleFilter}
          />
          <br />
          {filterList.map((item, idx) => {
            return (
              <TodoItem
                categories={categories}
                key={idx}
                onStatusChange={handleStatusChange}
                handleDeleteClick={handleDeleteClick}
                item={item}
                idx={idx}
                status={status}
                statusList={statusList}
                editListItem={editListItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
