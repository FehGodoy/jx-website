import styled ,{css} from 'styled-components';
import {theme} from '../../styles/theme';

export const Footer = styled.footer`
background-color: #131517;
padding: 40px;
${({theme}) => css `
    font-family: ${theme.fonts.family.default};
`}
@media screen and (max-width:991px){
    padding: 15px;
  }
`;

export const Container = styled.div`
max-width: 1140px;
margin: 0 auto;

`;

export const Box = styled.div`
display: flex;
flex-wrap: wrap;
border-bottom: 1px solid #2b2b2b;
padding-bottom: 30px;
@media screen and (max-width:991px){
    flex-direction: column;
  }
`;

export const Col = styled.div`
width: 25%;
@media screen and (max-width:991px){
    width: 100%;
    margin: 15px 0px;
  }
`;

export const Logo = styled.h1`
${({theme}) => css`
    color: ${theme.color.white};
`}
`;

export const Titulo = styled.h3`
${({theme}) => css`
    color: ${theme.color.white};
`}
font-weight: 400;
font-size: 13px;
text-transform: uppercase;
`;

export const Lista = styled.ul`
list-style: none;
padding-left: 0;
`;


export const Links = styled.li`
color: rgba(255,255,255,.8);
${({theme}) => css `
    font-family: ${theme.fonts.family.secondary};
`}
margin: 10px 0px;
`;

export const Copy = styled.div`
margin: 20px 0px 0px 0px;
`;

export const CopyTitulo = styled.p`
${({theme}) => css `
    font-family: ${theme.fonts.family.secondary};    
`}
color: rgba(255,255,255,.8);
`;


