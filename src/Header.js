import React from "react";

class Header extends React.Component {
  render() {
    return (
      
        <>
          <h1>City Explorer</h1>
          <input type="text" onChange={this.props.handleChange} placeholder="Search for a city"/>
          <button onClick={this.props.getLocation}>Explore!</button>
        </>
      
    
    );
  }
  
}

export default Header;