import { Container } from './styles';
import Image from "next/image";
import Teste from "../../assets/stevam.png";

export default function Bolinha(props) {
  return (
    <Container>
      <div className='footer'>
        <div>{props.text}</div>
        <div className='todo'>
          <div className='invitadosContainer'>
            <div className='linha'>INVITADOS</div>
            <div className="imagemContainer">

            {
              props.guests && props.guests.map((guest, id )=> {
                return(
                  <div className="imagem" key={id}>
                    <Image src={guest.photo} href={guest.link} alt="guest" className="logo" />
                    <div className='texto' href={guest.link}>
                      {guest.name} <br />
                      {guest.group}
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div className='mediacionContainer'>
            <div className='linha2'>MEDIACIÓN</div>
            <div className="imagem">
              <Image src={Teste} alt="logo" className="logo" />
              <div className='texto'>
                Estevam Pereira <br />
                Director, grupo report
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container >
  );
}