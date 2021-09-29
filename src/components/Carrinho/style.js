import styled from "styled-components";
import { ModalContainer } from "../Modal/style";


export const CarrinhoContainer = styled(ModalContainer)`
display:${props=>props.display?'flex':'none'};
justify-content: end;
align-items: end;
`;

export const CarrinhoStore = styled.div`
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
width:35rem;
height:100%;
background-color: #ffffff;
z-index: 5;
padding:1rem 1rem;
img:hover
    {
        cursor: pointer;
    }
`

export const CarrinhoHeader = styled.header`
width:100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom:3rem;
    margin-top: 0.3rem;
    strong
    {
     margin-right:4rem;
    }

`

export const ItemCarrinho = styled.span`
width:100%;
display: flex;
justify-content: space-between;
align-items:center;
 margin-top:0.2rem;

span
{
    display: flex;
   
}
span p
{
    margin-right: 10px;
}
`

export const CalculoFinal = styled.div`
width:100%;
display: flex;
flex-direction: column;
padding:2rem;
justify-content: start;
span
{
    margin-top:0.5rem;
    display: flex;
}
span p
{
    margin-left:20px;
}
div 
{
    display: flex;
    justify-content: center;
}
`
