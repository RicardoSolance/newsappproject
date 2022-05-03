import React from 'react';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { newsContext } from './context/newsContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(""); //Estado

  //funcion de login

  const login = (name) => {
    setUser(name);
  }
  //funcion Log-Out
  const logOut = (name) => {
    setUser("");
  }
 
  const data = {
    user, 
    login,
    logOut
  }
  return (
    <div className="App">
      <BrowserRouter>
        <newsContext.Provider value={data}>
          <Header />
          <Main />
          <Footer />
        </newsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
