import React, { useContext } from 'react'
import Bola from '../components/bola'
import Bolinha from '../components/bolinha';
import CardInform from '../components/CardInform'
import Logos from '../components/logos'
import { Banner, Container } from "../styles/StylesSobre";
import CourseContext from '../context/CourseContext';
import Formulario from '../components/form';

export default function Sobre() {
  const { currentCourse } = useContext(CourseContext);

  return (
    <Container color={currentCourse.color}>
      <Banner color={currentCourse.color}>
        <Bola
          title={currentCourse.title}
          date={currentCourse.date}
          date2={currentCourse.timeMex + ". Ciudad de México (MEX)"}
          date3={currentCourse.timeBr + ". 13 p.m. Brasília (BRA)"}
          color={currentCourse.color}
        />
      </Banner>
      <div className='teste'>
        <Logos />
        <div className='registrese'>
          <CardInform color={currentCourse.color}/>
        </div>
      </div>
      <Bolinha
        text={currentCourse.description}
        guests={currentCourse.guests}
      />
      <Formulario color={currentCourse.color} buttonColor={currentCourse.buttonColor}/>
    </Container>
  )
}
