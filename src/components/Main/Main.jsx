import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ListNews from './Home/ListNews';
import Form from './Home/Form';

class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Form/>} path='/form' />
          <Route element={<ListNews />} path='/listnews' />
        </Routes>
    </main>)
  }
}

export default Main;
