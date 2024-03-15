import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createReservation } from '../services/ReservetionService';
import { BsFillPersonFill } from 'react-icons/bs';
import './ReservationForm.css';


const ReservationForm = ({houseId}) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const reservation = {name, email, guests, startDate, endDate };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleCheckout = async () => {
        createReservation(houseId, reservation)
        .then((session) => {
            window.location.href = session.url;
            })
            .catch((error) => {
                console.error(error);
                
            })
    };

    return (
        <div className="card shadow-sm" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="card-body">
                <h5 className="card-title mb-4">Make a Reservation</h5>
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </Form.Group>

                    <Form.Group controlId="formGuests">
                        <Form.Label><BsFillPersonFill /> Guests</Form.Label>
                        <Form.Control as="select" value={guests} onChange={(e) => setGuests(e.target.value)}>
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1} guests</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                <Form.Group controlId="formDates">
                    <Form.Label className="form-label">Dates</Form.Label>
                    <div className="date-picker">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            placeholderText="Check-in"
                            className="form-control"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="Check-out"
                            className="form-control"
                        />
                    </div>
                </Form.Group>

                <Button variant="secondary" onClick={handleCheckout} className="checkout-button">
                    Checkout
                </Button>
            </Form>
        </div>
    </div>
    );
};

export default ReservationForm;

