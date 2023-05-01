import { Link, useNavigate } from "react-router-dom";
import { MenuDesktop, MenuHeader, MenuResponsiveContainer, MenuMobile, CategoriesContainer, StyledInput, CartContainer, LogoMenu, StyledForm, SubmitButton } from "./styled";
import { FaShoppingCart, FaSearch } from "react-icons/fa"
import UserContainer from "./UserContainer";
import DropDownMenu from "./DropDownMenu";
import { useContext, useEffect, useState } from "react";
import FilterContext from "../../contexts/FilterContext";
import useForm from "../../hooks/useForm"


export default function Menu() {
    const navigate = useNavigate();
    const categories = [["Facas", "facas"], ["Tábuas", "tabuas"], ["Espetos", "espetos"], ["Kits", "kits"], ["Cutelos", "cutelos"], ["Facas Artesanais", "facasArt"]];
    const [open, setOpen] = useState(false)
    const { setFilter, setSearch } = useContext(FilterContext)
    const [value, setValue] = useState("")
    function handleFilter(category) {
        setFilter(category)
        navigate(`/?filter=${category}`);
    }

    function submitInput(e) {
        e.preventDefault();
        setSearch(value.toLowerCase());
      }

    return (
        <>
            <MenuDesktop>
                <MenuHeader>
                    <LogoMenu
                        src="https://cdn.awsli.com.br/1032/1032521/produto/151964770/2564033461.jpg"
                        onClick={() => { navigate("/"); setFilter(""); }}
                    />

                    <StyledForm onSubmit={submitInput}>
                        <StyledInput
                            placeholder="Busque aqui"
                            type="text"
                            name="search"
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}
                        />

                        <SubmitButton> <FaSearch /> </SubmitButton>
                    </StyledForm>


                    <UserContainer setOpen={setOpen} />

                    <CartContainer onClick={() => navigate("/cart")}>
                        <FaShoppingCart />
                    </CartContainer>
                </MenuHeader>

                <CategoriesContainer>
                    {categories.map(c => <h2 key={c} onClick={() => handleFilter(c[1])}>{c[0]}</h2>)}
                </CategoriesContainer>
            </MenuDesktop>

            <MenuResponsiveContainer>
                <LogoMenu
                    src="https://cdn.awsli.com.br/1032/1032521/produto/151964770/2564033461.jpg"
                    onClick={() => { setOpen(false); navigate("/"); setFilter(""); }}
                />

                <MenuMobile>
                    <DropDownMenu
                        open={open}
                        categories={categories}
                        setOpen={setOpen}
                        handleFilter={handleFilter}
                    />

                    <StyledForm>
                        <StyledInput
                            placeholder="Busque aqui"
                        />

                        <SubmitButton> <FaSearch /> </SubmitButton>

                    </StyledForm>
                    <CartContainer onClick={() => { setOpen(false); navigate("/cart") }}>
                        <FaShoppingCart />
                    </CartContainer>


                </MenuMobile>

            </MenuResponsiveContainer>
        </>
    )
}