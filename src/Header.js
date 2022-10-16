import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
  render() {
    return (
      
        <div className='header'>
          <h1>City Explorer</h1>
          <input type="text" onChange={this.props.handleChange} placeholder="Search for a city"/>
          <button onClick={this.props.getLocation}>Explore!</button>
        </div>
          
      
      
    
    );
  }
  
}

export default Header;