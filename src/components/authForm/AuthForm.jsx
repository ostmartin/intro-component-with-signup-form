import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import TermsAndServices from '../termAndServices/TermsAndServices';

import './authForm.scss';
import ErrorIcon from '../../../public/images/icon-error.svg'

const CustomField = ({icon, ...props}) => {
    const [field, meta] = useField(props);

    return (
      <div className='custom__input'>
          <input  
            {...field} 
            {...props} 
            className={meta.touched && meta.error ? 'error__input' : ''} 
            placeholder={meta.touched && meta.error ? (props.type === "email" ? 'email@example/com' : '') : props.placeholder}
            />
        {meta.touched && meta.error ?
          (
            <>
                <div className="error"><em>{meta.error}</em></div>
                <img src={icon} alt='error' />
            </>
          ) : null}
      </div>
    );
}

const AuthForm = () => {
    return(
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('First name cannot be empty'),
                surname: Yup.string().required('Last name cannot be empty'),
                email: Yup.string().email('Looks like this is not an email').required('Email cannot be empty'),
                password: Yup.string().required('Password cannot be empty')
            })}
            onSubmit={values => console.log(values)}
            >
            <Form className='auth__form'>
                <CustomField icon={ErrorIcon} type='text' name='name' placeholder='First Name'/>
                <CustomField icon={ErrorIcon} type='text' name='surname' placeholder='Last Name'/>
                <CustomField icon={ErrorIcon} type='email' name='email' placeholder='Email Address'/>
                <CustomField icon={ErrorIcon} type='password' name='password' placeholder='Password'/>
                <button type='submit'>Claim your free trial</button>
                <TermsAndServices/>
            </Form>
        </Formik>
    )
}

export default AuthForm;