import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import classes from "../../styles/login-form.module.scss"
import Link from 'next/link';
const LoginPage = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        // loginAction({email,password})
    }

  return (
    <div className={classes.login_box + ' p-3'}>
        <h4>Login</h4>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}

            onSubmit={() => {

            }}
        >
            <Form>
                <Field id="username" className="form-control" name="username" placeholder="Username" />
                <Field className="form-control" type="password" id="password" name="password" placeholder="Password" />
                <p>{`Don't`} you have a account? <Link href="/account/register">Register!</Link></p>
                <button className='btn btn-warning' type="submit">Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default LoginPage