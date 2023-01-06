import React, { useContext } from 'react'
import Bola from '../components/bola'
import Bolinha from '../components/bolinha';
import CardInform from '../components/CardInform'
import Logos from '../components/logos'
import { Banner, Container, Parceiros } from "../styles/StylesSobre";
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
          time={currentCourse.time}
          color={currentCourse.color}
        />
      </Banner>
      <div className='teste'>
        <Logos />
        <div className='registrese'>
          <CardInform color={currentCourse.color}/>
        </div>
      </div>
      <Parceiros color={currentCourse.color}>
        <h2>Parceiros</h2>
        <h3>CEMEFI</h3>
        <p>
          Cemefi es una asociación civil mexicana fundada en 1988 y dedicada a facilitar el trabajo colaborativo 
          entre organizaciones de la sociedad civil, empresas y ciudadanía para promover el valor social y la 
          filantropía. Actualmente, la Comunidad Cemefi está integrada por más de 1,600 miembros que son fundaciones, 
          asociaciones, empresas y personas-, más de 3,000 usuarios de sus servicios y un equipo operativo formado 
          por más de 50 personas. Además, la asociación cuenta con 19 Aliados Regionales que promueven sus programas 
          en 20 estados del país.
        </p>
        <h3>IFRS Foundation</h3>
        <p>
        IFRS Foundation es una organización de interés público sin fines de lucro, de actuación global, establecida 
        para desarrollar estándares de divulgación de sostenibilidad y contabilidad de alta calidad, comprensibles, 
        exigibles y globalmente aceptados. Las directrices de los Informes Integrados (IR) y el desarrollo de los 
        estándares globales del International Sustainability Standards Board (ISSB) son ejemplos de actividades 
        promovidas por la IFRS.
        </p>
      </Parceiros>
      <Bolinha
        text={currentCourse.description}
        guests={currentCourse.guests}
      />
      <Formulario color={currentCourse.color} buttonColor={currentCourse.buttonColor}/>
    </Container>
  )
}
