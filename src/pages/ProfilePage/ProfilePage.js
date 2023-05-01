import { useContext, useEffect, useState } from "react"
import { ProfileInfoContainer, ProfilePageContainer, ImageContainer, ImageEditorForm } from "./styled"
import AuthContext from "../../contexts/AuthContext";
import { FaShoppingCart, FaPencilAlt, FaAngleRight } from "react-icons/fa"
import useDontHaveToken from "../../hooks/useDontHaveToken";
import axios from "axios";


export default function ProfilePage() {
    const { userImage, username, token, setImage } = useContext(AuthContext)
    const [openImageEditor, setOpen] = useState(false)
    const [value, setValue] = useState("")

    useDontHaveToken()

    function submitInput(e) {
        e.preventDefault();
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.put(`${process.env.REACT_APP_API_URL}/updateImage`, {image: value}, config)
            .then((res) => {
                setImage(value);
                localStorage.setItem("image", value);
            }).catch((err) => {
                alert(err.response.data)
            });


        setOpen(false);
        setValue("");
    }

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
                        <button> <FaAngleRight /> </button>
                    </ImageEditorForm>
                </ImageContainer>

                <div>
                    <h1> Bem-vindo(a), {username} </h1>
                </div>
            </ProfileInfoContainer>

            <h2> <FaShoppingCart /> &nbsp; RESUMO DO SEU ÚLTIMO PEDIDO  </h2>
        </ProfilePageContainer>
    )
}