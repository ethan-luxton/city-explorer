import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.displayWeather &&
        <Container>
       <h4>Weather for {this.props.locationData.display_name}</h4>
          <div>
            {this.props.weatherData.map((e, i) => {
              return (
                <>
                <div>
                  <div className={'weather'}><h5 key={i}>Date: {e.date}</h5></div>
                  <div className={'weather'}><h6>Forecast: {e.description}</h6></div>
                </div>
                  
                </>
              )
            })}
          </div>
         
        </Container>
        }
      </>
    )
  }
}

export default Weather;