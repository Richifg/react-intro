import React from 'react';
import Card from './Card';
import data from '../data';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>Example 2: state</h1>
    </header>
    <body className="app-body">
      <div className="cards-container">
        {data.map(item => (
          <Card 
            title={item.title} 
            id={item.id}
          /> 
        ))}
      </div>
    </body>
  </div>
);

export default App;
