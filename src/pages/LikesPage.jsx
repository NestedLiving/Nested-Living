import { useState, useEffect } from 'react';
import { getMyLikes } from '../services/LikesService';
import HouseCard from '../components/HouseCard';
const WishList = () => {
    const [likedHouses, setLikedHouses] = useState([]);
    useEffect(() => {
        getMyLikes()
            .then((likedHouses) => setLikedHouses(likedHouses))
            .catch((error) => console.error(error));
    }, []);
    // useEffect(() => {
    //     likedHouses.forEach(like => {
    //         getHouseDetail(like.houseId)
    //             .then(details => {
    //                 // Hacer algo con los detalles de la casa, como mostrarlos en la interfaz
    //                 console.log('Detalles de la casa:', details);
    //             })
    //             .catch(error => console.error(error));
    //     });
    // }, [likedHouses]);
    return (
        <div className="profile-container">
            <div className="profile-header">
                {/* Agregar contenido al encabezado del perfil si es necesario */}
            </div>
            <div className="houses-container">
                <h3 className="houses-title">Wish List</h3>
                <div className="house-cards">
                    {likedHouses.map((like) => {
                        const { houseId: house } = like
                        return (
                            <HouseCard
                                key={house._id}
                                id={house._id}
                                title={house.title}
                                location={house.location}
                                price={house.price}
                                images={house.images} // Asegúrate de que images sea una matriz de URLs de imágenes en likedHouses
                                startDate={house.startDate}
                                endDate={house.endDate}
                                isLiked={true}
                                showLikeButton={false}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default WishList;