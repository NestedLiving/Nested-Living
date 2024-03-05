import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="card shadow-sm" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="card-body">
                <h5 className="card-title mb-4">Make a Reservation</h5>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formGuests">
                        <Form.Label>Guests</Form.Label>
                        <Form.Control as="select" value={guests} onChange={(e) => setGuests(e.target.value)}>
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1} guests</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formStartDate">
                        <Form.Label>Check-in</Form.Label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            className="form-control"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEndDate">
                        <Form.Label>Check-out</Form.Label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className="form-control"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Book Now
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ReservationForm;
