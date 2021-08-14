import styled,{css} from 'styled-components';

export const Mapa = styled.section`

.iframe{
    width: 100%;

    iframe{
        width: 100%;
        height: 450px;
    }
}
`

export const InfoContato = styled.section`
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

.dados{
    display: flex;
    flex-wrap:wrap;

    .campoContato{
        width: 40%;
        @media screen and (max-width:991px){
            width: auto;
        }

        .tipoContato{
            margin: 40px 0px;

            h4{
                ${({theme}) => css`                
                font-family: ${theme.fonts.family.default};
            `}
            font-weight:300;
            font-size: 18px;
            }
            span{
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
    .formulario{
        width: 60%;
        @media screen and (max-width:991px){
            width: auto;
        }

        form{
            input{
                width: 100%;
                padding: 8px;
                margin: 10px 0px;
                border: 1px solid #eee;
            }
            textarea{
                width: 100%;
                padding: 5px;
                margin: 10px 0px;
                height: 150px;
                border: 1px solid #eee;
            }
            button{
                border: 1px solid #000;
                padding: 10px 30px;
                background-color: #fff;
            }
        }
    }
}
`