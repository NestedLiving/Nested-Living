/*import { object, string, number } from 'yup';
import { useFormik } from 'formik';
import Input from './Input';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { createHouse } from '../services/HouseService';

const houseSchema = object({
    title: string().required('Required field'),
    description: string().required('Required field'),
    price: number().required('Required field'),
    location: string().required('Required field'),
    amenities: string().required('Required field'),
    images: string(),
});

const INITIAL_VALUES = {
    title: '',
    description: '',
    price: '',
    location: '',
    amenities: '',
    images: ''
};

const NewHouse = () => {
    const navigate = useNavigate();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
        initialValues: {
            ...INITIAL_VALUES
        },
        onSubmit: (values) => {
            createHouse(values)
                .then(() => navigate('/'))
                .catch(error => console.error(error))
        },
        validationSchema: houseSchema,
        validateOnBlur: true,
        validateOnChange: true
    })


    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <div className="">
                    <Input
                        name="title"
                        label="Title"
                        placeholder="Ex: 'The best house in the world'"
                        value={values.title}
                        error={touched.title && errors.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="description"
                        label="Description"
                        placeholder="Ex: 'A beautiful house with a great view'"
                        value={values.description}
                        error={touched.description && errors.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="price"
                        type="number"
                        label="Price"
                        placeholder="Ex: '1000'"
                        value={values.price}
                        error={touched.price && errors.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="location"
                        label="Location"
                        placeholder="Ex: 'New York, USA'"
                        value={values.location}
                        error={touched.location && errors.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="amenities"
                        label="Amenities"
                        placeholder="Ex: 'Pool, gym, garden'"
                        value={values.amenities}
                        error={touched.amenities && errors.amenities}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="images"
                        label="Images"
                        placeholder="Ex: 'https://image.com'"
                        value={values.images}
                        error={touched.images && errors.images}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input 
                    name="rooms"
                    label="Rooms"
                    placeholder="Ex: '3'"
                    value={values.rooms}
                    error={touched.rooms && errors.rooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    <Input
                    name="people"
                    label="People"
                    placeholder="Ex: '5'"
                    value={values.people}
                    error={touched.people && errors.people}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <Button type="submit" text="Add house" disabled={!isValid} className="btn btn-primary" />
            </form>
        </div>
    )
}

export default NewHouse;*/

import { object, string, number } from 'yup';
import { useFormik } from 'formik';
import Input from './Input';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { createHouse } from '../services/HouseService';

const houseSchema = object({
    title: string().required('Required field'),
    description: string().required('Required field'),
    price: number().required('Required field'),
    location: string().required('Required field'),
    amenities: string().required('Required field'),
    images: string(),
});

const INITIAL_VALUES = {
    title: '',
    description: '',
    price: '',
    location: '',
    amenities: '',
    images: ''
};

const NewHouse = () => {
    const navigate = useNavigate();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useFormik({
        initialValues: {
            ...INITIAL_VALUES
        },
        onSubmit: (values) => {
            createHouse(values)
                .then(() => navigate('/'))
                .catch(error => console.error(error))
        },
        validationSchema: houseSchema,
        validateOnBlur: true,
        validateOnChange: true
    });

    return (
        <div className="container mx-auto max-w-md mt-8">
            <h1 className="text-3xl font-semibold mb-6">Add New House</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="title"
                    label="Title"
                    placeholder="Ex: 'The best house in the world'"
                    value={values.title}
                    error={touched.title && errors.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="description"
                    label="Description"
                    placeholder="Ex: 'A beautiful house with a great view'"
                    value={values.description}
                    error={touched.description && errors.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="price"
                    type="number"
                    label="Price"
                    placeholder="Ex: '1000'"
                    value={values.price}
                    error={touched.price && errors.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="location"
                    label="Location"
                    placeholder="Ex: 'New York, USA'"
                    value={values.location}
                    error={touched.location && errors.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="amenities"
                    label="Amenities"
                    placeholder="Ex: 'Pool, gym, garden'"
                    value={values.amenities}
                    error={touched.amenities && errors.amenities}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="images"
                    label="Images"
                    placeholder="Ex: 'https://image.com'"
                    value={values.images}
                    error={touched.images && errors.images}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="rooms"
                    label="Rooms"
                    placeholder="Ex: '3'"
                    value={values.rooms}
                    error={touched.rooms && errors.rooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    name="people"
                    label="People"
                    placeholder="Ex: '5'"
                    value={values.people}
                    error={touched.people && errors.people}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Button type="submit" text="Add house" disabled={!isValid} className="btn btn-primary" />
            </form>
        </div>
    )
}

export default NewHouse;
