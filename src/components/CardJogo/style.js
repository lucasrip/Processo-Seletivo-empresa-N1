import styled from "styled-components";
import { colors } from "../../GlobalStyle"
import VerMais from '../../assets/svgs/add-circle-fill.png';
import { Link } from "react-router-dom";

export const CardJogoContainer = styled.div`
position:relative;
width: 21.8rem;
height:37.6rem;
border-radius: 5px;
box-shadow: 0px 0px 15px 1px #5e5e5eed;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin:2rem;

&:hover 
{
cursor: pointer;
box-shadow: 0px 0px 15px 1px ${colors.azulEscuro};
}
@media(max-width:530px)
{
    margin-left: 35%;
    width: 11.8rem;
    height:22.8rem;
}
@media(max-width:350px)
{
    margin-left: 23%;
}
@media(max-width:280px)
{
    margin-left: 17%;
}
` 
export const CapaMais = styled(Link)`
position: absolute;
top:0;
left:0;
width:100%;
height:60%;
z-index: 1;
&:hover
{
    background: radial-gradient( rgba(31, 31, 31, 0.049), rgb(0, 0, 0)) no-repeat, url(${VerMais}) no-repeat;
background-size: 100%,100px 100px;
background-position:  center;
}

`

export const CapaJogo = styled.img`
position: relative;
width: 100%;
height:100%;
z-index: -1;
&:hover
{
    cursor: pointer;
}

`

export const DetalhesJogo = styled.div`
width: 100%;
height:100%;
border-top:2px solid ${colors.azulClaro};
background-color:#F5F5F5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-family: 'Roboto', sans-serif;
color:${colors.azulEscuro};
tex-align:start;
p{
    width: 100%;
    padding-left:60px;
    font-size: 0.8rem;
    font-weight: 400;
}
strong
{
    width: 100%;
    padding-left:60px;
    font-size: 1.1rem;
    font-weight: 900;
    margin-top:1.5rem;
}
@media(max-width:530px)
{
    p
    {
        padding-left:6px;
    }
    strong
    {
    padding-left:6px;
    font-size: 1.1rem;
    margin-top:0.5rem;
    }
}
`

export const BtnCompra = styled.button`
font-family: 'Roboto', sans-serif;
width: 15rem;
height: 3.25rem;
background-color:${props=>props.background?colors.azulEscuro :colors.azulClaro} ;
color: #ffffff;
border: 0px;
font-weight:900;
font-size: 1.1rem;
border-radius:5px;
cursor: pointer;
transition:background 0.5s ease;
margin-top:2rem;
&:hover
{
    background-color:${colors.azulClaroHover} ;
}
@media(max-width:530px)
{
    &
    {
        width: 8rem;
        height: 2.5rem;
        font-size: 0.9rem;

    }
}
`