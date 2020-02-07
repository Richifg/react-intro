import React from 'react';
import Card from './Card';
import data from '../exampleData';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>Example 2: state</h1>
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
      </div>
    </main>
  </div>
);

export default App;
