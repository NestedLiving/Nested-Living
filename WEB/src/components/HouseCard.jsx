import { Link } from "react-router-dom"
import roomsImage from '../../assets/rooms.png';
import bathRoomsImage from '../../assets/bathrooms.png';
import peopleImage from '../../assets/people.png';
import priceImage from '../assets/price.png';




const HouseCard = ({ id, title, rooms, bathrooms, price, image, numberPeople, onClick = () => {} }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={roomsImage} className="card-img-rooms" alt="Rooms" />
          <p className="ml-2">{rooms}</p>
          <img src={bathRoomsImage} className="card-img-bath" alt="Bathrooms" />
          <p className="ml-2">{bathrooms}</p>
          <img src={peopleImage} className="card-img-people" alt="People" />
          <p className="ml-2">{numberPeople}</p>
          <img src={priceImage} className="card-img-price" alt="Price" />
          <p className="ml-2">{price}</p>
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