import * as Styled from './style';

export const Footer = () =>{
    return(
        <>
            <Styled.Footer>
                <Styled.Container>
                    <Styled.Box>
                        <Styled.Col>
                            <Styled.Logo>
                                jx
                            </Styled.Logo>
                        </Styled.Col>
                        <Styled.Col>
                            <Styled.Titulo>
                                Links Úteis
                            </Styled.Titulo>
                            <Styled.Lista>
                                <Styled.Links>
                                    - Sobre Nós
                                </Styled.Links>
                                <Styled.Links>
                                    - Serviços
                                </Styled.Links>
                                <Styled.Links>
                                    - Contato
                                </Styled.Links>                               
                            </Styled.Lista>
                        </Styled.Col>
                        <Styled.Col>
                            <Styled.Titulo>
                               Links Adicionais
                            </Styled.Titulo>
                            <Styled.Lista>
                                <Styled.Links>
                                    - Processos
                                </Styled.Links>
                                <Styled.Links>
                                    - FAQ
                                </Styled.Links>
                                <Styled.Links>
                                    - Carreira
                                </Styled.Links>                               
                            </Styled.Lista>
                        </Styled.Col>
                        <Styled.Col>
                            <Styled.Titulo>
                               Informações de Contato
                            </Styled.Titulo>
                            <Styled.Lista>
                                <Styled.Links>
                                    Av. Lorem Ipsum Dolor,123
                                </Styled.Links>
                                <Styled.Links>
                                    contato@jx.com
                                </Styled.Links>
                                <Styled.Links>
                                    +55 (11) 5555 - 4444
                                </Styled.Links>                               
                            </Styled.Lista>
                        </Styled.Col>
                    </Styled.Box>
                    <Styled.Copy>
                        <Styled.CopyTitulo>
                            © {new Date().getFullYear()} GodoyDev, Todos os direitos Reservados
                        </Styled.CopyTitulo>
                    </Styled.Copy>
                </Styled.Container>
            </Styled.Footer>
        </>
    )
}