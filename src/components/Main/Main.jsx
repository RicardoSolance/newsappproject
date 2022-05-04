import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ListNews from './Home/ListNews';
import Form from './Home/Form';

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       List : []
    }
  }

  updateNews = (News) => {
    this.setState({List: [...this.state.List,News]});
  }
  
  render() {
    return (
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Form updateNews={ this.updateNews}/>} path='/form' />
          <Route element={<ListNews List={this.state.List} />} path='/listnews' />
        </Routes>
    </main>)
  }
}

export default Main;
