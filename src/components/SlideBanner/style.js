import styled from "styled-components";

export const SlideContainer =styled.div`
position: relative;
width: 100%;
height: 52.5rem;
`

export const PaginacaoContainer = styled.div`
position:relative;
position: absolute;
right: 0;
top: 11rem;
width: 4.5rem;
height: 24rem;
display: flex;
flex-direction: column;
flex-wrap: wrap;
@media(max-width:700px)
{
    top:0;
    position: relative;
    width: 100%;
    height: 4rem;
    flex-direction: row;
  
}
`
export const TituloJogo = styled.p`
position: absolute;
top:145px;
right: 0;
left:-90px;
width:15rem;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 0.8rem;
transform:rotate(90deg);
@media(max-width:700px)
{
    &{
        position: relative;
    top:0;
    left:0;
    width:30rem;
    transform: rotate(0deg); 
    }
   
  
}
`

export const Linha = styled.div`

width: 0.1rem;
height: 5rem;
margin-bottom: 1rem;
background-color: #ffffff;
@media(max-width:700px)
{
    &
    {
    width:30rem;
    height:0.1rem;
    margin-bottom: 0.2rem;
    }
   
}
@media (max-width:550px)
{
    &
    {
         width:15rem;
    }
   
}

`

export const PaginacaoItemTitulo = styled.div`
display: flex;
align-items: end;
justify-content: center;
width: 100%;
height: ${props=>props.height}%;
background-color: ${props=>props.backgroundColor};
color:#ffffff;
@media(max-width:700px)
{
    padding:0 2rem ;
    justify-content: center;
    align-items: center;
    width:${props=>props.height}%;
    height:4rem;
}
@media(max-width:400px)
{
    width: ${props=>props.height-10}%;
}
`

export const PaginacaoItemNumeroPagina = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: ${props=>props.height}%;
background-color: ${props=>props.backgroundColor};
border-bottom-left-radius:10px ;
color: #ffffff;
p
{
    margin-top:1rem;
    text-align:center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
}
span
{
    margin-top:10px;
    display: flex;
    justify-content: center;
}
img
{
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(343deg) brightness(104%) contrast(105%);
    width:1rem;
    height:1rem;
    margin:0 5px ;
}
img:hover
{
    cursor: pointer;
    filter: invert(72%) sepia(60%) saturate(879%) hue-rotate(154deg) brightness(94%) contrast(87%);
}
@media(max-width:700px)
{
    &
    {
        margin: 0;
        padding: 0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border:0;
        width: ${props=>props.height}%;
        height:4rem;
        border-radius:0;
    }
    span,p
    {
    margin-top:0px;
    }
}
@media (max-width:400px)
{
    &
    {
        width: ${props=>props.height+10}%;
        
    }
}
`