/*import { useState } from 'react';
 // Importa il file CSS per le personalizzazioni

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
        // Logica per eseguire la ricerca con le date selezionate
        console.log("Search clicked");
    };

    return (
        <div className="container mt-4">
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search City" aria-label="Search" aria-describedby="search-addon" />
                <input type="date" className="form-control rounded" id="start" name="trip-start" value={startDate} min="2024-02-23" max="2025-01-01 " onChange={handleStartDateChange} />
                <input type="date" className="form-control rounded" id="end" name="trip-end" value={endDate} min="2024-02-24" max="2026-01-01" onChange={handleEndDateChange} />
                <input type="number" className="form-control rounded" placeholder="People" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-primary rounded" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;*/

import { useState } from 'react';
import './SearchBar.css';

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
        // Logica per eseguire la ricerca con le date selezionate
        console.log("Search clicked");
    };

    return (
        <div className="container mt-4" style={{ paddingTop: "80px" }}>
            <div className="search-bar">
                <input type="search" className="form-control rounded search-input" placeholder="Search City" aria-label="Search" aria-describedby="search-addon" />
                <div className="date-picker">
                    <input type="date" className="form-control rounded date-input" id="start" name="trip-start" value={startDate} min="2024-02-23" max="2025-01-01 " onChange={handleStartDateChange} />
                    <input type="date" className="form-control rounded date-input" id="end" name="trip-end" value={endDate} min="2024-02-24" max="2026-01-01" onChange={handleEndDateChange} />
                </div>
                <input type="number" className="form-control rounded people-input" placeholder="People" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-primary rounded search-btn" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;


