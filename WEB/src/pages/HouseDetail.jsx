import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getHouseDetail } from "../services/HouseService";
import Map from "../components/Map";



const HouseDetail = () => {
    const { id } = useParams();


    const [house, setHouse] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchHouseData = useCallback(() => {
        getHouseDetail(id)
            .then((house) => {
                setHouse(house);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        fetchHouseData();
    }, [fetchHouseData]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <img src={house.images[0]} alt={house.title} className="img-fluid" />

                        
                        <h2>{house.title}</h2>
                        <p><strong>Description:</strong> {house.description}</p>
                        <p><strong>Price:</strong> ${house.price}</p>
                        <p><strong>Location:</strong> {house.location}</p>
                        
                    </div>
                    <div className="col-md-6">
                        <Map location={house
                            .location} />   
                    </div>
                </div>
            )}
        </div>
    );
}

export default HouseDetail;


