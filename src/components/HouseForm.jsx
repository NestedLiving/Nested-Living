import { object, string, number, date, array } from 'yup';
import { useFormik } from 'formik';
import Input from './Input';
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';
import { createHouse, editHouse, getHouseDetail } from '../services/HouseService';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './HouseForm.css';
import InputWithDatePicker from './InputWithDatePicker'; // Importa el nuevo componente


const houseSchema = object({
  title: string().required('Required field'),
  description: string().required('Required field'),
  price: number().required('Required field'),
  location: string().required('Required field'),
  amenities: array().of(string()).required('Required field'),
  images: string(),
  people: number().required('Required field'),
  rooms: number().required('Required field'),
  startDate: date().required('Required field'), // Campo requerido para startDate
  endDate: date().required('Required field'),
});

const INITIAL_VALUES = {
  title: '',
  description: '',
  price: 0,
  location: '',
  amenities: [],
  images: '',
  people: 0,
  rooms: 0,
  startDate: null,
  endDate: null,
};

const NewHouse = ({ initialValues }) => {
  const navigate = useNavigate();
  const { id } = useParams();
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
      const data = new FormData();
      Object.keys(values).forEach((keyValue) => {
        if (keyValue === 'images') {
          for (let i = 0; i < values.images.length; i++) {
            const image = values.images[i];
            data.append('images', image);
          }
        } else {
          data.append(keyValue, values[keyValue]);
        }
      });

      // Verificar si estamos creando o editando
      const submitFunction = id ? editHouse : createHouse;

      submitFunction(data)
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

  useEffect(() => {
    if (id) {
      getHouseDetail(id)
        .then((houseDB) => {
          setFieldValue('id', houseDB.id);
          // ... (actualizar otros campos según sea necesario)
        })
        .catch((error) => console.log(error));
    }
  }, [id, setFieldValue]);

  return (
    <div className="container1 mx-auto max-w-md " style={{ marginTop: '70px' }}>
      <h1 className="text-3xl font-semibold mb-6 align-items-center">House form</h1>
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
        <div>
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
            <label htmlFor="wifi">Cinema</label>
          </div>
          {/* Agrega más checkboxes según sea necesario */}
        </div>
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
        <InputWithDatePicker
          name="startDate"
          value={values.startDate}
          onChange={setFieldValue}
          placeholder="Select start date"
        />
        <InputWithDatePicker
          name="endDate"
          value={values.endDate}
          onChange={setFieldValue}
          placeholder="Select end date"
        />
        <Button
          type="submit"
          text='Add house' // Cambiar el texto del botón según si hay un ID
          disabled={!isValid}
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default NewHouse;
