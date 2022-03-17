import Carousel from 'react-bootstrap/Carousel'

export default function Sliders(props) {
  return (
    <Carousel interval={null} indicators={false} className="slider" fade>
      {
        props.pictures.map(picture => 
          <Carousel.Item key={picture._id} className="slider-item">
            <img
              className="d-block w-100"
              src={picture.url}
              alt={picture._id}
            />
          </Carousel.Item>  
        )
      }
      
    </Carousel>
  );
}