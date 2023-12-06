import React, { useState } from "react";
import Alert_24 from "./components/Alert_24";
import List_24 from "./components/List_24";

const App_24 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      }
      setList([...list, newItem]);
      setName('');
    }
  }

  const removeItem = (id) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  }

  return (
    <>
      <section className="section center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert_24 {...alert} removeAlert={showAlert} />}
          <h3>Grocery Bud --何書維</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              value={name}
              placeholder='e.g.eggs'
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-containter">
            <List_24 items={list} removeAlert={removeItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items</button>
          </div>
        )}
      </section>
    </>
  );
};

export default App_24;
