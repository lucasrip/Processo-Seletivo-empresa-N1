import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const Destaques = styled.span`
margin-top:5rem;
margin-bottom: 7rem;
width: 90%;
display: flex;
align-items: center;
justify-content: start;
strong
{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2.25rem;
    color:${colors.azulEscuro};
}
@media (max-width:480px)
{
strong
{
    font-size: 1.3rem;
}
}
@media(max-width:350px)
{
    margin-top:1rem;
    margin-bottom:2rem;
}
`

export const IconeDestaquesImg = styled.img`
width: 1.75rem;
height:1.75rem;
margin-right: 1.5rem;
@media (max-width:480px)
{
    width: 1rem;
    height:1rem;
    margin-right: 0.4rem;
}
`

export const JogosContainer = styled.div`
width:100%;
height: auto;
padding:2rem ;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const LancamentosContainer = styled(JogosContainer)`
padding:0;
position: relative;
margin-top:-15rem;
padding-bottom:2rem;
@media(max-width:900px)
{
   
    padding:0;
    margin:4rem 0;
}
`