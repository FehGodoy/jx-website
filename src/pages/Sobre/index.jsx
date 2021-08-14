import * as Styled from './style';
import sobre1 from '../../images/sobre-1.jpg';
import {FaUserTie, FaGitlab, FaComment} from "react-icons/fa";
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


export const Sobre = () => {
    return(
        <>
            <Styled.Wallpaper>
                <Styled.Container>
                    <Styled.Box>
                        <Styled.Titulo>
                            <h1>We Are JX</h1>
                        </Styled.Titulo>
                    </Styled.Box>
                </Styled.Container>
            </Styled.Wallpaper>
            <Styled.SectionAbout>
                <Styled.Container>
                    <Styled.Box>
                        <Styled.BoxTexto>
                            <Styled.Texto>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis earum quaerat quasi eius ipsum itaque, facere exercitationem qui molestias, reprehenderit maiores architecto sed, similique est! Illum quo nostrum distinctio.</p>
                            </Styled.Texto>
                            <Styled.Texto>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis earum quaerat quasi eius ipsum itaque, facere exercitationem qui molestias, reprehenderit maiores architecto sed, similique est! Illum quo nostrum distinctio.</p>
                            </Styled.Texto>
                        </Styled.BoxTexto>
                        <Styled.Challenge>
                            <Styled.BoxNumber>
                                <h6>47</h6>
                                <p>Profissionais</p>
                            </Styled.BoxNumber>
                            <Styled.BoxNumber>
                                <h6>100+</h6>
                                <p>Projetos Feitos</p>
                            </Styled.BoxNumber>
                            <Styled.BoxNumber>
                                <h6>36</h6>
                                <p>Meses de Negócios</p>
                            </Styled.BoxNumber>
                            <Styled.BoxNumber>
                                <h6>300+</h6>
                                <p>Clientes Felizes</p>
                            </Styled.BoxNumber>
                            <Styled.BoxNumber>
                                <h6>14</h6>
                                <p>Sócios</p>
                            </Styled.BoxNumber>
                            <Styled.BoxNumber>
                                <h6>20+</h6>
                                <p>Prêmio</p>
                            </Styled.BoxNumber>
                        </Styled.Challenge>
                    </Styled.Box>
                </Styled.Container>
            </Styled.SectionAbout>
            <Styled.SlideAndTexto>
                <Styled.Container>
                    <Styled.Box>     
                        <Styled.Photo>
                            <img src={sobre1} />
                        </Styled.Photo>       
                        <Styled.UserTexto>
                            <Styled.BoxU>
                                <div className="icone">
                                    <FaUserTie />
                                </div>
                                <div className="titulo">
                                    <h3>Equipe Profissional</h3>
                                </div>
                                <div className="texto">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem saepe, cumque mollitia hic adipisci laudantium in nulla rem accusantium tempora tempore sunt eligendi ea debitis eaque nemo veniam possimus.</p>
                                </div>
                            </Styled.BoxU>
                            <Styled.BoxU>
                                <div className="icone">
                                    <FaGitlab />
                                </div>
                                <div className="titulo">
                                    <h3>Soluções Criativas</h3>
                                </div>
                                <div className="texto">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem saepe, cumque mollitia hic adipisci laudantium in nulla rem accusantium tempora tempore sunt eligendi ea debitis eaque nemo veniam possimus.</p>
                                </div>
                            </Styled.BoxU>
                        </Styled.UserTexto>    
                    </Styled.Box>
                    <Styled.ImagesWrapper> 
                    {LogoClient.map(item =>(
                        <Styled.DivImage  key={item.source} >
                            <Styled.SingleImage src={item.source}/>
                        </Styled.DivImage>
                    ))}                   
                    </Styled.ImagesWrapper>
                </Styled.Container>
            </Styled.SlideAndTexto>
            <Styled.Slide>
                <Styled.Container>
                    <Styled.Box>
                        <div className="icone">
                            <FaComment />
                        </div>
                        <div className="comentario">
                           <p>"Dolor architecto explicabo porro, amet quo quasi eaque ducimus possimus, distinctio quae nesciunt natus sapiente in numquam impedit cupiditate reprehenderit commodi atque. "</p> 
                        </div>
                        <div className="footerComment">
                            <div className="nome">
                                <h6>Felipe Godoy</h6>
                            </div>
                            <div className="funcao">
                                <span>Desenvolvedor Web</span>
                            </div>
                        </div>
                    </Styled.Box>
                </Styled.Container>
            </Styled.Slide>
        </>
    )
};