import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export default function useDontHaveToken() {
    const { userName, token } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token || !userName) navigate("/")
    }, [])
}