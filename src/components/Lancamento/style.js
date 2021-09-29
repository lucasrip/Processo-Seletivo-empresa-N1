import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import VerMais from '../../assets/svgs/add-circle-fill.png';
import { Link } from "react-router-dom";

export const CapaVerMais = styled(Link)`
position:absolute;
top:20px;
left: 0;
width:100%;
height: 100%;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
z-index: 3;

`

export const JogoLancamento = styled.div`
position: relative;
width:33rem;
height: 25rem;
margin:1rem;
&:hover
{
  
 cursor: pointer;
}
img{
    width:100%;
    height: 100%;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    object-fit: contain;
}
a:hover 
{
  background: radial-gradient( rgba(31, 31, 31, 0.049), rgb(0, 0, 0)) no-repeat, url(${VerMais}) no-repeat;
background-size: 100%,100px 100px;
background-position: center center;
}
@media(max-width:1200px)
{
  
  width:28rem;
  height: 20rem;
}
@media(max-width:1050px)
{
  width:24rem;
  height: 22rem;
}
@media(max-width:410px)
{
  width:18rem;
  height: 16rem;
}
`

export const DetalheLancamento = styled.span`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-style: normal;
font-size: 1rem;
display: flex;
align-items: center;
position:absolute;
bottom:0;
left:0;
width: 100%;
height: 3.8rem;
background-color: ${colors.azulClaro};
border-left:10px solid ${colors.azulEscuro};
color: ${colors.azulEscuro};
border-bottom-left-radius:10px ;
border-bottom-right-radius:10px;
overflow-x:hidden;
p
{
    position: relative;
    margin-left:10px;
}
span
{
  margin-left:1rem;
  width: 8rem;
  height: 2px;
  background-color: ${colors.azulEscuro};
}
@media(max-width:1050px)
{
p
{
  font-size:0.8rem;
}
span
{
  margin-left:0.5rem;
  width: 6rem;
  height: 2px;
  background-color: ${colors.azulEscuro};
}
}
@media(max-width:420px)
{
  p
  {
    font-size: 0.59rem;
  }
}



`