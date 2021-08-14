import styled, {css} from  'styled-components';
import fundo from '../../images/fundo.jpg';
import fundoVideo from '../../images/video.jpg';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
    background-image: url(${fundo});
    height: 85vh;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    &::before{
        background-image: linear-gradient(to top,#fff,rgba(255,255,255,.2));
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
    }
    @media screen and (max-width:991px){
    height: auto;
  }
  padding: 0px 20px;
    
`;

export const Metade = styled.div`
   width: 50%;
   @media screen and (max-width:991px){
    width: auto
  }
`;

export const Box = styled.div`
   ${({theme}) => css`
    color: ${theme.color.black};   
  `}
   max-width: 1140px;
   width: 100%;
   margin: 0 auto;
   position: relative;
   @media screen and (max-width:991px){
    padding: 20px;
  }
`;

export const Texto = styled.p`
   color: #7c7c7c;   
   margin: 15px 0px;
   font-weight: 200;
   line-height: 1.8;
   ${({theme}) => css`
    font-family: ${theme.fonts.family.secondary};
   `} 
`;

export const Titulo = styled.h2`
   ${({theme}) => css`
    color: ${theme.color.black};   
  `}
   font-weight: 200;
   font-size: 45px;
   ${({theme}) => css`
    font-family: ${theme.fonts.family.default};
   `} 
`;

export const Botao = styled.a`
   ${({theme}) => css`
    background-color: ${theme.color.black};   
  `} 
   padding: 15px 20px;
   text-transform: uppercase;
   ${({theme}) => css`
    color: ${theme.color.white};   
    `}
   width: 40%;
   display: flex;
   margin-top: 40px;
   justify-content: center;
   border-radius: 8px;
   ${({theme}) => css`
    font-family: ${theme.fonts.family.default};
   `} 
   @media screen and (max-width:991px){
    width: 250px;
  }
`;

export const WrapperWhite = styled.div`
  ${({theme}) => css`
    background-color: ${theme.color.white};   
  `}
  max-width: 1140px;
  display: flex;
  margin: 80px auto;
  
`;

export const BoxSecondary = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

export const BoxPrincipal = styled.div`
  border: 1px solid #eee;
  padding: 30px;
`;

export const BoxCont = styled.div`
  width: 33.33333%;  
  padding: 0px 15px; 

  @media screen and (max-width:991px){
    width: auto;
    margin: 15px 0px;
  }
  
`;
export const Icone = styled.div`
  font-size: 30px;
`;
export const TituloBox = styled.h2`
  ${({theme}) => css`
    font-family: ${theme.fonts.family.default};
   `} 
   font-weight: 300;
`;

export const TextoBox = styled.p`
  ${({theme}) => css`
    font-family: ${theme.fonts.family.secondary};
   `} 
   color: #7c7c7c;
   font-weight: 300;
   line-height: 2;
`;

export const Video = styled.div`
  background-image: url(${fundoVideo});
  height: 85vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  background-attachment: fixed;


`;

export const BgBlack = styled.div`
  background: rgba(0,0,0,.4)!important;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  @media screen and (max-width:991px){
    padding: 0px 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TituloBoxVideo = styled.div`
  width: 50%;
`;

export const StylePlayer = styled.a`
  background: rgba(255,255,255,.15);
    border: 0;
    ${({theme}) => css`
    color: ${theme.color.white};   
    `}
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    display: flex;
    border-radius: 50%;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const Player = styled.div`
  width: 50%;  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${({theme}) => css`
    color: ${theme.color.white};   
  `}
  @media screen and (max-width:991px){
    width: 100%
  }

`;

export const TituloVideo = styled.h2`
  ${({theme}) => css`
    color: ${theme.color.white};
    font-family: ${theme.fonts.family.default};
  `}
  font-size: 40px;
  font-weight: 200;
  
`;


export const Clients = styled.div` 
margin: 60px 0px;
@media screen and (max-width:991px){
    padding: 0px 15px;
  }
`;
export const ContainerClients = styled.div`  
max-width: 1140px;
margin: 0 auto;
`;
export const BoxClients = styled.div` 
text-align: center;
`;
export const TituloClients = styled.h2`  
text-align: center;
margin-bottom: 15px;
${({theme}) => css`    
    font-family: ${theme.fonts.family.default};
  `}
  font-weight:300;
  font-size: 32px;
`;
export const TextoClients = styled.p`  
${({theme}) => css`    
    font-family: ${theme.fonts.family.secondary};
  `};
  font-weight: 400;
  font-size:15;
  color: #7c7c7c;
`;
export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0px;
`

export const DivImage = styled.div`
  padding: 8px;
  border: 1px dashed rgba(0,0,0,.1);
`

export const SingleImage = styled.img`
  width: 180px;
  margin: 30px 15px;
  opacity: .4;
  transition: ease-in .6s;
  &:hover{
    opacity: 1;
  }
`
