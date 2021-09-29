import styled from "styled-components";
import { SlideContainer } from "../SlideBanner/style";


export const SlideJogosContainer = styled(SlideContainer)`
position: relative;
height: auto;
width: 100%;
`;



export const Arrow = styled.img`
position: absolute;
top:50%;
left:${props=>props.left}px;
right:${props=>props.right}px;

width:2rem;
height: 2rem;
`