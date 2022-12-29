import Head from 'next/head'
import Image from "next/image";
import Bola from '../components/bola'
import Bolinha from '../components/bolinha';
import CardInform from '../components/CardInform'
import Logos from '../components/logos'
import { Banner, Container } from "../styles/StylesSobre";
import Teste from "../assets/img.jpg"


export default function Sobre() {
  return (
    <Container>
      <Banner>
        <Bola
          Title="La doble materialidad y los informes ESG"
          date="17.01.2023"
          date2="10 a.m. Ciudad de México (MEX)"
          date3="13 p.m. Brasília (BRA)" />
      </Banner>
      <div className='teste'>
        <Logos />
        <div className='registrese'>
          <CardInform />
        </div>
      </div>
      <Bolinha
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
        nome="Arturo Rodriguez"
        sobrenome="IFRS"
        nome2="xxxxxxx xxx"
        sobrenome2="CEMEFI"
        nome3="xxxxx xxx"
        sobrenome3="xxxx"
        nome4="Estevam Pereira"
        sobrenome4="Diretor del grupo report"/>
        
    </Container>
  )
}
