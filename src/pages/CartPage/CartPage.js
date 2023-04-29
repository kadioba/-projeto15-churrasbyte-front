import styled from "styled-components"
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";
import { useState } from "react";

export default function CartPage() {

    return (
        <CartContainer>
            <h1>Meu carrinho</h1>
            <BotaoFinalizar>FINALIZAR COMPRA</BotaoFinalizar>
        </CartContainer>
    )
}

const CartContainer = styled.div`
width: 100vw;
background-color: red;
display: flex;
flex-direction: column;
align-items: center;
h1{
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}
`

const BotaoFinalizar = styled.button`
width: 80%;
height: 80px;
background-color: black;
color: white;
border: none;
border-radius: 5px;
`