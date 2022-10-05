import axios from "axios";
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value});
  }
  getLocation = async() => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log('URL: ', url)
    const response = await axios.get(url);
    console.log(response)
    this.setState({location: response.data[0]})
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>City Explorer</h1>
          <input type="text" onChange={this.handleChange} placeholder="Search for a city"/>
          <button onClick={this.getLocation}>Explore!</button>
          {this.state.location.display_name && <h2>The city we searched for is {this.state.location.display_name} </h2>}
        </div>
      </>
    
    );
  }
  
}

export default App;
