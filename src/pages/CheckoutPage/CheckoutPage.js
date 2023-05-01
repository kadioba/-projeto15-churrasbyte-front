import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import CartContext from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

export default function CheckoutPage() {

    const { cart, setCart } = useContext(CartContext)
    const { token, setToken } = useContext(AuthContext)
    const [formData, setFormData] = useState(null);
    useEffect(() => {
        if (token) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promisse = axios.get(`${process.env.REACT_APP_API_URL}/user`, config)

            promisse.then((res) => {
                const {email, name, cart} = res.data
                const userData = {email, name, cart}
                userData.userId = res.data._id
                console.log({ ...userData, adress: "", creditCard: "", cvv: "", expireDate: "", total: getInvoiceTotal(userData.cart) })
                setFormData({ ...userData, adress: "", creditCard: "", cvv: "", expireDate: "", total: getInvoiceTotal(userData.cart) })
            })
            promisse.catch((error) => {
                alert(error.response.data)
            })
        }
        if (!token) {
            setFormData({ name: "", email: "", adress: "", creditCard: "", cvv: "", expireDate: "", total: getInvoiceTotal(cart), cart: cart })
        }
    }, []);

    function getInvoiceTotal(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += (cart[i].price * cart[i].quantity)
        }
        return total
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/new-invoice`, formData)
        promisse.catch((res) => {
            console.log(res)
            setCart([])
        })
        promisse.then((err) => console.log((err)))
    };

    if (!formData) {
        return (<></>)
    }

    return (
        <CheckoutContainer>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Nome</Label>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup >
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Endereço de entrega</Label>
                    <Input
                        type="text"
                        name="adress"
                        value={formData.adress}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <CardForm>
                    <FormGroup>
                        <Label>Cartão de crédito</Label>
                        <CardNumberInput
                            type="number"
                            name="creditCard"
                            value={formData.creditCard}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <div>
                        <FormGroup>
                            <Label>Código de segurança</Label>
                            <CvvNumberInput
                                type="number"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Data de vencimento</Label>
                            <ExpiryDateInput
                                type="month"
                                min="2023-04"
                                name="expireDate"
                                value={formData.expireDate}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </div>
                </CardForm>
                <h1>Total : R$ {formData.total}</h1>
                <CheckoutButton type="submit">Finalizar Compra</CheckoutButton>
            </Form>
        </CheckoutContainer>
    );
};

const CardForm = styled.div`
width: 60%;
background-color: yellow;
display: flex;
flex-direction: column;
align-items: center;
div{
    display: flex;
    justify-content: flex-start;
}
`
const CardNumberInput = styled.input`
width: 400px;
height: 30px;
border: solid 1px black;
`
const CvvNumberInput = styled.input`
width: 200px;
height: 30px;
border: solid 1px black;
`
const ExpiryDateInput = styled.input`
width: 200px;
height: 30px;
border: solid 1px black;
`


const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 20px;
`;