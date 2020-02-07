import React from 'react';
import Card from './Card';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>Example 1: props</h1>
    </header>
    <main className="app-body">
      <div className="cards-container">
        <Card /> 
      </div>
    </main>
  </div>
);

export default App;
