import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getHouseDetail } from "../services/HouseService";
import Map from "../components/Map";
import ReservationForm from "../components/ReservetionForm";


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
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-light p-3 rounded">
                                <img src={house.images[0]} alt={house.title} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                {house.images.slice(1).map((image, index) => (
                                    <div className="col-6 col-md-4 col-lg-3 mb-3" key={index}>
                                        <img src={image} alt={`House ${index}`} className="img-fluid rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="bg-light p-3 rounded">
                                <h2>{house.title}</h2>
                                <p><strong>Description:</strong> {house.description}</p>
                                <p><strong>Price:</strong> €{house.price}</p>
                                <p><strong>Location:</strong> {house.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="bg-light p-3 rounded">
                                <h3>Location</h3>
                                <div style={{ width: '100%', height: '400px' }}>
                                    <Map location={house.location} />
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row mt-5">
                            <div className="col-md-12 mt-5">
                                <ReservationForm />
                            </div>
                        </div>
                </div>
            )}
        </div>

    );
}

export default HouseDetail;