import { ProductCardContainer, ProductStockContainer, ProductImg, ProductsInfoContainer, ProductTitle, ProductPrice, ProductBuyButton } from "./styled"
import { FaShoppingCart } from "react-icons/fa"

export default function ProductCard() {
    const testCard = {
        name: "Faquinha de serra lul lul lul lulu lu lu lululu",
        description: "Eh uma faquinha de serra, boa pra cortar pao e ximiar as paradas",
        price: 1000,
        imageURL: "https://lojastem.com/wp-content/uploads/2022/02/Faca_de_Churrasco_Leme_em_Ao_Inox_Preto_Tramontina-600x600.jpg",
        stock: 15,
        category: "vazio"
    }

    return (
        <ProductCardContainer>
            <ProductStockContainer>
                <p> RESTAM </p>{testCard.stock} <p>UNID.</p>
            </ProductStockContainer>
            <ProductImg src={testCard.imageURL} />
            <ProductsInfoContainer>
                <ProductTitle> {testCard.name} </ProductTitle>
                <ProductPrice> R$ {(testCard.price).toFixed(2)}</ProductPrice>
                <p>À vista</p>
            </ProductsInfoContainer>

            <ProductBuyButton> <FaShoppingCart /> COMPRAR </ProductBuyButton>
        </ProductCardContainer>
    )
}