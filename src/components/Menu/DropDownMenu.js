import { Link } from "react-router-dom";
import { DropButton, DropdownIcon, DropDownContent, CategoriesContainer } from "./styled";
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react";
import UserContainer from "./UserContainer";

export default function DropDownMenu({ categories, open , setOpen}) {

    return (
        <DropButton>
            <DropdownIcon onClick={() => setOpen(!open)}>
                <AiOutlineMenu />
            </DropdownIcon>

            <DropDownContent isOpen={open}>
                <UserContainer setOpen = {setOpen}/>
                <CategoriesContainer>
                    {categories.map(c => <h2 key={c}>{c}</h2>)}
                </CategoriesContainer>
            </DropDownContent>

        </DropButton>

    )
}