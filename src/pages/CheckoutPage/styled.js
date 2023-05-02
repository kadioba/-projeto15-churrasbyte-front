import styled from "styled-components"

export const CardForm = styled.div`
width: 100%;
max-width: 600px;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
div{
    display: flex;
    justify-content: flex-start;
}
`
export const CardNumberInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
`
export const CvvNumberInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-right: 4px;
`
export const ExpiryDateInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-left: 4px;
`

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

export const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 20px;
`;