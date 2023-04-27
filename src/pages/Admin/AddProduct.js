import React, { useState } from 'react';
import axios from 'axios';
import { ButtonAdd, Form, FormContainer, FormGroup, Input, Label, Select, TitleAdmin } from './styled';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const [product, setProduct] = useState({ name: '', description: '', price: '', imageURL: '', category: '', stock: '' });
    const navigate = useNavigate()

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/new-product`, product)
        promisse.then(() => {
            alert("Produto adicionado com sucesso")
            navigate("/admin/products")
        })
        promisse.catch((err) => {
            alert("Erro ao adicionar produto")
            console.log(err)
        })
    };

    return (
        <FormContainer>
            <TitleAdmin>Adicionar Produto</TitleAdmin>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Nome:</Label>
                    <Input type="text" name="name" value={product.name} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Descrição:</Label>
                    <Input type="text" name="description" value={product.description} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Preço:</Label>
                    <Input type="number" name="price" value={product.price} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>URL da Imagem:</Label>
                    <Input type="text" name="imageURL" value={product.imageURL} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Estoque:</Label>
                    <Input type="number" name="stock" value={product.stock} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Categoria:</Label>
                    <Select name="category" value={product.category} onChange={handleChange} required>
                        <option value="">Escolha uma categoria</option>
                        <option value="facas">Facas</option>
                        <option value="espetos">Espetos</option>
                        <option value="tabuas">Tabuas</option>
                    </Select>
                </FormGroup>

                <ButtonAdd type="submit">Adicionar Produto</ButtonAdd>
            </Form>
        </FormContainer>
    );

};





