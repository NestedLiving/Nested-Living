import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputWithDatePicker = ({ name, value, onChange, placeholder }) => {
    return (
        <div className="form-group d-flex">
            <DatePicker
                selected={value}
                onChange={date => onChange(name, date)}
                dateFormat="dd-MM-yyyy"
                placeholderText={placeholder}
            />
        </div>
    );
};

export default InputWithDatePicker;