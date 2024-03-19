/*import { object, string, mixed } from 'yup';
import { useFormik } from 'formik';
import Input from "../components/Input";
import { register } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Register.css';
import video from '../assets/video/video-nested.mp4';

const userSchema = object({
  username: string().required('Required field'),
  email: string().email('Enter a valid email').required('Required field'),
  password: string().min(8, 'Password of at least 8 characters').required('Required field'),
  avatar: mixed().required('Required field')
});

const Register = () => {
  const navigate = useNavigate()
  const { values, errors, touched, isValid, setFieldValue, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      avatar: ''
    },
    onSubmit: (values) => {
      const data = new FormData()
      Object.keys(values).forEach(keyValue => {
        data.append(keyValue, values[keyValue])
      })

      register(data)
        .then(() => {
          navigate('/login')
        })
        .catch(err => console.error(err))
    },
    validationSchema: userSchema,
    validateOnBlur: true,
    validateOnMount: true,
  })

  console.log(values)

  return (
    <div className="register-container">
      <div className="centered-container">
        <h1 className="register-title">Register your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              name="username"
              label="User name"
              placeholder="Ex: 'manolitogafotas'"
              value={values.username}
              error={touched.username && errors.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <Input
              name="avatar"
              type="file"
              label="Add your photo"
              error={touched.avatar && errors.avatar}
              onChange={(event) => {
                setFieldValue("avatar", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
            />
          </div>
          <Button extraClassName="mt-4" text="Create account" disabled={!isValid} />
        </form>
      </div>
      <div className="register-video">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Register;*/

import { object, string, mixed } from 'yup';
import { useFormik } from 'formik';
import Input from "../components/Input";
import Button from '../components/Button';
import { register } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import video from '../assets/video/video-nested.mp4';
import './Register.css';

const userSchema = object({
  username: string().required('Required field'),
  email: string().email('Enter a valid email').required('Required field'),
  password: string().min(8, 'Password of at least 8 characters').required('Required field'),
  avatar: mixed().required('Required field')
});

const Register = () => {
  const navigate = useNavigate()
  const { values, errors, touched, isValid, setFieldValue, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      avatar: ''
    },
    onSubmit: (values) => {
      const data = new FormData()
      Object.keys(values).forEach(keyValue => {
        data.append(keyValue, values[keyValue])
      })

      register(data)
        .then(() => {
          navigate('/login')
        })
        .catch(err => console.error(err))
    },
    validationSchema: userSchema,
    validateOnBlur: true,
    validateOnMount: true,
  })

  return (
    <div className="register-container">
      <div className="centered-container1">
        <div className="register-form">
          <h1 className="register-title">Register your account</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                name="username"
                label="User name"
                placeholder="Ex: 'manolitogafotas'"
                value={values.username}
                error={touched.username && errors.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <Input
                name="avatar"
                type="file"
                label="Add your photo"
                error={touched.avatar && errors.avatar}
                onChange={(event) => {
                  setFieldValue("avatar", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
              />
            </div>
            <Button extraClassName="mt-4" text="Create account" disabled={!isValid} />
          </form>
        </div>
        <div className="register-video">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Register;


