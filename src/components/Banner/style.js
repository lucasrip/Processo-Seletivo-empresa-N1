import styled from "styled-components";
import {colors} from '../../GlobalStyle';
import { Link } from "react-router-dom";

export const BannerImg = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
height: 52.5rem;
background:radial-gradient( rgba(31, 31, 31, 0.049), rgb(0, 0, 0)) no-repeat, url("${props=>props.BackgroundImg}") no-repeat;
background-size:100% 100%;
background-clip: border-box;
background-position: center;
object-fit: cover;
&:hover
{
 cursor:grab;
}
@media (max-width:900px)
{
    align-items: flex-end;
}
@media (max-width:670px)
{
 background:radial-gradient( rgba(31, 31, 31, 0.049), rgb(0, 0, 0)) no-repeat, url("${props=>props.BackgroundMenor}") no-repeat;
 background-size:100% 100%;
background-clip: border-box;
background-position: center;
}

`

export const TextoContainer = styled.span`
display: flex;
flex-direction: column;
text-align: end;
align-items: end;
width:35rem;
color: #ffffff;
font-family: 'Roboto', sans-serif;
margin-top:10rem;
margin-right: 24%;
 font-weight: 900;
p:first-child
{
    font-size: 2.8rem;
}
p:nth-child(2)
{
    font-size: 3rem; 
    color: ${colors.azulClaro};
}
p:last-child
{
    margin-top:1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height:1.5rem;
}


@media (max-width:900px)
{
    margin:0;
    width:100%;
    min-height:23rem;
    max-height:auto;
    background-color: #000000e8;

    justify-content: center;
    align-items: center;
    padding:1rem 3rem;
    text-align:center;
p:first-child
{
    font-size: 1.8rem;
}
p:nth-child(2)
{
    font-size: 1.5rem; 
}
p:last-child
{
    font-size: 0.8rem;
}
@media (max-width:600px)
{
    &,p
    {
        text-align: end;
        align-items: end;
    } 
}
@media (max-width:375px)
{
padding: 1rem 0.4rem;
}

}
`
export const BtnVerMais = styled(Link)`
    font-family: 'Roboto', sans-serif;
    font-size:1.3rem;
    padding: 1rem;
    display: flex;
    margin-top:10px;
    justify-content: center;
    align-items: center;
    width:8rem;
    border-radius:5px;
    background-color:${colors.azulEscuro};
    &:hover
    {
      background-color:#032530 ;
    }

`