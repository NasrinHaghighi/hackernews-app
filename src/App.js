import React from 'react';
import Stories from './Stories';
import SearchForm from './SearchForm';
import Buttons from './Buttons';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <Buttons />
      <Stories />
     
    </div>
  );
}

export default App;
