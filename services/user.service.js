import axios from "axios"
import authHeader from "./auth-header"

const getUserBoard=()=>{
    return axios.get(`${process.env.API_URL}/account/profile`,
     {header:authHeader()})
}

const UserService={
    getUserBoard
}

export default UserService;