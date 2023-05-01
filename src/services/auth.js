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
    const { setToken, setUsername, setImage, userImage } = useContext(AuthContext)

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, body)
            .then(res => {
                setToken(res.data.token)
                setUsername(res.data.userName)
                if (res.data.userImage === undefined || res.data.userImage === null) {
                    setImage("https://images.nightcafe.studio//assets/profile.png")
                    localStorage.setItem("image","https://images.nightcafe.studio//assets/profile.png")
                }
                else {
                    setImage(res.data.userImage);
                    localStorage.setItem("image", res.data.userImage);
                }

                localStorage.setItem("token", res.data.token)
                localStorage.setItem("username", res.data.userName)
                navigate("/")
            })
            .catch((err) => alert(err.response.data))
    }
}

export function useLogout() {
    const { token, setToken, setUsername } = useContext(AuthContext)
    const navigate = useNavigate()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    return () => {
        axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
            .then(() => {
                setToken(undefined)
                setUsername(undefined)
                localStorage.clear()
                navigate("/")
            })
            .catch((err) => alert(err.response.data))
    }
}