import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [type, setType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${type}`);
        const data = await response.json()
        setItems(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchItems();

  }, [type])
 
  return (
    <div className="App">
      <Form type={type} setType={setType} />
      <List items={items} />
     
    </div>
  );
}

export default App;
