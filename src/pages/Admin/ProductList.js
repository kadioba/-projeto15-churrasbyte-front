import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ButtonAddNew, ButtonManage, Table, TableCell, TableContainer, TableHead, TableHeader, TitleAdmin } from './styled';

export default function ProductList() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/get-products`)

        promisse.then(res => setProducts(res.data))
        promisse.catch(res => console.log(res.data))
    }, [products]);

    function deleteOne(id) {
        const promisse = axios.delete(`${process.env.REACT_APP_API_URL}/delete-product/${id}`)
        promisse.then(() => alert("Produto deletado com sucesso"))
        promisse.catch((err) => {
            alert("Erro ao deletar produto")
            console.log(err)
        })
    }

    function goToProduct(id) {
        navigate(`/product/${id}`)
    }

    return (
        <TableContainer>
            <TitleAdmin>Produtos</TitleAdmin>
            <ButtonAddNew onClick={() => navigate("/admin/products/add")}>Adicionar novo produto</ButtonAddNew>
            <Table>
                <TableHead>
                    <tr>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader>Preço</TableHeader>
                        <TableHeader>Categoria</TableHeader>
                        <TableHeader>Ações</TableHeader>
                    </tr>
                </TableHead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <TableCell onClick={() => goToProduct(product._id)}>{product.name}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>
                                <ButtonManage onClick={() => navigate(`/admin/products/edit/${product._id}`)}>Editar</ButtonManage>
                                <ButtonManage delete onClick={() => deleteOne(product._id)}>Deletar</ButtonManage>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    );
};






