import axios from "axios";
const register=(Firstname,Lastname,Email,Password,ConfirmPassword)=>{
    console.log(Firstname)
    return axios.post(`${process.env.API_URL}/account/register`,{Firstname,Lastname,Email,Password,ConfirmPassword})
}
const login =(email,password)=>{
    return axios.post(`${process.env.API_URL}/account/login`,{email,password})
    .then(response=>{
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data;
    })
}
const logout=()=>{
   localStorage.removeItem("user")
}
const AuthService={
    login,register,logout
}

export default AuthService;