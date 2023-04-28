import { Link, useNavigate } from "react-router-dom";
import { MenuDesktop, MenuHeader, MenuResponsiveContainer, MenuMobile, CategoriesContainer, StyledInput, CartContainer, LogoMenu } from "./styled";
import { FaShoppingCart } from "react-icons/fa"
import UserContainer from "./UserContainer";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";


export default function Menu() {
    const navigate = useNavigate();
    const categories = ["Facas", "Tábuas", "Espetos", "Kits", "Cutelos", "Facas Artesanais"];
    const [open, setOpen] = useState(false)

    return (
        <>
            <MenuDesktop>
                <MenuHeader>
                    <LogoMenu
                        src="https://cdn.awsli.com.br/1032/1032521/produto/151964770/2564033461.jpg"
                        onClick={() => navigate("/")}
                    />

                    <StyledInput
                        placeholder="Busque aqui"
                    />

                    <UserContainer setOpen={setOpen} />

                    <CartContainer onClick={() => navigate("/cart")}>
                        <FaShoppingCart />
                    </CartContainer>
                </MenuHeader>

                <CategoriesContainer>
                    {categories.map(c => <h2 key={c}>{c}</h2>)}
                </CategoriesContainer>
            </MenuDesktop>

            <MenuResponsiveContainer>
                <LogoMenu
                    src="https://cdn.awsli.com.br/1032/1032521/produto/151964770/2564033461.jpg"
                    onClick={() => { setOpen(false); navigate("/") }}
                />

                <MenuMobile>
                    <DropDownMenu
                        open={open}
                        categories={categories}
                        setOpen={setOpen}
                    />


                    <StyledInput
                        placeholder="Busque aqui"
                    />

                    <CartContainer onClick={() => { setOpen(false); navigate("/cart") }}>
                        <FaShoppingCart />
                    </CartContainer>


                </MenuMobile>

            </MenuResponsiveContainer>
        </>
    )
}