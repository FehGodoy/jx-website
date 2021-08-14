import styled, {css} from 'styled-components';



export const Menu = styled.header`
background-color: #000;
padding: 15px 0px;
${({theme}) => css `
    font-family: ${theme.fonts.family.default};
`}
@media screen and (max-width:991px){
    padding: 15px;
}
`

export const Container = styled.div`
max-width: 1140px;
margin: 0 auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
`

export const Title = styled.h1`
margin: 0;

a{
    ${({theme}) => css `
        color: ${theme.color.white};
    `}
    text-decoration:none
}
`
export const Box = styled.nav`
display: flex;
align-items: center;
flex-wrap:wrap;
justify-content: space-between;

@media screen and (max-width:991px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    transition: max-height .3s ease-in;
}
`

export const Lista = styled.ul`
display: flex;
align-items: center;
margin: 0;
list-style: none;
justify-content: space-between;
position: relative;

li{
    margin: 0px 10px;

    a{
        ${({theme}) => css `
            color: ${theme.color.white};
        `}
        text-decoration:none
    }
}

@media screen and (max-width:991px){
    flex-direction: column;

    li{
        margin: 10px 0px;
    }
}

`
export const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;

span{
    height: 2px;
    width: 25px;
    ${({theme}) => css`
        background-color: ${theme.color.white};
    `};
    margin-bottom: 5px;
    border-radius: 5px;
}

@media screen and (max-width:991px){
    display: flex;
}

`
