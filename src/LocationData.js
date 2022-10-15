import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class LocationData extends React.Component {
  render() {
    return (
      <>
       
        
        
        {this.props.locationData && <Card className='locationCard'style={{ width: '18rem' }}>
          
          <Card.Body>
            <Card.Title>{this.props.locationData.display_name}</Card.Title>
        
            <Card.Text>Latitude: {this.props.locationData.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.locationData.lon}</Card.Text>
            <Card.Img variant="top" src={this.props.locationData && `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=12&size=300x300`} />
          </Card.Body>
        </Card>}
       
      </>
    
    );
  }
  
}

export default LocationData;