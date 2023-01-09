import { Container } from "./styles";
import Image from "next/image";
import Logo2 from "../../assets/logo2.svg";
import Ifrs from "../../assets/ifrss.svg";
import Cemefi from "../../assets/cemefilogo.png";


export default function Logos() {
  return (
    <Container>
      <a href='https://www.cemefi.org/'><Image src={Cemefi} alt="logo" /></a>
      <a href='https://www.ifrs.org/'><Image src={Ifrs} alt="logo" /></a>
      <a href='https://www.gruporeport.com.br/'><Image src={Logo2} alt="logo" /></a>
    </Container>
  );
}
