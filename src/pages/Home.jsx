/*import { useEffect, useState } from 'react';
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
        <div className='m'>
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

export default Houses;*/
import { useEffect, useState } from 'react';
import { getHouses } from '../services/HouseService';
import HouseCard from '../components/HouseCard';
import { Container, Row, Col, Fade } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

const Houses = () => {
    const [houses, setHouses] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [searchParams, setSearchParams] = useState({
        location: '',
        people: 0,
        startDate: '',
        endDate: '',
    });

    useEffect(() => {
        getHouses(
            searchParams.location,
            searchParams.people,
            searchParams.startDate,
            searchParams.endDate
        )
            .then((houses) => {
                setHouses(houses);
                setLoaded(true);
            })
            .catch(error => console.error(error))
    }, [searchParams]);

    const handleClearFilters = () => {
        setSearchParams({
            location: '',
            people: 0,
            startDate: '',
            endDate: '',
        });

    }



    return (
        <div>
            <SearchBar
                onSearch={setHouses}
                onClearFiltres={handleClearFilters}
                searchParams={searchParams}
            />
            <Container className="py-4">
                {loaded && houses.length === 0 ? (
                    <p className='no-results-message'>No results found</p>
                ) : (
                    <>
                        <Row xs={1} md={2} lg={4} className="g-4">
                            {houses.map((house, index) => (
                                <Col key={house.id}>
                                    <Fade in timeout={500 + index * 100} unmountOnExit>
                                        <div className="card mb-3">

                                            <div className="card-body">
                                                <HouseCard {...house} />
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                            ))}
                        </Row>
                    </>

                )}


            </Container>
        </div>
    );
}



export default Houses;

