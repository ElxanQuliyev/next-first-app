import React, { useEffect, useState } from 'react'
import classes from "../../styles/login-form.module.scss"
import Link from 'next/link';
import { useSelector,useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userService } from '../../services';
import { useRouter } from 'next/router';
const RegisterPage = () => {
    const router=useRouter();
    const [successful, setSuccessful] = useState(false);
    const { register, handleSubmit, formState } = useForm();


    const submitHandler=(values)=>{
        console.log(values)
        return userService.register(values)
        .then((c)=>{
            setSuccessful(true);
            console.log(c)
            if(c.status===201){
                router.push("/account/login")
            }
        })
        .catch((e)=>console.log(e))
    }
    console.log(successful)


return (
    <div className={classes.login_box + ' p-3'}>
        <h4>Register</h4>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input id="firstname"
                     className="form-control" name="firstname" placeholder="Firstname" 
                     {...register('firstname')} 
                     />
                <input id="lastname" 
                className="form-control"
                 name="lastname" placeholder="Lastname" 
                 {...register('lastname')}
                 />
                <input id="email"
                 className="form-control" name="email" placeholder="Username"
                 {...register('email')}
                 />
                <input className="form-control" type="password" id="password" name="password" 
                placeholder="Password"
                {...register('password')}
                />
                <input className="form-control" type="password"
                 id="confirmPassword" name="confirmPassword"
                  placeholder="Confirm Password" 
                  {...register('confirmPassword')}
                  />
                <p>Have you account? <Link href="/account/login">Login!</Link></p>
                <button className='btn btn-warning' type="submit">Register</button>
            </form>
    </div>
  )
}

export default RegisterPage