import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './Slider';

// I'm really not sure about this business rule
const NO_MINIMAL_RENTAL_DURATION = 'SHORT_TERM'

export default function PropertyCard(props) {
  return (
    <Container className="propertyCard">
      <Row>
        <Col xs={3}>
          <Slider pictures={props.property.pictures}></Slider>
        </Col>
        <Col>
          <div className="propertyCard-content">
            <div className="propertyCard-content__header">
              <span>Ref {props.property.propertyIdNumber}</span>&nbsp;
              {
                props.property.isCrushed
                  ? <span>Coup de coeur</span>
                  : null
              }
              <h3>{props.property.title}</h3>
            </div> 
            <div className="propertyCard-content__body">
              <p>
                {props.property.nbRooms} pièces de {props.property.surface}m² 
                au {props.property.floor}ème étage - Meublé
              </p>
              {
                props.property.rooms?.length
                  ? <p>{props.property.rooms.length} chambres disponible</p>
                  : null
              }
            </div>
            <div className="propertyCard-content__footer">
              {
                props.property.rentInfos?.minimumRentalDuration === NO_MINIMAL_RENTAL_DURATION
                ? <span>Pas de durée min de location&nbsp;</span>
                : null
              }
              <span>A partir de {props.property.lowestRoomPrice}€ CC</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}