import React, { useContext } from 'react'
import Bola from '../components/bola'
import Bolinha from '../components/bolinha';
import CardInform from '../components/CardInform'
import { Banner, Container, Parceiros, Logos } from "../styles/StylesSobre";
import CourseContext from '../context/CourseContext';
import Formulario from '../components/form';
import Image from "next/image";

export default function Sobre() {
  const { currentCourse } = useContext(CourseContext);

  return (
    <Container color={currentCourse.color}>
      <Banner color={currentCourse.color}>
        <Bola
          title={currentCourse.title}
          date={currentCourse.date}
          time={currentCourse.time}
          color={currentCourse.color}
        />
      </Banner>
      <div className='teste'>
        <Logos>
          {currentCourse.logos && currentCourse.logos.map((logo, id) => {
            return(
              <a href={logo.link} key={id}><Image src={logo.source} alt="logo" /></a>
            )
          })}
        </Logos>
        <div className='registrese'>
          <CardInform color={currentCourse.color}/>
        </div>
      </div>
      {
        currentCourse.partners.length > 0 && 
      <Parceiros color={currentCourse.color}>
        <h2>Aliados</h2>
        {currentCourse.partners && currentCourse.partners.map((partner, id) => {
          return(
            <div>
              <h3>{partner.name}</h3>
              <p>
                {partner.description}
              </p>
            </div>
          )
        })}
      </Parceiros>
}
      {
        currentCourse.guests.length > 0 && 
        <Bolinha
          text={currentCourse.description}
          guests={currentCourse.guests}
          mediacion={currentCourse.mediacion}
        />
      }
      
      <Formulario color={currentCourse.color} buttonColor={currentCourse.buttonColor}/>
    </Container>
  )
}
