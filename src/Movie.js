import React from 'react';
import Container from 'react-bootstrap/Card';



class Movies extends React.Component {
    render() {
        return (
          <>
            {this.props.displayMovies &&
            <Container>
           <h4>Movies for {this.props.locationData.display_name}</h4>
              <div>
                {this.props.movieData.map((e, i) => {
                  return (
                    <>
                        <div className={'container'}>
                            <img className={'movie'} src={e.poster} alt={e.title}/>
                            <div className={'movie'}><h5 key={i}>Movie: {e.title}</h5></div>
                            <div className={'movie'}><h6>Description: {e.overview}</h6></div>
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
export default Movies;

