import {Container} from './styles';
import Image from "next/image";
import Logo2 from "../../assets/logo2.svg"

export default function Footer(props) {
  return (
    <Container>
      <Image src={Logo2} alt="logo" />
    </Container>
  );
}
