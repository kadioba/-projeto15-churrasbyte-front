import axios from "axios"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import { useContext } from "react"


export function useSignUp() {
    const navigate = useNavigate()

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
            .then(res => navigate("/login"))
            .catch(err => alert(err.response.data))
    }
}

export function useLogin() {
    const navigate = useNavigate()
    const { setToken, setUsername } = useContext(AuthContext)

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, body)
            .then(res => {
                setToken(res.data.token)
                setUsername(res.data.userName)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("username", res.data.userName)
                navigate("/")
            })
            .catch((err) => alert(err.response.data))
    }
}