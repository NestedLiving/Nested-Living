import { useNavigate } from 'react-router-dom';
import HouseForm from '../components/HouseForm';
import { createHouse } from '../services/HouseService';

const NewHouse = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        return createHouse(values)
            .then(createdHouse => navigate(`/houses/${createdHouse.id}`))
            .catch(error => console.error(error))
    }   

    return (
        <div>
            <HouseForm onSubmit={onSubmit} />
        </div>
    )
}

export default NewHouse;