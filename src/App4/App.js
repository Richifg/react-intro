import React, { useState } from 'react';
import Card from './Card';
import AddCardButtom from './AddCardButton';
import initialData from '../exampleData';

const App = () => {
  const [data, setData] = useState(initialData);

  const addCard = (newItem) => setData([...data, newItem]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Example 2: effects</h1>
      </header>
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
