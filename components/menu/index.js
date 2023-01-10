import React, { useState } from 'react';
import { Container, Button, Panel, Item } from './styles'
import Image from "next/image";
import menuIcon from '../../assets/menu.svg';
import x from '../../assets/x.svg';
import Link from 'next/link';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Container>
      <Button>
        <Image src={isOpen ? x : menuIcon } alt="Menu Button" onClick={() => setIsOpen(!isOpen)} />
      </Button>
        <Panel isOpen={isOpen}>
        <Link href={"/"}><Item href='#'>HOME</Item></Link>
        <Item href='#presentacion'>PRESENTACIÓN</Item>
        <Item href='#programacion'>PROGRAMACIÓN</Item>
        <Item href='#form'>INSCRIPCIÓN</Item>
        <Item href='#report'>GRUPO REPORT</Item>
        <Item href='#alianzas'>ALIANZAS</Item>
        <Item href='https://www.cemefi.org/' target={'_blank'}>- Cemefi</Item>
        {/* <Item href='https://www.dnv.com.br/' target={'_blank'}>- DNV</Item> */}
        <Item href='https://www.ifrs.org/' target={'_blank'}>- IFRS</Item>
        <Item href='https://www.procoreef.com' target={'_blank'}>- ProCoReef</Item>
      </ Panel>
    </Container>
  )
}
export default Menu;