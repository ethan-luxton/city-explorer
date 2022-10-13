import axios from "axios";
import React from "react";
import LocationData from "./LocationData";
import Header from "./Header";
import './App.css';
import Weather from "./Weather";
import Movie from "./Movie";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      weatherData: [],
      movieData: [],
    }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value.toLowerCase()});
  }

  getLocation = async() => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    
    console.log('URL: ', url)
    const response = await axios.get(url).catch(err => alert(`Can't display a location that doesn't exist: ${err}`));
    console.log(response)
    this.setState({location: response.data[0]})
    this.handleWeather();
    this.handleMovies();
  }
  handleWeather = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ weatherData: response.data, displayWeather: true, });
      console.log(this.state.weatherData)
    } catch (err) {
      alert(`Can't display weather that doesn't exist: ${err}`)
      
    }
  }
  handleMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.searchQuery}`;
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ movieData: response.data, displayMovies: true,});
      console.log(this.state.movieData)
      console.log(this.state.displayMovies)
    } catch (err) {
      alert(`Can't display a movie that doesn't exist: ${err}`)
      
    }
  }

  render() {
    return (
      <>
          <Header handleChange={this.handleChange} getLocation={this.getLocation}/>
          <LocationData locationData={this.state.location}/>
          <Movie locationData={this.state.location} movieData={this.state.movieData} displayMovies={this.state.displayMovies}/>
          <Weather locationData={this.state.location} weatherData={this.state.weatherData} displayWeather={this.state.displayWeather}/>

      </>
    
    );
  }
  
}

export default App;
