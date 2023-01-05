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
        <Item>presentación</Item>
        <Item>programación</Item>
        <Item>inscripción</Item>
        <Item>grupo report</Item>
        <Item>alianzas</Item>
        <Item>- CEMEFI</Item>
        <Item>- DNV</Item>
        <Item>- IFRS</Item>
        <Item>- ProCoReef</Item>
      </ Panel>
    </Container>
  )
}
export default Menu;