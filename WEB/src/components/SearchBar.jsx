import { useState } from 'react';
import '../App.css'

const SearchBar = () => {
    const [startDate, setStartDate] = useState("2024-02-22");
    const [endDate, setEndDate] = useState("2024-02-24");

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleSearch = () => {
        // Lógica para realizar la búsqueda con las fechas seleccionadas
        console.log("Search clicked");
    };

    return (
        <div>
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search City" aria-label="Search" aria-describedby="search-addon" />
                <input type="date" className="form-control rounded" id="start" name="trip-start" value={startDate} min="2024-02-23" max="2025-01-01 " onChange={handleStartDateChange} />
                <input type="date" className="form-control rounded" id="end" name="trip-end" value={endDate} min="2024-02-24" max="2026-01-01" onChange={handleEndDateChange} />
                <input type="number" className="form-control rounded" placeholder="People" aria-label="Search" aria-describedby="search-addon" /> 
                <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init onClick={handleSearch}>search</button>
            </div>
        </div>
    );
};

export default SearchBar;
