// eslint-disable-next-line react/prop-types
const Input = ({ value, onChange, name, placeholder, type, label, error, onBlur, multiple }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label mb-2">{label}</label>
            <input
                type={type} name={name} id={name} value={value} onChange={onChange} placeholder={placeholder}
                onBlur={onBlur}
                className="form-control" multiple={multiple}
            />
            {error && <div className="text-danger mt-2">{error}</div>}
        </div>
    )
}

export default Input;