import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export default function useHaveToken() {
    const { username, token } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token && username) {
            navigate("/")}
    }, [])
}