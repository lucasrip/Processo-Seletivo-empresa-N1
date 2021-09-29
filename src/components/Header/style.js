import  styled from "styled-components";
import  {colors} from '../../GlobalStyle/index';

export const Header = styled.header`
position: relative;
position:absolute;
top:0;
display: flex;
justify-content: space-around;
background-color:transparent;
align-items: center;
width: 100%;
height: 5.5rem;
z-index: 1;
@media (max-width:380px)
{
    justify-content:center;
}
@media (max-width:280px)
{
 margin-top:10px;
 flex-direction: column;
}
`;

export const  MenuItemContainer = styled.div`
display: flex;
z-index:2;
`

export const MenuImg = styled.img`
width:${props=>props.width / 16} rem;
height:${props=>props.height / 16} rem;
margin-left: ${props=>props.marginLeft/16|0}rem;
z-index: 3;
&:hover
{
    cursor: pointer;
}
@media(max-width:800px)
{
    margin-left: 7px;
}
`
export const MenuHamburguer = styled(MenuImg)`
&:hover 
{
 filter: invert(20%) sepia(11%) saturate(4977%) hue-rotate(157deg) brightness(91%) contrast(94%);
}
@media (max-width:380px)
{
margin-left:0px;
    
}
`;

export const MenuItem = styled.span`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding:0 1.8rem;
margin-bottom:0.5rem ;
&:nth-child(2)
{
    border-left: 2px solid #FFFFFF;
    border-right: 2px solid #FFFFFF;
}
&:hover :not(strong,p) 
{
    filter: invert(20%) sepia(11%) saturate(4977%) hue-rotate(157deg) brightness(91%) contrast(94%);

}
&:hover p
{
    color: ${colors.azulClaro};
}
 p
 {
     color: #FFFFFF;
     margin-left:3px;
     font-family: 'Roboto', sans-serif;
     font-size: 14px;
     font-weight: 500;
     &:hover
     {
         cursor: pointer;
     }
 }

 @media(max-width:800px)
 {
    padding:0 1rem;
 }
 @media(max-width:550px)
 {
    padding:0 0.2rem;

    &:nth-child(2)
    {
     border-left: 1px red;
     border-right: 0px solid transparent;
    }
    
    p
     {
       display: none;
       font-size: 0px;
     }
 }
 @media (max-width:380px)
{
    padding:0 0px;
    
}
`

export const BolinhaQtd = styled.strong`
display: flex;
align-items: center;
justify-content: center;
min-width:2rem;
min-height:2rem;
max-width:3rem;
max-height:3rem;
border-radius: 50%;
background-color: ${colors.azulClaro};
color: #ffffff;
span &:hover
{
    background-color:black ;
    
}
@media(max-width:500px)
{
    display: none;
}
`

export const MenuCategoriasContainer = styled.div`
 display: ${props=>props.display};
position: relative;
position:absolute;
width:35.3rem ;
height:16.6rem;
& span
{
    display: flex;
    margin-top:60px;
    width:1.1rem;
    height:1.1rem;
    background-color: ${colors.azulClaro};
    transform: rotate(45deg);
}
@media(max-width:800px)
{
 margin-left:10px;
}
@media(max-width:680px)
{
    &
    {
        position:fixed;
        justify-content: center;
        align-items: center;
        width:100%;
        min-height: ${window.innerHeight+300}px;
        margin:0;
        top: 0px;
        left: 35px; 
     
    }
   
    & span
    {
        display: none;

    }
}
`

export const Categorias = styled.div`
position: relative;
top: -12px;
left: -35px;
display: flex;
min-width:35.3rem;
max-width: auto;
min-height: 15.5rem;
max-height: auto;
background-color: ${colors.azulEscuro};
padding:2rem ;
border:3px solid ${colors.azulClaro};
z-index: 2;
border-radius: 5px; 
box-shadow: 11px 16px 1px 2px ${colors.azulClaro};
@media(max-width:700px)
{
    min-width:25.3rem;
    max-width: auto;
}
@media(max-width:680px)
{

    &
    { 
      padding: 8rem 2.5rem;
      flex-direction :column ;       
      min-width:100%;
      min-height: ${window.innerHeight+300}px;
       max-height: 100%;
      border: 0;
      box-shadow: 0 0 0 0 transparent;
    }
   
   
}
`
