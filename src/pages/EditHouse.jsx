import { useNavigate, useParams } from "react-router-dom";
import EditHouseForm from "../components/EditHouseForm";
import { useEffect, useState } from "react";
import { editHouse, getHouseDetail } from "../services/HouseService";
const EditHouse = () => {
    const { id } = useParams();
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
    }, [house])
    
    const initialValues = {
        title: house.title,
        description: house.description,
        price: house.price,
        rooms: house.rooms,
        people: house.people,
        location: house.location,
        amenities: house.amenities,
        startDate: house.startDate,
        endDate: house.endDate,
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
                <EditHouseForm initialValues={initialValues} onSubmit={onSubmit} isUpdating={true} />
            )}
        </div>
    )
}
export default EditHouse