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

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    function addToCart(id) {
        if (token === null || token === undefined || token === "") {
            setCart([...cart, product])
        }
        else
            console.log(id)

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
                <ItensNumberSelector type="number" />
                <AddToCartButton onClick={() => addToCart(product._id)}>Adicionar ao carrinho</AddToCartButton>
            </DescriptionContainer>
        </ProductContainer>
    )
}

