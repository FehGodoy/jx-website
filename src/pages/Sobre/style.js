import styled,{css} from 'styled-components';
import fundoWallpaper from '../../images/wallpaper.jpg';
import fundoComment from '../../images/sobre-fundo.jpg';

export const Wallpaper = styled.section`
background-image: url(${fundoWallpaper});
height: 65vh;
background-size: cover;
background-position: center;
position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-attachment: fixed;

    &::before{
        background-color: rgba(0,0,0,.6);
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        z-index: 1;
    }

`

export const Container = styled.div`
max-width: 1140px;
margin: 0 auto;
position: relative;
height: 100%;
display: flex;
align-items: center;
z-index: 9999;
flex-wrap: wrap;
`

export const Box = styled.div`
display: flex;
flex-wrap: wrap;

@media screen and (max-width:991px){
    padding: 0px 15px;
    flex-direction: column;
}

.icone{
    font-size: 35px;
    display: flex;
    justify-content: center;
    margin: 15px auto;
    ${({theme}) => css`    
    color: ${theme.color.white};
    font-family: ${theme.fonts.family.secondary};
   `}
}
.comentario{

    p{
        ${({theme}) => css`    
        font-family: ${theme.fonts.family.secondary};
        color: ${theme.color.white};
    `}   
    text-align: center;
    line-height: 1.9;
    font-weight: 400;
    font-size: 17px;
    }
}
.footerComment{
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 15px auto;
    flex-direction: column;
    .nome{

        h6{
        ${({theme}) => css`    
                font-family: ${theme.fonts.family.default};
                color: ${theme.color.white};
        `}
        font-size: 23px;
        }
    }
    .funcao{
        margin: 15px 0px;
        span{
            ${({theme}) => css`    
                font-family: ${theme.fonts.family.secondary};
                color: ${theme.color.white};
            `}
            font-weight: 300;
            
        }
    }
}
`

export const Titulo = styled.div`

h1{
    ${({theme}) => css`
    font-family: ${theme.fonts.family.default};
    color: ${theme.color.white};
   `} 
   font-size: 65px;
   font-weight: 300;
}

`
export const BoxTexto = styled.div`
display: flex;
flex-wrap: wrap;
@media screen and (max-width:991px){    
    flex-direction: column;
}
`

export const SectionAbout = styled.div`
margin: 40px 0px;
`

export const Texto = styled.div`
width: 50%;

@media screen and (max-width:991px){
    width: 100%;
    margin: 15px 0px;
}


p{
    line-height: 2;
    color: #7c7c7c;
    ${({theme}) => css`
    font-family: ${theme.fonts.family.secondary};    
   `} 
   font-weight: 400;
   font-size: 15px;
}
`

export const Challenge = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;
margin: 45px 0px 0px 0px;

@media screen and (max-width:991px){    
    flex-direction: column;    
}
`

export const BoxNumber = styled.div`
margin: 0px 40px;

@media screen and (max-width:991px){    
    margin: 15px 0px;   
}

h6{
    ${({theme}) => css`
    font-family: ${theme.fonts.family.default};    
   `} 
   font-weight: 300;
   font-size: 45px;
}
p{
    ${({theme}) => css`
    font-family: ${theme.fonts.family.secondary};    
   `} 
   color: #7c7c7c;
}
`

export const SlideAndTexto = styled.div`
margin: 60px 0px;
`

export const Photo = styled.div`
  width: 45%;

  @media screen and (max-width:991px){
    width: 100%;
    margin: 0;
}
  
  img{
      width: 100%;
      object-fit: cover;
      height: 100%;
  }
    margin-left: 15px;
    margin-right: 15px;
`

export const UserTexto = styled.div`
width: 45%;
margin-top: auto;
margin-bottom: auto;
margin-left: 15px;
margin-right: 15px;

@media screen and (max-width:991px){
    width: 100%;
    margin: 0;
}
`

export const BoxU = styled.div`
margin: 15px 0px;

.icone {
    font-size: 45px;    
}

.titulo{
    ${({theme}) => css`
    font-family: ${theme.fonts.family.default};    
   `} 
   text-transform: uppercase;
   
   h3{       
    font-size: 16px;
   margin: 8px 0px;
   font-weight: 400;
   }
}

.texto{

    p{
        ${({theme}) => css`
    font-family: ${theme.fonts.family.secondary};    
   `}
   color : #7c7c7c ;
   line-height: 1.4;
    }
}
`
export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px 0px;
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

export const Slide = styled.div`
background-image: url(${fundoComment});
height: 65vh;
background-size: cover;
background-position: center;
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-attachment: fixed; 
&::before{
    background-color: rgba(0,0,0,.6);
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 1;
}

`