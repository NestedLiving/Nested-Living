import { Link } from "react-router-dom"
import roomsImage from '../assets/rooms.png';
import peopleImage from '../assets/people.png';
import priceImage from '../assets/price.png';




const HouseCard = ({ id, title, rooms, price, image, people, onClick = () => { } }) => {
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
        </div>
      </div>
    </div>
  );
};

export default HouseCard;