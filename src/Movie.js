import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Card';


class Movies extends React.Component {
  render() {
    return (
      <>
        <h4>Movies for {this.props.locationData.display_name}</h4>
          {this.props.displayMovies &&  
          <Container>
            <Row xs={2} md={4} lg={6}>
            {this.props.movieData.map((e, i) => {
            return (
            <Card style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Img src={e.poster} alt={e.title} />
                <Card.Title>Movie: {e.title}</Card.Title>
                <Card.Text>Description: {e.overview}</Card.Text>
  
              </Card.Body>
            </Card>
            )
          })}
          </Row>
        </Container>
        }
      </>
    )
  }
}
export default Movies;

