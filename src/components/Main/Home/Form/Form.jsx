import React, { Component } from "react";
import {Navigate} from "react-router-dom"


class Form extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       mynews : [],
       redirect: false
      
     }
    
   }

  handleSubmit = (e) => {
    
    e.preventDefault();
    const News = {
      title: e.target.title.value,
      info: e.target.info.value,
      author: e.target.author.value,
      source: e.target.source.value,
      image: e.target.image.value,
      url: e.target.url.value,
    }

    this.props.updateNews(News)
    this.setState({ redirect: true });
    this.setState({ mynews: News });
  }
 
  render() {
    const { redirect } = this.state;
    
    if (redirect) {
      return <Navigate to='/listnews'/>
    }
    
    return <div className="formulario" >

      <form action="" onSubmit={this.handleSubmit}>
        <input name="title" type="text" placeholder="News title" />
        <input name="author" type="text" placeholder="Authors name" />
        <input name="source" type="text" placeholder="Fuente de la noticia" />
        <input name="url" type="text" placeholder="url noticia" />
        <input name="image" type="text" placeholder="url imagen" />
        <textarea name="info" id="" cols="30" rows="10"></textarea>
        <button type="submit">Crear noticia</button>
      </form>
    </div>;
  }
}

export default Form;
