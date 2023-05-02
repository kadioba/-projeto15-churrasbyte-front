import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
@media (max-width: 769px) {
    margin-top: 100px;
}
`;

export const CartItemsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
`;

export const CartItemImage = styled.img`
  width: 100px;
  margin-left: 20px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-left: 20px;
`;

export const CartItemName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const CartItemPrice = styled.span`
  font-size: 16px;
`;

export const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 43;
`;

export const CartItemButton = styled.button`
  border: none;
  background-color: #f1f1f1;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
`;

export const CartTotalContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const CartTotal = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;
