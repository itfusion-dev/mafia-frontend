import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Создайте функцию для выполнения GET-запроса к серверу
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    // Вызовите функцию для выполнения GET-запроса при монтировании компонента
    fetchData();
  }, []);

  return (
    <div>
      {/* Вывод данных из MongoDB */}
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
  

export default App;