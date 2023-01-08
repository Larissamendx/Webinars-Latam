import React, { createContext, useState } from "react";
import evodio from "../assets/evodioS.jpg";
import arturo from "../assets/arturo.jpeg";
import Branca from "../assets/branca.jpg"

const CourseContext = createContext(undefined);
export default CourseContext;

function CourseProvider({children}) {
  
  const aboutCourses = [
    {
      title: 'Reportes ESG: Panorama, Tendencias y Metodologías (Standards/Doble Materialiad/Distintitvo ESG)',
      subtitle: ' Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
      description: (
        <div>
          <p>
            El panorama de la sostenibilidad y ESG está experimentando intensas transformaciones en los últimos tiempos, 
            especialmente en el campo de la información corporativa y la materialidad. Se han introducido nuevos conceptos 
            en el mercado, como materialidad financiera, materialidad de impacto, doble materialidad, materialidad core, 
            materialidad dinámica.
          </p> <br/>
          <p>
            En este encuentro vamos a presentar lo tratado en el tema de la materialidad, un principio y un proceso 
            crucial cuando se trata de estrategia, gestión y comunicación de la sostenibilidad.
          </p> <br/>
          <p>
            Actualízate con expertos, que cuentan con una amplia experiencia en el tema, están al tanto de las 
            tendencias y tienen un amplio conocimiento de las diferentes regiones.
          </p>
        </div>
      ),
      color: 'blue',
      buttonColor: 'cyan',
      date: '17.01.2023',
      time: [
        '10 a.m. Ciudad de México (MEX)',
        '11 a.m. Bogotá (COL)',
        '01 p.m. Brasília (BRA)'
      ],
      guests: [
        {
          name: 'Evodio Sánchez',
          group: 'Director de Responsabilidad Social Empresarial, Cemefi',
          photo: evodio,
          link: "https://www.cemefi.org/"
        },
        {
          name: 'Arturo Rodríguez',
          group: 'Senior Market Leader: Ibero-America, IFRS Foundation',
          photo: arturo,
        }
        
      ],
    
    },
    {
      title: 'Finanzas Sostenibles & “Sustainability-linked bonds (SBL)”',
      subtitle: 'Invitados: ProCoReef',
      description: (
        <div>
          <p>
            El panorama de la sostenibilidad y ESG está experimentando intensas transformaciones en los últimos tiempos, 
            especialmente en el campo de la información corporativa y la materialidad. Se han introducido nuevos conceptos 
            en el mercado, como materialidad financiera, materialidad de impacto, doble materialidad, materialidad core, 
            materialidad dinámica.
          </p> <br/>
          <p>
            En este encuentro vamos a presentar lo tratado en el tema de la materialidad, un principio y un proceso 
            crucial cuando se trata de estrategia, gestión y comunicación de la sostenibilidad.
          </p> <br/>
          <p>
            Actualízate con expertos, que cuentan con una amplia experiencia en el tema, están al tanto de las 
            tendencias y tienen un amplio conocimiento de las diferentes regiones.
          </p>
        </div>
      ),
      color: 'cyan',
      buttonColor: 'purple',
      date: '07.02.2023',
      time: [
        '10 a.m. Ciudad de México (MEX)',
        '11 a.m. Bogotá (COL)',
        '01 p.m. Brasília (BRA)'
      ],
      guests: [
        {
          name: 'No está definido',
          // group: 'CEMEFI',
          photo: Branca,
        },
        {
          name: 'No está definido',
          // group: 'IFRS',
          photo: Branca,
        }
      ]
    },
    {
      title: 'Panorama y presentación de casos empresariales/sectorial',
      subtitle: '',
      description: '',
      color: 'red',
      buttonColor: 'yellow',
      date: 'información en breve',
      time: [],
      guests: [],
      disabled: true
    },
    {
      title: 'Implementación de la Agenda Climática en las Empresas',
      subtitle: '',
      description: '',
      color: 'purple',
      buttonColor: 'cyan',
      date: 'información en breve',
      time: [],
      guests: [],
      disabled: true
    },
    {
      title: 'Comunicación de la Sostenibilidad',
      subtitle: '',
      description: '',
      color: 'yellow',
      buttonColor: 'blue',
      date: 'información en breve',
      time: [],
      guests: [],
      disabled: true
    }
  ]

  const [currentCourse, setCurrentCourse] = useState(aboutCourses[0]);

  return (
    <CourseContext.Provider value = {{
      aboutCourses,
      currentCourse,
      setCurrentCourse
    }}>
      {children}
    </CourseContext.Provider>
  ) 
}

export { CourseProvider };