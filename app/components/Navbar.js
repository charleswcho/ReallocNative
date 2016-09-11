import React, { Component } from 'react'
import { Link } from 'react-router'

// Actions
import { clearData } from '../actions/clientActions'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <Link className='logo' to={"/"}  onClick={clearData}>Realloc</Link>
        </div>
      </div>
    );
  }
}
