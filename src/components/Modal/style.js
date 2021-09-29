import styled from "styled-components";
import {colors} from '../../GlobalStyle/index';

export const ModalContainer = styled.div`
position: fixed;
top:0;
width:100%;
height: 100%;
display: ${props=>props.display?'flex':'none'};
justify-content: center;
align-items: center;
background-color:${colors.opacidade};
z-index:3;
`

export const Modal = styled.div`
width:25rem;
height: 31rem;
background-color:#ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-between;
border-radius:5px;

span , p
{
    width: 100%;
    display: flex;
}
span img
{
    width:3rem;
    height: 3rem;
}
span img:hover
{
    cursor: pointer;
}
span
{
    
    justify-content: end;
    height:2rem;
}
p
{
    position: relative;
    font-family: 'Roboto', sans-serif;
    color:${colors.azulEscuro};
    justify-content: center;
    align-items: center;
    font-size:1rem;
    padding:4rem 0;
    
}
p::after , p::before
{
    margin-left:40px;
    content:'';
    width:6rem;
    height:1px;
    background-color: ${colors.azulEscuro};
}
p::before
{
    margin:0;
    margin-right:40px;
}
img:nth-child(2) 
{
    width:12.5rem;
    height:18.4rem;
}
@media(max-width:500px)
{
    &
    {
     width:20rem;
     height: 27rem;

    }
    img:nth-child(2) 
    {
     width:7.5rem;
     height:12.4rem;
    }
    p
    {
        padding:2rem 0;
    }
}
@media(max-width:350px)
{
    &
    {
     width:16rem;
     height: 27rem;

    }
    img:nth-child(2) 
    {
     width:3.5rem;
     height:8.4rem;
    }
    p
    {
        font-size: 0.7rem;
        padding:0.9rem 0;
    }
}
`
