import styled from "styled-components"
import CartContext from "../../contexts/CartContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

export default function CartPage() {

    const { cart, setCart } = useContext(CartContext)
    const { token, setToken } = useContext(AuthContext)

    const [cartToMap, setCartToMap] = useState(null)
    console.log(cartToMap)

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
                <CheckoutButton onClick={() => console.log('CRIAR FUNCAO DE FINALIZAR COMPRA')}>Finalizar Compra</CheckoutButton>
            </CartTotalContainer>
        </CartContainer>
    )
}


const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const CartItemsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  background-color: yellow;
`;

const CartItemImage = styled.img`
  width: 100px;
  margin-left: 20px;
`;

const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-left: 20px;
`;

const CartItemName = styled.span`
  font-size: 18px;
  font-weight: bold;
  background-color: aqua;
`;

const CartItemPrice = styled.span`
  font-size: 16px;
  background-color: red;
`;

const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 43;
`;

const CartItemButton = styled.button`
  border: none;
  background-color: #f1f1f1;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
`;

const CartTotalContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const CartTotal = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;
