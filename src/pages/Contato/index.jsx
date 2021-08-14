import * as Styled from './style'

export const Contato = () =>{
    return(
        <>
        <Styled.Mapa>
            <div className="iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.846210324636!2d-2.1107841949044537!3d53.49015482631562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb6f8937ab24f%3A0x20dcff451eeced35!2sVillage%20Hotel%20Manchester%20Ashton!5e0!3m2!1spt-PT!2sbr!4v1628918025698!5m2!1spt-PT!2sbr"></iframe>
            </div>
        </Styled.Mapa>
        <Styled.InfoContato>
            <Styled.Container>
                <div className="dados">
                    <div className="campoContato">
                        <div className="tipoContato">
                            <h4>Telefone:</h4>
                            <span>(11) 5555 - 4444</span>
                        </div>
                        <div className="tipoContato">
                            <h4>Email:</h4>
                            <span>contato@jx.com</span>
                        </div>
                        <div className="tipoContato">
                            <h4>Endereço:</h4>
                            <span>Avenida Lorem Ipsum,123</span>
                        </div>
                    </div>
                    <div className="formulario">
                        <form action="#">                        
                            <input type="text" placeholder="Nome Completo" required />
                            <input type="text" placeholder="E-mail" required />
                            <input type="text" placeholder="Assunto" required />
                            <textarea placeholder="Mensagem" required ></textarea>
                            <button type="submit">Enviar Mensagem</button>
                        </form>
                    </div>
                </div>           
            </Styled.Container>
        </Styled.InfoContato>
        </>
    )
}