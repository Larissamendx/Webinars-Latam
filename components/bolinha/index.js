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
           
            {
              props.mediacion && props.mediacion.map((mediacion, id )=> {
                return(
                  <div className="imagem" key={id}>
                    <Image src={mediacion.photo} href={mediacion.link} alt="guest" className="logo" />
                    <div className='texto' href={mediacion.link}>
                      {mediacion.name} <br />
                      {mediacion.group}
                    </div>
                  </div>
                )
              })
            }
            </div>
        </div>
      </div>
    </Container >
  );
}