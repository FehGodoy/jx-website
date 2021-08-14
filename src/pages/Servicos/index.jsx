import * as Styled from './style';
import {FaPencilAlt, FaMobile, FaCameraRetro, FaStar} from "react-icons/fa";
import Testemunho from '../../images/testimonial-3.jpg';
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

export const Servicos = () => {
    return(
        <>
        <Styled.ServiceSection>
            <Styled.Container>
                <Styled.Box>
                    <div className="titulo">
                        <h2>Team of highly skilled people are ready to work for you</h2>
                    </div>
                </Styled.Box>                
                <Styled.IconService>
                    <div className="boxIcone">
                        <div className="icone">
                            <FaPencilAlt />
                        </div>
                        <div className="titulo">
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="texto">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>
                        </div>
                    </div>
                    <div className="boxIcone">
                        <div className="icone">
                            <FaMobile />
                        </div>
                        <div className="titulo">
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="texto">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>
                        </div>
                    </div>
                    <div className="boxIcone">
                        <div className="icone">
                            <FaCameraRetro />
                        </div>
                        <div className="titulo">
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="texto">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>
                        </div>
                    </div>
                    <div className="boxIcone">
                        <div className="icone">
                            <FaStar />
                        </div>
                        <div className="titulo">
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="texto">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>
                        </div>
                    </div>
                    <div className="boxIcone">
                        <div className="icone">
                            <FaPencilAlt />
                        </div>
                        <div className="titulo">
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="texto">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>
                        </div>
                    </div>
                    <div className="boxIcone">
                        <div className="icone">
                            <FaPencilAlt />
                        </div>
                        <div className="titulo">
                            <h2>Graphic Design</h2>
                        </div>
                        <div className="texto">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>
                        </div>
                    </div>
                </Styled.IconService>                
            </Styled.Container>
        </Styled.ServiceSection>
        <Styled.Clientes>
        {LogoClient.map(item =>(
            <Styled.DivImage  key={item.source} >
                <Styled.SingleImage src={item.source}/>
            </Styled.DivImage>
        ))} 
        </Styled.Clientes>
        <Styled.BoxTestemunho>
            <Styled.Container>
                <Styled.BoxTeste>
                    <Styled.BoxT>
                        <div className="imagem">
                            <img src={Testemunho} alt="Aline Turney" />
                        </div>
                        <div className="conteudo">
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>                        
                            <div className="titulo">
                                <h5>Aline Turney</h5>
                                <span>UI/UX Designer - JX</span>
                            </div>
                        </div>
                    </Styled.BoxT>
                    <Styled.BoxT>
                        <div className="imagem">
                            <img src={Testemunho} alt="Aline Turney" />
                        </div>
                        <div className="conteudo">
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>                        
                            <div className="titulo">
                                <h5>Aline Turney</h5>
                                <span>UI/UX Designer - JX</span>
                            </div>
                        </div>
                    </Styled.BoxT>
                    <Styled.BoxT>
                        <div className="imagem">
                            <img src={Testemunho} alt="Aline Turney" />
                        </div>
                        <div className="conteudo">
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>                        
                            <div className="titulo">
                                <h5>Aline Turney</h5>
                                <span>UI/UX Designer - JX</span>
                            </div>
                        </div>
                    </Styled.BoxT>
                    <Styled.BoxT>
                        <div className="imagem">
                            <img src={Testemunho} alt="Aline Turney" />
                        </div>
                        <div className="conteudo">
                            <div className="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>                        
                            <div className="titulo">
                                <h5>Aline Turney</h5>
                                <span>UI/UX Designer - JX</span>
                            </div>
                        </div>
                    </Styled.BoxT>
                </Styled.BoxTeste>
            </Styled.Container>
        </Styled.BoxTestemunho>
        </>
    )
}