import styled,{css} from 'styled-components';

export const ServiceSection = styled.section`
margin: 80px 0px;
`

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
    padding: 0 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
        
`

export const Box = styled.div`
    
    .titulo{
        text-align: center;
        padding: 0px 140px;
        margin: 80px 0px;
        @media screen and (max-width:991px){
            padding: 0;
        }
        ${({theme}) => css`                
                font-family: ${theme.fonts.family.default};
            `}
            h2{
                font-weight: 300;
                font-size: 36px;
                line-height: 1.9;

                &::after{
                    content: '';
                    display: block;
                    width: 10%;
                    height: 1px;
                    margin: 0 auto;
                    ${({theme}) => css`    
                        background-color: ${theme.color.black};                        
                    `}
                }
            }
    }
`


export const IconService = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    .boxIcone{        
        text-align: center;
        width: 33.333%;
        padding: 0px 20px;
        margin: 15px 0px;
        @media screen and (max-width:991px){
            width: auto;
            padding: 0;
        }
        .titulo{
            ${({theme}) => css`    
                color: ${theme.color.black};
                font-family: ${theme.fonts.family.default};
            `}
            h2{
                font-weight: 400;
            }
        }
        .icone{
            text-align: center;
            font-size: 45px;
        }
        .texto{
            p{
                color: #7c7c7c;
                ${({theme}) => css`                    
                font-family: ${theme.fonts.family.secondary};
                font-size: 16px;
                font-weight: 300;
                line-height: 1.9;
            `}
            }   
        }
    }
`
export const Clientes = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px 0px;
  background-color: #F2F5F8;
  padding: 40px 0px;
`

export const DivImage = styled.div`
  padding: 8px;  
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

export const BoxTestemunho = styled.section`
margin: 60px 0px;
`

export const BoxTeste = styled.div`
display: flex;
flex-wrap: wrap;
`

export const BoxT = styled.div`

@media screen and (max-width:991px){
    width: auto;
    display: block;
}
width: 50%;
display: flex;

padding: 40px 14px;
/* margin: 30px 0px; */
border: 1px dashed rgba(0,0,0,.1);
.imagem{

    @media screen and (max-width:991px){
    margin: 12px 0px;
}
    
    img{
        border-radius: 50%;
        width: 100px;
        display: flex;
        margin: 0 auto;
    }
}
.conteudo{
    padding: 0px 10px;
    margin-top: auto;
    margin-bottom: auto;

    .texto{
        color: #7c7c7c;
        ${({theme}) => css`                    
        font-family: ${theme.fonts.family.secondary};        
    `}
    font-size: 16px;
    font-weight: 300;
    line-height: 1.9;      
    }
    .titulo{
        margin: 10px 0px;
        h5{
            ${({theme}) => css`                    
        font-family: ${theme.fonts.family.default};
        `}
        font-weight: 400;
        font-size: 19px;
        }
        span{
            color: #7c7c7c;
                ${({theme}) => css`                    
                font-family: ${theme.fonts.family.secondary};        
            `}
        }
    }
}
`