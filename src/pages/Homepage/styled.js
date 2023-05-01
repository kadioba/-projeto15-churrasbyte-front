import styled from "styled-components"
import { hoverColorButton, mainColorButton, mainContrastColor } from "../../constants/colors"

export const MainHomeContainer = styled.div`
    margin-top: 110px;
    padding: 30px 70px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: 769px) {
        margin-top: 80px;
    }

`

export const ProductCardContainer = styled.div`
    max-height: 23rem;
    height: 23rem;;
    max-width: 16rem;
    width: 16rem;
    margin: 0 10px 20px 10px;
    padding: 0 20px;
    background-color: white;
    border: 1px #DBDBDB solid;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,5%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    p{
        width: 100%;
        font-size: 10px;
    }

`
export const ProductStockContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px ${mainColorButton} solid ;
    border-radius: 10px;
    padding: 6px;
    font-size: 10px;
    background-color: white;
`

export const ProductImg = styled.img`
    background-color: blue;
    height: 10rem;
    width: 10rem;
    margin: 30px;
    cursor: pointer;
`
export const ProductsInfoContainer = styled.div`
    width: 100%;
    p{
        width: 100%;
        font-size: 14px;
        color: 	#7F858D;
    }
`

export const ProductTitle = styled.h1`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    text-align: left;
    margin-bottom: 5px;
    cursor: pointer;
`

export const ProductPrice = styled.h2`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    color: ${mainColorButton};
`

export const ProductBuyButton = styled.button`
    width: 100%;
    margin-bottom: 10px;
    color: ${mainContrastColor};
    background-color: ${mainColorButton};
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px 45px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    :hover{
            background-color: ${hoverColorButton};
        }

    @media (max-width: 769px) {
        width: 100%;
        font-size: 17px;
    }
`