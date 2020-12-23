import React from 'react';
import Nav from './components/Nav';
import Layout from './containers/Layout';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Header/>
        <Layout/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
