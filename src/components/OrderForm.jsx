import { useState } from 'react';
import { object, string, number } from 'yup';
import { useFormik } from 'formik';
import Input from './Input';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { createOrdering } from '../services/OrderingService'; // Assicurati di importare il servizio corretto per le prenotazioni

const orderSchema = object({
    checkInDate: string().required('Required field'),
    checkOutDate: string().required('Required field'),
    numberOfGuests: number().required('Required field'),
    // Aggiungi qui altri campi di validazione necessari per la prenotazione
});

const OrderForm = () => {
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
        initialValues: {
            checkInDate: '',
            checkOutDate: '',
            numberOfGuests: '',
            // Includi qui altri campi necessari per la prenotazione
        },
        validationSchema: orderSchema,
        onSubmit: (values) => {
            setSubmitting(true);
            createOrdering(values)
                .then(() => {
                    setSubmitting(false);
                    navigate('/'); // Reindirizza l'utente alla home dopo aver effettuato la prenotazione
                })
                .catch(error => {
                    setSubmitting(false);
                    console.error(error);
                });
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="checkInDate"
                label="Check-in Date"
                type="date"
                value={values.checkInDate}
                error={touched.checkInDate && errors.checkInDate}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <Input
                name="checkOutDate"
                label="Check-out Date"
                type="date"
                value={values.checkOutDate}
                error={touched.checkOutDate && errors.checkOutDate}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <Input
                name="numberOfGuests"
                label="Number of Guests"
                type="number"
                value={values.numberOfGuests}
                error={touched.numberOfGuests && errors.numberOfGuests}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {/* Aggiungi altri campi del modulo di prenotazione qui, se necessario */}
            <Button type="submit" text={submitting ? "Submitting..." : "Submit"} disabled={!isValid || submitting} className="btn btn-primary" />
        </form>
    );
};

export default OrderForm;
