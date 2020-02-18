import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import AddCardButtom from './AddCardButton';
import initialData from '../exampleData';

const App = () => {
  const [data, setData] = useState(initialData);

  const addCard = (newItem) => setData([...data, newItem]);

  return (
    <div className="app">
      <Header title="Example 4: ???" />
      <main className="app-body">
        <div className="cards-container">
          {data.map(item => (
            <Card 
              title={item.title} 
              id={item.id}
              key={item.title}
            /> 
          ))}
          <AddCardButtom addCard={addCard} />
        </div>
      </main>
    </div>
  );
}

export default App;
