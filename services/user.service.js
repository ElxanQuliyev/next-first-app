import { BehaviorSubject } from "rxjs"
import { fetchWrapper } from "../helper/fetch-wrapper"
import getConfig from 'next/config';
const {publicRuntimeConfig} =getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const userSubject=new BehaviorSubject(process.browser 
    &&
     JSON.parse(localStorage.getItem("user")))
export const userService={
    user:userSubject.asObservable(),
    get userValue(){return userSubject.value},
    login,
    register,
  
}


function login ({email,password}){
    return fetchWrapper.post(`${baseUrl}/account/login`,{email,password})
    .then(user=>{
        if(user && user.token){
            userSubject.next(user)
            localStorage.setItem("user",JSON.stringify(user))
            return user;
        }
        return null;
    })
}

function register (user){
    console.log(user)
    return fetchWrapper.post(`${baseUrl}/account/register`,user)
}