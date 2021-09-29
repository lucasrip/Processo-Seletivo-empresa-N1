import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const ContainerDetalhes =styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
min-height: 70rem;
max-height: auto;
background-color: #000000;
padding-bottom: 3rem;
color:#ffffffff;
 iframe
 {
     position: relative;
     top:-9rem;
     width:70%;
     height:30rem;
 }

 @media(max-width:610px)
     {
        iframe
        {
            width:60%;
            height:15rem;
        }
     }
`
export const Description = styled.p`
     display: flex;
     font-size:1.2rem;
     width:35rem;
     text-justify: justify;
     align-items: center;
     white-space: normal;
     font-family: 'Roboto', sans-serif;
     font-weight: 300;
     @media(max-width:975px)
     {
         width:25rem;
        font-size:0.7rem;
     }
     @media(max-width:610px)
     {
        width:20rem;
        font-size:0.5rem;
     }
     @media(max-width:610px)
     {
        width:10rem;
        font-size:0.3rem;
     }
`

export const Price =styled(Description)`
margin-top: 1rem;
font-weight: bold;
color:${colors.azulClaro};
font-size:2rem;
text-justify: center;
justify-content: center;
`

export const CapaJogoDetalhes =styled.div`
display: flex;
justify-content: center;
color:#ffffffff;
width:100%;
height:25rem;
background:radial-gradient( rgba(31, 31, 31, 0.049), rgb(0, 0, 0)) no-repeat, url("${props=>props.img}") no-repeat;
background-size:100% 100%;
background-clip: border-box;
background-position: center;
object-fit: contain;
h1
{
    font-family: 'Roboto', sans-serif;
    font-size:2.5rem;
    margin-top: 8rem ;
    font-weight: bolder;
}
@media(max-width:700px)
{
    h1
    {
        font-size:1.5rem;
    }
}
`
