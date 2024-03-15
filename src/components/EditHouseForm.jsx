import { object, string, number, date, array } from 'yup';
import { useFormik } from 'formik';
import Input from './Input';
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';
import { createHouse, editHouse, getHouseDetail } from '../services/HouseService';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const houseSchema = object({
    title: string().required('Required field'),
    description: string().required('Required field'),
    price: number().required('Required field'),
    location: string().required('Required field'),
    amenities: array().min(1, 'Select at least one amenity').required('Required field'),
    images: string(),
    startDate: date().required('Required field'),  // Campo requerido para startDate
    endDate: date().required('Required field'),
    people: number().required('Required field'),
    rooms: number().required('Required field'),
});
const EditHouse = ({ initialValues }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const INITIAL_VALUES = {
        title: initialValues.title,
        description: initialValues.description,
        price: initialValues.price,
        location: initialValues.location,
        amenities: initialValues.amenities,
        people: initialValues.people,
        rooms: initialValues.rooms,
        startDate: initialValues.startDate,
        endDate: initialValues.endDate,
    };
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        setFieldValue,
    } = useFormik({
        initialValues: {
            ...INITIAL_VALUES,
        },
        onSubmit: (values) => {
            const submitFunction = id ? editHouse : createHouse;
            submitFunction(id, values)
                .then(() => {
                    navigate('/');
                })
                .catch((err) => console.error(err));
        },
        validationSchema: houseSchema,
        validateOnBlur: true,
        validateOnChange: true,
    });
    console.log('test', initialValues)
    console.log(errors)
    useEffect(() => {
        if (id) {
            getHouseDetail(id)
                .then((houseDB) => {
                    setFieldValue('id', houseDB.id);
                })
                .catch((error) => console.log(error));
        }
    }, [id, setFieldValue]);
    return (
        <div className="container mx-auto max-w-md mt-8">
            <h1 className="text-3xl font-semibold mb-6">Add House</h1>
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
                <label>Amenities:</label>
                <div>
                    <input
                        type="checkbox"
                        id="pool"
                        name="amenities"
                        value="Pool"
                        checked={values.amenities.includes('Pool')}
                        onChange={handleChange}
                    />
                    <label htmlFor="pool">Pool</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="gym"
                        name="amenities"
                        value="Gym"
                        checked={values.amenities.includes('Gym')}
                        onChange={handleChange}
                    />
                    <label htmlFor="gym">Gym</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="garden"
                        name="amenities"
                        value="Garden"
                        checked={values.amenities.includes('Garden')}
                        onChange={handleChange}
                    />
                    <label htmlFor="garden">Garden</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Barbecue"
                        name="amenities"
                        value="Barbecue"
                        checked={values.amenities.includes('Barbecue')}
                        onChange={handleChange}
                    />
                    <label htmlFor="barbecue">Barbecue</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Wifi"
                        name="amenities"
                        value="Wifi"
                        checked={values.amenities.includes('Wifi')}
                        onChange={handleChange}
                    />
                    <label htmlFor="wifi">Wifi</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Cinema"
                        name="amenities"
                        value="Cinema"
                        checked={values.amenities.includes('Cinema')}
                        onChange={handleChange}
                    />
                    <label htmlFor="cinema">Cinema</label>
                </div>
                {/* Agrega más checkboxes según sea necesario */}
                {/*
        <Input
          name="images"
          label="Images"
          type="file"
          multiple
          placeholder="Ex: 'https://image.com'"
          error={touched.images && errors.images}
          onChange={(event) => {
            setFieldValue('images', event.target.files);
          }}
          onBlur={handleBlur}
        />
        */}
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
                <DatePicker
                    selected={values.startDate}
                    onChange={(date) => {
                        console.log('Start Date Selected:', date);
                        setFieldValue('startDate', date);
                    }}
                    selectsStart
                    startDate={values.startDate}
                    endDate={values.endDate}
                    dateFormat="dd-MM-yyy"
                    placeholderText="Select start date"
                />
                <label>End Date:</label>
                <DatePicker
                    selected={values.endDate}
                    onChange={(date) => setFieldValue('endDate', date)}
                    selectsEnd
                    startDate={values.startDate}
                    endDate={values.endDate}
                    minDate={values.startDate}
                    dateFormat="dd-MM-yyy"
                    placeholderText="Select end date"
                />
                <Button
                    type="submit"
                    text="Add house"
                    disabled={!isValid}
                    className="btn btn-primary"
                />
            </form>
        </div>
    );
};
export default EditHouse;