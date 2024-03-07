import { useNavigate, useParams } from "react-router-dom";
import HouseForm from "../components/HouseForm";
import { useEffect, useState } from "react";
import { editHouse, getHouseDetail } from "../services/HouseService";

const EditHouse = () => {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();

    const [house, setHouse] = useState({})
    const [loading, setLoading] = useState({})


    useEffect(() => {
        getHouseDetail(id)
        .then((houseDB) => {
            setHouse(houseDB);
            setLoading(false);
        })
        .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        console.log(house)
    }, [house])

    const initialValues = {
       title: house.title,
       description: house.description,
       price: house.price,
       rooms: house.rooms,
       people: house.people,
       location: house.location,
       amenities: house.amenities,
    }

    

    const onSubmit = (values) => {
        return editHouse(id, values)
        .then(editedHouse => {
            navigate(`/houses/${editedHouse.id}`)
        })
    }

    return (
        <div>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                <HouseForm initialValues={initialValues} onSubmit={onSubmit} isUpdating={true} />
            )}
        </div>
    )
    
}

export default EditHouse