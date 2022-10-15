import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        <h4>Weather for {this.props.locationData.display_name}</h4>
        {this.props.displayWeather &&
      
          <Accordion defaultActiveKey="1" flush>
            {this.props.weatherData.map((e, i) => {
              return (
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  Date: {e.date}
                </Accordion.Header>
                <Accordion.Body>
                  Forecast: {e.description}
                </Accordion.Body>

              </Accordion.Item>
              
                  
              
              )
            })}
          </Accordion>
         
       
        }
      </>
    )
  }
}

      

export default Weather;