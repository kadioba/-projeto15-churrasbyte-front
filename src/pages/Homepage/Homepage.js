import { useContext, useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { MainHomeContainer } from "./styled"
import axios from "axios"
import FilterContext from "../../contexts/FilterContext";


export default function Homepage() {
    const [products, setProducts] = useState([]);
    const { filter, searchWord } = useContext(FilterContext)

    let urlRequire = "get-products";

    useEffect(() => {
        const urlQueryString = window. location. href;

        if(urlQueryString.includes("?filter=")) {
            urlRequire = "get-products/?filter="+(urlQueryString.split("?filter=")[1])
        }
        
        axios.get(`${process.env.REACT_APP_API_URL}/${urlRequire}`)
            .then((res) =>{
                const filteredProduct = []
                const list = res.data;
                list.forEach(p => {
                    (p.name.toLowerCase()).includes(searchWord)&&filteredProduct.push(p);
                });
                setProducts(filteredProduct)
            })
            
            .catch((err) => {
                alert(err.response.data)
            })
    }, [filter, searchWord])

    return (
        <MainHomeContainer>
            {products.map((p) => (
                <ProductCard 
                key= {p._id}
                img = {p.imageURL}
                name = {p.name}
                price = {p.price}
                stock = {p.stock}
                id = {p._id}
                />
            ))}
        </MainHomeContainer>
    )
}