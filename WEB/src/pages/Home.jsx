import { useEffect, useState } from 'react';
import { getHouse } from '../services/HouseService';
import HouseCard from '../components/HouseCard';


const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHouse()
            .then((houses) => setHouses(houses))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>

        
            <h1 className=''>Houses</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {houses.map(house => (
                    <div key={house.id} className="col">
                        <HouseCard {...house} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Houses;