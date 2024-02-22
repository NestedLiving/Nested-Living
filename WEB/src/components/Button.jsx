

// eslint-disable-next-line react/prop-types
const Button = ({ type, onClick, text, disabled }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn-primary fw-medium rounded-lg text-sm px-5 py-2.5 text-center ${disabled ? 'disabled' : ''}`}
        >
            {text}
        </button>
    )
}

export default Button;