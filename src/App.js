import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import './App.css';


function App() {
  
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

let navigate=useNavigate()

 
  function addItem() {
    const item = {
      id: 1+Math.random() ,
      value: newItem,
    };

    
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  

  
  return (
    <div className="App">
      
      Add an item
      <br/>

      
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
       <ol>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setNewItem(item.value)}>
                {item.value}
                <button
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
                
              </li>             
            </div>
          );
        })}
      </ol>
      <button
                onClick={()=>{
                  navigate("/class")
                }}>Click</button>
    </div>

    
  );
}

export default App;
