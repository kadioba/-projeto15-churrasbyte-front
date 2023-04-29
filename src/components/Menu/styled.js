import styled from "styled-components"
import { iconColor } from "../../constants/colors"

export const MenuDesktop = styled.header`
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
    background-color: white;

    @media (max-width: 769px) {
        display: none;
    }
`

export const MenuResponsiveContainer = styled.header`
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;   
    display: none;
    height: 80px;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;

    @media (max-width: 769px) {
        display: flex;
    }
`

export const MenuMobile = styled.header`
    height: 100%;
    padding: 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #DBDBDB solid;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  

`


export const MenuHeader = styled.header`
    width: 100%;
    padding: 0 70px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px #DBDBDB solid;  
`

export const LogoMenu = styled.img`
    height: 54px;
    width: 158px;
    :hover{
        cursor: pointer;
    }
    @media (max-width: 769px) {
        height: calc(54px/1.5);
        width: calc(158px/1.5);
        display: flex;
        margin: 0 auto;
    }
`

export const StyledInput = styled.input`
        font-family: 'Roboto';
        font-size: 18px;
        width: 45%;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 10px 15px;
        margin: 1px;

        :focus{
            border-color: #cccc;
        }

    @media (max-width: 769px) {
        font-size: 13px;
        padding: 7px 15px;
        width: 70%;
        margin-left: 10px;
    }
`


export const UserContainerBoxed = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0px 5px 10px;
    width: 250px;
    a{
        color: black;
        font-weight: 700;
        text-decoration: none;
    }

    @media (max-width: 769px) {
        width: 100%;
    }

`

export const UserImagePlaceholder = styled.div`
    height: 31px;
    width: 31px;
`

export const UserIcon = styled.div`
    font-size: 35px;
    display: flex;
    align-items: center;
    color: ${iconColor};
    img{
        height: 35px;
        width: 35px;
        border-radius: 100px;
    }
`


export const LoginOptions = styled.div`
    margin: 0 10px;
    @media (max-width: 769px) {
        display: ${props => props.logged ? "block" : "flex"};
    }
`


export const CartContainer = styled.div`
    font-size: 30px;
    color: ${iconColor};
    margin-left:30px;
    :hover{
        cursor: pointer;
        transform: scale(1.1); 
    }
    @media (max-width: 769px) {
        margin-right: 15px;
    }
`


export const CategoriesContainer = styled.div`

    height: 30px;
    padding: 0 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-bottom: 1px #DBDBDB solid;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  
    h2{
        :hover{
            font-weight: 500;
            cursor: pointer;
            transform: scale(1.1); 
        }
    }

    @media (max-width: 769px) {
        height: 100%;
        padding: 5px 8px;
        display: block;
        h2{
            line-height: 22px;
            :hover{
                transform: none; 
            }
            :active{
                font-weight: 400;
                background-color: blue;
            }
        }

        a{
            color: black;
            text-decoration: none;
            display: block;
            :hover {background-color: #f1f1f1}
        }
    }
`

export const UserOptions = styled.span`
        display: flex;
        justify-content: space-around;
        margin-top: 2px;
    a{
        font-size: 14px;
        color: black;
        font-weight: 400;
        text-decoration: none;
        :hover{
            font-weight: 500;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export const DropButton = styled.div`
    width: 40px;
    position: relative;
`

export const DropdownIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-left: 10px;

`

export const DropDownContent = styled.div`
    display: ${props => props.isOpen === true ? "block" : "none"};
    position: absolute;
    margin-top: 7px;
    background-color: #f9f9f9;
    width: 100vw;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

`
