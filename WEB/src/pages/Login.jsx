/*import Input from "../components/Input";
import { useFormik } from "formik";
import { string, object } from "yup";
import Button from "../components/Button";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";

const userSchema = object({
    email: string().email('Enter a valid email').required('Required field'),
    password: string().min(8, 'Password must be at least 8 characters').required('Required field')
});

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, errors, touched, isValid, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            login(values)
                .then(() => navigate('/profile'))
        },
        validationSchema: userSchema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
    })

    return (
        <div className="container mt-5">
            <h1 className='text-center mb-4'>Sign in to your account</h1>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                value={values.email}
                                error={touched.email && errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Enter your password"
                                value={values.password}
                                error={touched.password && errors.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <Button className="w-100" disabled={!isValid} text="Sign in" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;*/
import Input from "../components/Input";
import { useFormik } from "formik";
import { string, object } from "yup";
import Button from "../components/Button";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Login.css"

const userSchema = object({
    email: string().email("Enter a valid email").required("Required field"),
    password: string()
        .min(8, "Password must be at least 8 characters")
        .required("Required field"),
});

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, errors, touched, isValid, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            login(values)
                .then(() => navigate("/profile"));
        },
        validationSchema: userSchema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
    });

    return (
        <motion.div
            className="login-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="login-title">Sign in to your account</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Input
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={values.email}
                            error={touched.email && errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={values.password}
                            error={touched.password && errors.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <Button className="w-100" disabled={!isValid} text="Sign in" />
                </form>
            </div>
        </motion.div>
    );
};

export default Login;

