import React from 'react';
import Card from './Card';
import Header from './Header';
import data from '../exampleData';

const App = () => (
  <div className="app">
    <Header title="Example 2: state" />
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
