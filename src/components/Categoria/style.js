import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const CategoriaContainer = styled.ul`
font-family: 'Roboto', sans-serif;
width: auto;
height:auto;
list-style: none;
font-size: 0.8rem;
color: #ffffff;
font-style: normal;
font-weight: 400;
transition: background 0.4s ease;
margin:0.5rem;

li
{
  margin:0 0.5rem;
  padding:0.5rem ;
}
li:first-child
{
  font-size: 1rem;
  font-weight: bold;
}
li:first-child:hover
{
    background-color: transparent;
    cursor: default;
}

li:hover
{
    background-color: ${colors.azulClaro};
    border-radius: 5px;
    cursor: pointer;
}
`