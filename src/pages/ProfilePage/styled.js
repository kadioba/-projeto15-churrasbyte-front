import styled from "styled-components"

export const ProfilePageContainer = styled.div`
    margin-top: 110px;
    padding: 30px 70px;
    h2{
        font-size: 20px;
        display: flex;
        align-items: center;
    }
    @media (max-width: 769px) {
        margin-top: 80px;
        padding: 10px 5px 0 5px;
        h2{
            padding-left: 5px;
            text-align: center;
            font-size: 18px;
        }
    }
`

export const ProfileInfoContainer = styled.div`
    display: flex;
    padding: 20px 18px;
    background-color: white;
    border: 1px #DBDBDB solid;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,5%);
    margin-bottom: 30px;
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h1{
            font-size: 25px;
        }
        h2{
            font-size: 18px;
        }
    }

    @media (max-width: 769px) {
        display: flex;
        padding: 20px 18px;
        background-color: white;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,5%);
        margin-bottom: 30px;

    div{
        h1{
            font-size: 18px;
        }
    }
    }
`

export const ImageContainer = styled.div`
position: relative;
    img{
        height: 100px;
        border-radius: 100px;
        margin-right: 30px;

        :hover{
            cursor: pointer;
        }
    }

    button{
        position: absolute;
        bottom: 0;
        right:25px;
        border: none;
        background-color: transparent;
        font-size: 16px;

        :hover{
            font-size: 18px;
            cursor: pointer;
        }
    }

    @media (max-width: 769px) {
        img{
        height: 60px;
    }
    }

`

export const ImageEditorForm = styled.form`
    visibility: ${props => props.open === true ? "block" : "hidden"};
    position: absolute;
    bottom: 0;
    left: 100px;
    min-width: 500px;
    input{
        outline: none;
        border: 1px solid #ccc;
        margin: 1px;
        font-family: 'Roboto';
        background-color: white;
        width: 100%;
    }
    button{
        position: absolute;
        right: 0;
        top: 1px;
    }

    @media (max-width: 769px) {
        min-width: 200px;
        bottom: 0;
        left: 60px;
    }
`
export const PurchaseContainer = styled.div`
    display: flex;
    padding: 20px 18px;
    background-color: white;
    border: 1px #DBDBDB solid;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,5%);
    margin-top: 30px;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h3{
        margin-bottom: 15px;
        font-weight: 500;
    }

    @media (max-width: 769px) {
        padding: 20px 5px;
        justify-content: space-evenly;
        margin-top: 10px;
        margin-bottom: 15px;

        div{
            margin: 0 5px;
            justify-content: space-between;
        }
        h3{
            font-size: 12px;
            text-align: center;
        }
        h4{
            font-size: 12px;
            text-align: center;
        }
    }
`