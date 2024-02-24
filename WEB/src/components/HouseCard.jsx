import { Link } from "react-router-dom"
//import roomsImage from '../../assets/rooms.png';
//import bathRoomsImage from '../../assets/bathrooms.png';
//import peopleImage from '../../assets/people.png';
//import priceImage from '../assets/price.png';




const HouseCard = ({ id, title, rooms, bathrooms, price, image, numberPeople, onClick = () => {} }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          
          <p className="ml-2">{rooms}</p>
          
          <p className="ml-2">{bathrooms}</p>
          
          <p className="ml-2">{numberPeople}</p>
          
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