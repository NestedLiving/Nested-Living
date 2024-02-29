import { Link } from "react-router-dom"
import roomsImage from '../assets/rooms.png';
import peopleImage from '../assets/people.png';
import priceImage from '../assets/price.png';
import './HouseCard.css';




/*const HouseCard = ({ _id: id, title, rooms, price, image, people, onClick = () => { } }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between align-items-center mb-2">
        <img src={roomsImage} className="card-img-rooms mr-2" alt="Rooms" style={{ maxWidth: '20px', maxHeight: '20px' }} />
        <p className="ml-2">{rooms}</p>
        <img src={peopleImage} className="card-img-people mr-2" alt="People" style={{ maxWidth: '20px', maxHeight: '20px' }} />
        <p className="ml-2">{people}</p>
        <img src={priceImage} className="card-img-price mr-2" alt="Price" style={{ maxWidth: '20px', maxHeight: '20px' }} />
        <p className="ml-2">{price}</p>
        </div>
        <div className="mt-2">
          <Link to={`/house/${id}`} className="btn btn-primary" onClick={onClick}>
            Detalles
          </Link>
          <Link to={`/ordering/${id}`} className="btn btn-primary" onClick={onClick}>
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};*/
const HouseCard = ({ _id: id, title, rooms, price, images, people, onClick }) => {
  return (
    <div className="house-card mx-auto" style={{ width: '18rem'}}>
      <img src={images[0]} className="card-img" alt={title}  />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <div className="card-details">
          <div className="detail">
            <i className="fas fa-door-open"></i>
            <p>{rooms}</p>
          </div>
          <div className="detail">
            <i className="fas fa-users"></i>
            <p>{people}</p>
          </div>
          <div className="detail">
            <i className="fas fa-dollar-sign"></i>
            <p>{price}</p>
          </div>
        </div>
        <div className="buttons">
          <Link to={`/house/${id}`} className="btn details-btn" onClick={onClick}>
            Detalles
          </Link>
          <Link to={`/ordering/${id}`} className="btn reserve-btn" onClick={onClick}>
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;