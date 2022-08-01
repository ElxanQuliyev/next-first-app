import { userService } from '../services/user.service';


export const fetchWrapper={
    get,post,put
}

function get(url){
    const requestOption={
     method:"GET",
     headers:authHeader()
    }
    return fetch(url,requestOption).then(handleResponse);
}

function post(url,body){
    const requestOption={
        method:"POST",
        headers:{"Content-Type":"application/json"},//header authentication,
        body:JSON.stringify(body)
     }
        return fetch(url,requestOption).then(handleResponse)
}


function put(url,body){
    const requestOption={
        method:"POST",
        headers:{"Content-Type":"application/json"},//header authentication,
        body:JSON.stringify(body)
     }
        return fetch(url,requestOption).then(handleResponse)
}

function authHeader(){
    const user=userService.userValue;
    const isLogged=user && user.token;

    if(isLogged){
        return {Authorization:`Bearer ${user.token}`}
    }
    else{
        return {};
    }
}


function handleResponse (response){
    return response.text().then(text=>{
        const data=JSON.parse(text);
        return data;
    })
}