import { Container } from './styles';
import Image from "next/image";
import Teste from "../../assets/img.jpg"

export default function Bolinha(props) {
  return (
    <Container>
      <div className='footer'>
        <p>{props.text}</p>

        <div className='linhaTodo'>
          <div className='linha'>INVITADOS</div>
          <div className='linha2'>MEDIACIÓN</div>
        </div>

        <div className='todo'>
          <div className="imagem">
            <Image src={Teste} alt="logo" className="logo" />
            <div className='texto'>
              {props.nome} <br />
              {props.sobrenome}
            </div>
          </div>
          <div className="imagem">
            <Image src={Teste} alt="logo" className="logo" />
            <div className='texto'>
              {props.nome2} <br />
              {props.sobrenome2}
            </div>
          </div>
          <div className="imagem">
            <Image src={Teste} alt="logo" className="logo" />
            <div className='texto'>
              {props.nome3} <br />
              {props.sobrenome3}
            </div>
          </div>
          <div className="imagem">
            <Image src={Teste} alt="logo" className="logo" />
            <div className='texto'>
              {props.nome4} <br />
              {props.sobrenome4}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}