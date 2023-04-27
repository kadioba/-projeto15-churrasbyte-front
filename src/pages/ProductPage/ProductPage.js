import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddToCartButton, DescriptionContainer, ImageContainer, ProductContainer, ProductName, ProductPrice, StockInfo } from "./styled";

export default function ProductPage() {

    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/get-products/${id}`);

        promisse.then(res => {
            setProduct(res.data)
            console.log(res.data)
        });
        promisse.catch(res => {
            console.log(res)
        })
    });

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
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
            </DescriptionContainer>
        </ProductContainer>
    )
}

