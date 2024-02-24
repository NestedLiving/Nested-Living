import { object, string } from 'yup';
import Input from '../components/Input';
import { useFormik } from 'formik';
import { register } from '../services/AuthService'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const userSchema = object({
    username: string().required('Required field'),
    email: string().email('Enter a valid email').required('Required field'),
    password: string().min(8, 'Password of at least 8 characters').required('Required field'),
});

const Register = () => {
    const navigate = useNavigate();
    const { values, errors, touched, isValid, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            register(values)
                .then(() => navigate('/login'))
                .catch((error) => console.error(error))
        },
        validationSchema: userSchema,
        validateOnBlur: true,
        validateOnMount: true,
    })

    return (

        < div >
            <h1 className=''>Register your account</h1>

            <form onSubmit={handleSubmit}>
                <div className="">
                    <Input
                        name="username"
                        label="User name"
                        placeholder="Ex: 'manolitogafotas'"
                        value={values.username}
                        error={touched.username && errors.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Ex: 'manolitogafotas@gmail.com'"
                        value={values.email}
                        error={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Ex: '12345678'"
                        value={values.password}
                        error={touched.password && errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <Button type="submit" text="Create account" disabled={!isValid} className="btn btn-primary" />
            </form>
        </div >
    )
}

export default Register;