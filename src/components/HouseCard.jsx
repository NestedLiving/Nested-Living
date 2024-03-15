

/*import { useState } from 'react';
import { toggleLike } from '../services/UserService';
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import './HouseCard.css';

const HouseCard = ({ _id: id, title, location, price, images, startDate, endDate, onClick, isLiked, showLikeButton = true }) => {

  const [like, setLike] = useState(isLiked);

  const houseId = id;

  const handleLike = () => {
    toggleLike(houseId)
      .then(() => {
        setLike(prevLike => !prevLike);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(startDate, endDate)
    const day = date.getDate();
    const month = date.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  };


  return (
    <div>
      <div className="card mt-4">
        <Link to={`/houses/${id}`} onClick={onClick} className="house-card">
          <img src={images[0]} className="card-img" alt={title} />
        </Link>
        <div className="card-content">
          <div className="title-with-like">
            <h5 className="card-title">{title}</h5>
            {showLikeButton && (
              <div onClick={handleLike} className="like-button">
                {like ? (
                  <HeartIcon className="h-3 fill-red-600" />
                ) : (
                  <OutlineHeartIcon className="h-3" />
                )}
              </div>
            )}
          </div>
          <div className="card-details">
            <div className="detail">
              <p className="detail-label"></p>
              <p className="detail-value">{location}</p>
            </div>
            <div className="detail">
              <p className="detail-label"></p>
              <p className="detail-value">{formatDate(startDate)} to {formatDate(endDate)}</p>
            </div>
            <div className="detail">
              <p className="detail-label"></p>
              <p className="detail-value"><strong>€{price} / night</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;*/

import { useState } from 'react';
import { toggleLike } from '../services/UserService';
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import './HouseCard.css';

const HouseCard = ({ _id: id, title, location, price, images, startDate, endDate, onClick, isLiked, showLikeButton = true }) => {

  const [like, setLike] = useState(isLiked);

  const houseId = id;

  const handleLike = () => {
    toggleLike(houseId)
      .then(() => {
        setLike(prevLike => !prevLike);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  };

  return (
    <div className="card mt-4">
      <Link to={`/houses/${id}`} onClick={onClick} className="house-card">
        <img src={images[0]} className="card-img" alt={title} />
      </Link>
      <div className="card-content">
        <div className="title-with-like">
          <h5 className="card-title">{title}</h5>
          {showLikeButton && (
            <div onClick={handleLike} className="like-button">
              {like ? (
                <HeartIcon className="h-3 fill-red-600" />
              ) : (
                <OutlineHeartIcon className="h-3" />
              )}
            </div>
          )}
        </div>
        <div className="card-details">
          <div className="detail">
            <p className="detail-value1">{location}</p>
          </div>
          <div className="detail">
            <p className="detail-value1">{formatDate(startDate)} to {formatDate(endDate)}</p>
          </div>
          <div className="detail">
            <p className="detail-value"><strong>€{price} / night</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;


