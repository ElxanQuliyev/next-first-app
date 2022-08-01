import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import classes from "../../styles/login-form.module.scss"
import Link from 'next/link';
import { register } from '../../slices/auth';
import { useSelector,useDispatch } from 'react-redux';
import { clearMessage } from '../../slices/message';
const RegisterPage = () => {
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const submitHandler=(values)=>{
        const {firstname,lastname,email,password,confirmPassword}=values;
        console.log(values)
        setSuccessful(false);
        dispatch(register(firstname,lastname,email,password,confirmPassword))
        .then(()=>setSuccessful(true))
        .catch(()=>setSuccessful(false))
    }

return (
    <div className={classes.login_box + ' p-3'}>
        <h4>Register</h4>
        <Formik
            initialValues={{
                email: '',
                firstname:'',
                lastname:'',
                password: '',
                confirmPassword: '',

            }}
            onSubmit={submitHandler}
        >
            <Form>
                <Field id="firstname" className="form-control" name="firstname" placeholder="Firstname" />
                <Field id="lastname" className="form-control" name="lastname" placeholder="Lastname" />
                <Field id="email" className="form-control" name="email" placeholder="Username" />
                <Field className="form-control" type="password" id="password" name="password" placeholder="Password" />
                <Field className="form-control" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                
                <p>Have you account? <Link href="/account/login">Login!</Link></p>
                <button className='btn btn-warning' type="submit">Register</button>
            </Form>
        </Formik>
    </div>
  )
}

export default RegisterPage