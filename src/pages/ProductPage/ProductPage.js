import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddToCartButton, DescriptionContainer, ImageContainer, ItensNumberSelector, ProductContainer, ProductName, ProductPrice, StockInfo } from "./styled";
import CartContext from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";

export default function ProductPage() {

    const { cart, setCart } = useContext(CartContext);
    const { token, setToken } = useContext(AuthContext)

    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()

    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/get-products/${id}`);

        promisse.then(res => {
            setProduct(res.data)
        });
        promisse.catch(res => {
            console.log(res)
        })
    });

    function addToCart() {
        const productToCart = { price: product.price, _id: product._id, quantity, name: product.name, imageURL: product.imageURL }

        if (quantity > product.stock) return alert("A quantidade selecionada é maior que a disponivel")
        if (token === null || token === undefined || token === "") {
            setCart([...cart, productToCart])
        }
        if (token) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promisse = axios.post(`${process.env.REACT_APP_API_URL}/add-to-cart`, productToCart, config)

            promisse.then(() => {
                console.log("Produto adicionado com sucesso")
            })
            promisse.catch((error) => {
                alert(error.response.data)
            })
        }
    }

    if (!product) {
        return (
            <></>
        )
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <img src={product.imageURL} alt={product.name} />
                <p>{product.description}</p>
            </ImageContainer>
            <DescriptionContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                <StockInfo>Quantidade em estoque: {product.stock}</StockInfo>
                <ItensNumberSelector type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                <AddToCartButton onClick={addToCart}>Adicionar ao carrinho</AddToCartButton>
            </DescriptionContainer>
        </ProductContainer>
    )
}

