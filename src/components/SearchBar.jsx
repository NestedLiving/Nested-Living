import { useState, useEffect } from 'react';
import './SearchBar.css';
import { getHouses } from '../services/HouseService';

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [people, setPeople] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        handleSearch();
    }, []);

    const handleSearch = () => {
        getHouses(location, startDate, endDate)
            .then(houses => {
                let filteredHouses = houses.filter(house => house.people >= people);

                if (minPrice !== '' && maxPrice !== '') {
                    filteredHouses = filteredHouses.filter(house => house.price >= minPrice && house.price <= maxPrice);
                }

                onSearch(filteredHouses);
            })
            .catch(error => {
                console.error('Error during search:', error);
            });
    };


    const handleClearFilters = () => {
        setLocation('');
        setPeople(0);
        setStartDate("");
        setEndDate("");
        setMinPrice('');
        setMaxPrice('');

        getHouses('', 0, '', '')
            .then(houses => {
                onSearch(houses);
            })
            .catch(error => {
                console.error('Error during search:', error);
            });
    };

    return (
        <div className="container " style={{ marginTop: '130px' }}>
            <div className="search-bar">
                <input type="search" className="search-input" placeholder="Search City" value={location} onChange={(e) => setLocation(e.target.value)} />
                <input type="date" className="date-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" className="date-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <input type="number" className="people-input" placeholder="People" value={people} onChange={(e) => setPeople(parseInt(e.target.value, 10))} />
                <input type="number" className="price-input" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                <input type="number" className="price-input" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                <button type="button" className="search-btn" onClick={handleSearch}>Search</button>
                <button type="button" className="clear-btn" onClick={handleClearFilters}>Clear</button>
            </div>
        </div>
    );
};

export default SearchBar;


 

