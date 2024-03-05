/*import { Link } from "react-router-dom";
import './HouseCard.css';

const HouseCard = ({ _id: id, title, rooms, price, images, people, onClick }) => {
  return (
    <Link to={`/houses/${id}`} onClick={onClick} className="house-card">
      <div className="card mt-4">
        <img src={images[0]} className="card-img" alt={title} />
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <div className="card-details">
            <div className="detail">
              <i className="fas fa-door-open"></i>
              <p>{rooms} Rooms</p>
            </div>
            <div className="detail">
              <i className="fas fa-users"></i>
              <p>Max {people} Guests</p>
            </div>
            <div className="detail">
              <i className="fas fa-dollar-sign"></i>
              <p>€{price} / night</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HouseCard;*/

import { useState } from 'react';
import { toggleLike } from '../services/UserService';
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import './HouseCard.css';

const HouseCard = ({ _id: id, title, rooms, price, images, people, onClick, isLiked, showLikeButton = true }) => {
  
  const [like, setLike] = useState(isLiked);

  const houseId = id;

  const handleLike = () => {
    toggleLike(houseId)
      .then(() => {
        setLike(prevLike => !prevLike);
      });
  };

  return (
    <div>
      <Link to={`/houses/${id}`} onClick={onClick} className="house-card">
        <div className="card mt-4">
          <img src={images[0]} className="card-img" alt={title} />
          <div className="card-content">
            <h5 className="card-title">{title}</h5>
            <div className="card-details">
              <div className="detail">
                <i className="fas fa-door-open"></i>
                <p>{rooms} Rooms</p>
              </div>
              <div className="detail">
                <i className="fas fa-users"></i>
                <p>Max {people} Guests</p>
              </div>
              <div className="detail">
                <i className="fas fa-dollar-sign"></i>
                <p>€{price} / night</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {showLikeButton && (
        <div onClick={handleLike} className="mt-3 d-flex gap-1 align-items-center text-dark text-sm cursor-pointer">
          {like ? (
            <HeartIcon className="h-3 fill-red-600" />
            
            ) : (
            <OutlineHeartIcon className="h-3" />
          )}
        </div>
      )}
    </div>
  );
};

export default HouseCard;
