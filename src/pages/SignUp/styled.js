import styled from "styled-components"
import { hoverColorButton, mainColorButton, mainContrastColor } from "../../constants/colors"

export const SignUpContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: black;
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 30px;

        @media (max-width: 769px) {
            font-size: 30px;
        }
    }

    a{
        color: black;
        text-decoration: none;
        margin-top: 10px;
        font-weight: 500;
        font-size: 17px;
    }
`
export const SignUpForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 60%;
    border-radius: 5px;
    input {
        font-family: 'Roboto';
        font-size: 18px;
        width: 100%;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;

        @media (max-width: 769px) {
            font-size: 15px;
        }
    }

    @media (max-width: 769px) {
        width: 90%;
    }
`

export const SubmitButton = styled.button`
    margin-top: 20px ;
    color: ${mainContrastColor};
    background-color: ${mainColorButton};
    outline: none;
    border: none;
    cursor: pointer;
    width: 60%;
    padding: 12px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    :hover{
            background-color: ${hoverColorButton};
        }

    @media (max-width: 769px) {
        width: 100%;
        font-size: 17px;
    }
`
