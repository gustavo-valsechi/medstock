import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "*"
    },
    auth: {
        username: 'user',
        password: 'password'
    }
})
