import axios from "axios";
import React from "react";
import LocationData from "./LocationData";
import Header from "./Header";
import './App.css';

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
    const response = await axios.get(url).catch(err => alert(`Can't display a location that doesn't exist: ${err}`));
    console.log(response)
    this.setState({location: response.data[0]})
  }
  

  render() {
    return (
      <>
          <Header handleChange={this.handleChange} getLocation={this.getLocation}/>
          <LocationData locationData={this.state.location}/>
        
      </>
    
    );
  }
  
}

export default App;
