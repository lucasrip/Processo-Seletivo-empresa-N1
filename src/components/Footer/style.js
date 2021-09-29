import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
width: 100%;
height: 1.9rem;
`;

export const FooterDetalhe =styled.div`
display: flex;

justify-content:${props=>props.justify};
align-items: center;
width:${props=>props.width}%;
height: 3.1rem;
background-color: ${props=>props.backgroundColor};
`
export const LogoFooter = styled.img`
width:2.6rem;
height:1.7rem;
margin-right: 2.5rem;
`
export const Direitos = styled.p`
font-size: 0.8rem;
font-family: 'Roboto', sans-serif;
font-weight: 400;
margin-left: 2.5rem;
color: #ffff;
`