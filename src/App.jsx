import React, { Component } from 'react'
import './App.css'
import galaxy from './galaxy.jpeg'

export default class App extends Component {
   constructor(){
     super();
     this.state = {
       count:0,
     }
   }

  render() {
  
    return (
      <div className='container'>
        <div className='shopping'>
          {/* title */}
          <div className='title-wrapper'>
            <span>shopping card</span>
            <span>3 itmes</span>
          </div>
          {/* product */}
          <div className='product'>
            <div className='product-details'>
              <h3 className='details'>product details</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
