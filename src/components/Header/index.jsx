import * as Styled from './style';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
             <Styled.Menu>
                 <Styled.Container>
                    <Styled.Title>
                        <Link to="/">jx</Link>
                    </Styled.Title>
                    <Styled.Hamburger onClick={() => setIsOpen(!isOpen)}> 
                            <span />
                            <span />
                            <span />
                        </Styled.Hamburger>
                    <Styled.Box isOpen={isOpen}>                       
                        <Styled.Lista>
                                <li>                                
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/sobre">Sobre Nós</Link>  
                                </li>
                                <li>
                                    <Link to="/servicos">Serviços</Link>  
                                </li>
                                <li>
                                    <Link to="/contato">Contato</Link>  
                                </li>
                            </Styled.Lista>
                    </Styled.Box>                    
                </Styled.Container>
            </Styled.Menu>
        </>
       
    )   
};


