import React, { useState } from 'react';
import { Container, Button, Panel, Item } from './styles'
import Image from "next/image";
import menuIcon from '../../assets/menu.svg';
import x from '../../assets/x.svg';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Container>
      <Button>
        <Image src={isOpen ? x : menuIcon } alt="Menu Button" onClick={() => setIsOpen(!isOpen)} />
      </Button>
      <Panel isOpen={isOpen}>
        <Item href='#presentacion'>presentación</Item>
        <Item href='#programacion'>programación</Item>
        <Item>inscripción</Item>
        <Item href='#report'>grupo report</Item>
        <Item href='#alianzas'>alianzas</Item>
        <Item href='https://www.cemefi.org/' target={'_blank'}>- CEMEFI</Item>
        <Item href='https://www.dnv.com.br/' target={'_blank'}>- DNV</Item>
        <Item href='https://www.ifrs.org/' target={'_blank'}>- IFRS</Item>
        <Item href='https://www.procoreef.com' target={'_blank'}>- ProCoReef</Item>
      </ Panel>
    </Container>
  )
}
export default Menu;