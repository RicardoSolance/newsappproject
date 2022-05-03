import React, { Component } from "react";
import {Link} from "react-router-dom"

class Nav extends Component {
  render() {
    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid"  bg="dark">
      <Link class="navbar-brand" to='/'>Lo Que se Cuece NEWS</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <Link rel="stylesheet"  to='/' className="nav-link">Home</Link>
        <Link rel="stylesheet"  to='/form' className="nav-link">Form</Link>
        <Link rel="stylesheet" to='/listnews' className="nav-link">List News</Link>
        </div>
      </div>
    </div>
  </nav>)
  }
}
{/* <nav className="nav">
    <Link rel="stylesheet" href="" to='/' className="links">Home</Link>
    <Link rel="stylesheet" href="" to='/form' className="links">form</Link>
    <Link rel="stylesheet" href="" to='/listnews' className="links">list</Link>
    </nav>; */}

export default Nav;
