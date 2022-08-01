import React, { useState } from 'react'
import classes from "../../styles/login-form.module.scss"
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { userService } from '../../services';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router=useRouter()
    const { register, handleSubmit, formState } = useForm();

    const submitHandler=(value)=>{
        console.log(value)
        return userService.login({email:value.email,password:value.password}).then((res)=>{
            if(res){
                router.push("/")
            }
        })
    }

  return (
    <div className={classes.login_box + ' p-3'}>
        <h4>Login</h4>

            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("email")}
                 id="email" className="form-control" name="email" placeholder="email" />
                <input
                    {...register("password")}
                 className="form-control" type="password" id="password" name="password" placeholder="Password" />
                <p>{`Don't`} you have a account? <Link href="/account/register">Register!</Link></p>
                <button className='btn btn-warning' type="submit">Login</button>
            </form>
    </div>
  )
}

export default LoginPage