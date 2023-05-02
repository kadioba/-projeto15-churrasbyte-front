import { useContext, useEffect, useState } from "react"
import { ProfileInfoContainer, ProfilePageContainer, ImageContainer, ImageEditorForm } from "./styled"
import AuthContext from "../../contexts/AuthContext";
import { FaShoppingCart, FaPencilAlt, FaAngleRight } from "react-icons/fa"
import useDontHaveToken from "../../hooks/useDontHaveToken";
import axios from "axios";
import PurchaseSection from "./PurchaseSection";


export default function ProfilePage() {
    const { userImage, username, token, setImage } = useContext(AuthContext)
    const [openImageEditor, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [purchase, setPurchase] = useState([])

    useDontHaveToken()

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function submitInput(e) {
        e.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/updateImage`, { image: value }, config)
            .then((res) => {
                setImage(value);
                localStorage.setItem("image", value);
            }).catch((err) => {
                alert(err.response.data)
            });

        setOpen(false);
        setValue("");
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/invoice`, config)
            .then((res) => {
                setPurchase(res.data)
            }).catch((err) => {
                alert(err.response.data)
            });
    }, [])

    return (
        <ProfilePageContainer>
            <ProfileInfoContainer>
                <ImageContainer>
                    <img
                        src={userImage} />
                    <button onClick={() => setOpen(!openImageEditor)}>
                        <FaPencilAlt />
                    </button>

                    <ImageEditorForm onSubmit={submitInput} open={openImageEditor} >
                        <input
                            placeholder="Cole a URL da imagem"
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}>
                        </input>
                        <button type="submit"> <FaAngleRight /> </button>
                    </ImageEditorForm>
                </ImageContainer>

                <div>
                    <h1> Bem-vindo(a), {username} </h1>
                </div>
            </ProfileInfoContainer>

            <h2> <FaShoppingCart /> &nbsp; RESUMO DOS SEUS ÚLTIMOS PEDIDOS  </h2>

            {purchase.map((p) => (
                <PurchaseSection key={p._id} total={p.total} cart={p.cart} />
            ))}
        </ProfilePageContainer>
    )
}