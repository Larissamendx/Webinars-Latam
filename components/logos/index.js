import { Container } from "./styles";
import Image from "next/image";
import Logo2 from "../../assets/logo2.svg";
import Ifrs from "../../assets/ifrs.svg";
import Cemefi from "../../assets/cemefi.png";


export default function Logos() {
  return (
    <Container>
      <Image src={Logo2} />
      <Image src={Ifrs} />
      <Image src={Cemefi} />
    </Container>
  );
}
