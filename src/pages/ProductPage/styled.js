import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #f8f9fa;
  margin: 1rem;
  max-width: 100vw;
`;

export const ImageContainer = styled.div`
  flex: 1 1 55%;
  text-align: center;
  padding: 1rem;

  img {
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    min-width: 300px;
    object-fit: cover;
  }
`;

export const DescriptionContainer = styled.div`
  flex: 1 1 45%;
  text-align: center;
  padding: 1rem;
`;

export const ProductName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 1rem;
`;

export const StockInfo = styled.p`
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
