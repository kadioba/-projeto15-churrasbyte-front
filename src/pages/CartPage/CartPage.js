import styled from "styled-components"
import CartContext from "../../contexts/CartContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContainer, CartItem, CartItemActions, CartItemButton, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, CartItemsContainer, CartTotal, CartTotalContainer, CheckoutButton } from "./styled";

export default function CartPage() {

    const { cart, setCart } = useContext(CartContext)
    const { token, setToken } = useContext(AuthContext)

    const [cartToMap, setCartToMap] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (token === null || token === undefined || token === "") {
            setCartToMap(cart)
        }
        if (token) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promisse = axios.get(`${process.env.REACT_APP_API_URL}/get-cart`, config)

            promisse.then((res) => {
                setCartToMap(res.data)
            })
            promisse.catch((error) => {
                alert(error.response.data)
            })
        }
    }, [cart]);

    function getTotalPrice() {
        let total = 0;
        for (let i = 0; i < cartToMap.length; i++) {
            total = total + (cartToMap[i].price * cartToMap[i].quantity)
        }
        return total.toFixed(2)
    }

    function modifyQuantity(_id, quantity) {

        if (token === null || token === undefined || token === "") {
            const existingProduct = cart.find(item => item._id === _id)
            if (existingProduct) {
                const newCart = cart.map(item => {
                    if (item._id === _id) {
                        item.quantity = quantity
                    }
                    return item

                })
                setCart(newCart)
            }

        }
        if (token) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promisse = axios.put(`${process.env.REACT_APP_API_URL}/update-one/${_id}`, { quantity }, config)

            promisse.then((res) => {
                setCartToMap(res.data)
            })
            promisse.catch((error) => {
                alert(error.response.data)
            })
        }
    }

    if (!cartToMap) return <></>

    return (
        <CartContainer>
            <CartItemsContainer>
                {cartToMap.map((item) => (
                    <CartItem key={item._id}>
                        <CartItemImage src={item.imageURL} alt={item.name} />
                        <CartItemInfo>
                            <CartItemName>{item.name}</CartItemName>
                            <CartItemPrice>${item.price}</CartItemPrice>
                        </CartItemInfo>
                        <CartItemActions>
                            <CartItemButton onClick={() => modifyQuantity(item._id, (item.quantity + 1))}>+</CartItemButton>
                            <span>{item.quantity}</span>
                            <CartItemButton onClick={() => modifyQuantity(item._id, (item.quantity - 1))}>-</CartItemButton>
                        </CartItemActions>
                    </CartItem>
                ))}
            </CartItemsContainer>
            <CartTotalContainer>
                <CartTotal>Total: ${getTotalPrice()}</CartTotal>
                <CheckoutButton onClick={() => navigate("/checkout")}>Finalizar Compra</CheckoutButton>
            </CartTotalContainer>
        </CartContainer>
    )
}


