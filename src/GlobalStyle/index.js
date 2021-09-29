import styled, {createGlobalStyle } from "styled-components";

export const GlobalStyle =createGlobalStyle`
*
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}
a
{
    text-decoration:none;
    color:#000000;
}
a:visited, a:link
{

    color:#ffffff;
}
`
export const colors ={
 azulEscuro:'#084154',
 azulClaro:'#3ec5e0',
 azulClaroHover:'#3eaae0',
 cinza:'#EBEBEB',
 opacidade:'#0841549e',
};

export const Container = styled.div`
width:100%;
min-height:60rem;
max-height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`