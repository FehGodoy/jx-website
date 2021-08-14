import * as Styled from './styles';
import { FaSuitcase,FaStar,FaTrophy,FaPlay } from "react-icons/fa";
import FirstClient from '../../images/client-1.png';
import SecondClient from '../../images/client-2.png';
import ThreeClient from '../../images/client-3.png';
import FourClient from '../../images/client-4.png';
import FiveClient from '../../images/client-5.png';


const LogoClient = [
    {
      source: FirstClient
    },
    {
      source: SecondClient
    },
    {
      source: ThreeClient
    },
    {
      source: FourClient
    },
    {
      source: FiveClient
    },
  ]

function Home(){
    return(        
        <>
        <Styled.Wrapper>
            <Styled.Box>
                <Styled.Metade>
                    <Styled.Titulo>
                        Experienced and
                    </Styled.Titulo>
                    <Styled.Titulo>
                        Professional Community
                    </Styled.Titulo>
                    <Styled.Texto>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Styled.Texto>
                    <Styled.Botao>
                        Entrar em Contato
                    </Styled.Botao>
                </Styled.Metade>               
            </Styled.Box>           
        </Styled.Wrapper>      
        <Styled.WrapperWhite>
             {/* Caixas Iguais */}
             <Styled.BoxSecondary>
                        <Styled.BoxCont>
                            <Styled.BoxPrincipal>
                                <Styled.Icone>
                                    <FaSuitcase />
                                </Styled.Icone>
                                <Styled.TituloBox>
                                    Professional
                                </Styled.TituloBox>
                                <Styled.TextoBox>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Styled.TextoBox>
                            </Styled.BoxPrincipal>
                        </Styled.BoxCont>      
                        <Styled.BoxCont>
                            <Styled.BoxPrincipal>
                                <Styled.Icone>
                                    <FaStar />
                                </Styled.Icone>
                                <Styled.TituloBox>
                                    Professional
                                </Styled.TituloBox>
                                <Styled.TextoBox>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Styled.TextoBox>
                            </Styled.BoxPrincipal>
                        </Styled.BoxCont>                       
                        <Styled.BoxCont>
                            <Styled.BoxPrincipal>
                                <Styled.Icone>
                                    <FaTrophy />
                                </Styled.Icone>
                                <Styled.TituloBox>
                                    Professional
                                </Styled.TituloBox>
                                <Styled.TextoBox>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Styled.TextoBox>
                            </Styled.BoxPrincipal>
                        </Styled.BoxCont>      
                    </Styled.BoxSecondary>
                {/* Caixas Iguais */}
        </Styled.WrapperWhite>
        <Styled.Video>
            <Styled.BgBlack>
                <Styled.Container>
                    <Styled.TituloBoxVideo>
                        <Styled.TituloVideo>
                            Youtube & vimeo lightbox video player
                        </Styled.TituloVideo>
                    </Styled.TituloBoxVideo>                    
                    <Styled.Player>
                        <Styled.StylePlayer>
                            <FaPlay />
                        </Styled.StylePlayer>                        
                    </Styled.Player>
                </Styled.Container>
            </Styled.BgBlack>
        </Styled.Video>
        <Styled.Clients>
            <Styled.ContainerClients>
                <Styled.BoxClients> 
                    <Styled.TituloClients>
                        Our Trusted Clients
                    </Styled.TituloClients>
                    <Styled.TextoClients>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Styled.TextoClients>
                </Styled.BoxClients>
                <Styled.ImagesWrapper> 
                    {LogoClient.map(item =>(
                        <Styled.DivImage  key={item.source} >
                            <Styled.SingleImage src={item.source}/>
                        </Styled.DivImage>
                    ))}                   
                </Styled.ImagesWrapper>
            </Styled.ContainerClients>
        </Styled.Clients>
        </>      
    );
}

export default Home;