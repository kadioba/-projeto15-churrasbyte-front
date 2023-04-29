import ProductCard from "./ProductCard"
import { MainHomeContainer } from "./styled"
const TestCard = {
    name: "Faquinha de serra",
    description: "Eh uma faquinha de serra, boa pra cortar pao e ximiar as paradas",
    price: 1000,
    imageURL: "https://lojastem.com/wp-content/uploads/2022/02/Faca_de_Churrasco_Leme_em_Ao_Inox_Preto_Tramontina-600x600.jpg",
    stock: 5,
    category: "vazio"
}


export default function Homepage() {
            //{ name, description, price: Number(price), imageURL, stock: Number(stock), category }
    return (
        <MainHomeContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </MainHomeContainer>
    )
}