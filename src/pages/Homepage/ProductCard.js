import { useNavigate } from "react-router-dom"
import { ProductCardContainer, ProductStockContainer, ProductImg, ProductsInfoContainer, ProductTitle, ProductPrice, ProductBuyButton } from "./styled"
import { FaShoppingCart } from "react-icons/fa"

export default function ProductCard({ name, price, img, stock, id }) {
    const navigate = useNavigate();

    return (
        <ProductCardContainer>
            <ProductStockContainer>
                <p> RESTAM </p>{stock} <p>UNID.</p>
            </ProductStockContainer>
            <ProductImg src={img} onClick={() => navigate(`/product/${id}`)} />
            <ProductsInfoContainer>
                <ProductTitle onClick={() => navigate(`/product/${id}`)}> {name} </ProductTitle>
                <ProductPrice> R$ {(price).toFixed(2)}</ProductPrice>
                <p>À vista</p>
            </ProductsInfoContainer>

            <ProductBuyButton onClick={() => navigate(`/product/${id}`)}> <FaShoppingCart /> COMPRAR </ProductBuyButton>
        </ProductCardContainer>
    )
}