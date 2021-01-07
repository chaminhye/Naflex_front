import React from 'react';
import MainRoute from './pages/MainRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {  

  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
