import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonAdd, Form, FormContainer, FormGroup, Input, Label, Select, TitleAdmin } from './styled';

export default function EditProduct() {
    const [product, setProduct] = useState({ name: '', description: '', price: '', imageURL: '', category: '', stock: '' });
    const { id } = useParams();
    const navigate = useNavigate()


    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/update-product/${id}`, product)
        promisse.then(() => {
            alert("Produto editado com sucesso")
            navigate("/admin/products")
        })
        promisse.catch((err) => {
            alert("Erro ao editar produto")
            console.log(err)
        })
    };

    return (
        <FormContainer>
            <TitleAdmin>Editar Produto</TitleAdmin>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Nome:</Label>
                    <Input type="text" name="name" value={product.name} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label>Descrição:</Label>
                    <Input type="text" name="description" value={product.description} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label>Preço:</Label>
                    <Input type="number" name="price" value={product.price} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label>URL da Imagem:</Label>
                    <Input type="text" name="imageURL" value={product.imageURL} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label>Estoque:</Label>
                    <Input type="number" name="stock" value={product.stock} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Categoria:</Label>
                    <Select name="category" value={product.category} onChange={handleChange} >
                        <option value="">Escolha uma categoria</option>
                        <option value="facas">Facas</option>
                        <option value="espetos">Espetos</option>
                        <option value="tabuas">Tabuas</option>
                    </Select>
                </FormGroup>

                <ButtonAdd type="submit">Editar Produto</ButtonAdd>
            </Form>
        </FormContainer>
    );

};
