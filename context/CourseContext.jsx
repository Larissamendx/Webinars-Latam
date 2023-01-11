import React, { createContext, useState } from "react";
import evodio from "../assets/evodioS.jpg";
import arturo from "../assets/arturo.jpeg";
import Branca from "../assets/branca.jpg"
import stevam from "../assets/stevam.png";

//logos
import Report from "../assets/logo2.svg";
import Ifrs from "../assets/ifrs.svg";
import Cemefi from "../assets/cemefi.png";
import ProCoReef from "../assets/procoreef2.svg";

const CourseContext = createContext(undefined);
export default CourseContext;

function CourseProvider({children}) {
  
  const aboutCourses = [
    {
      title: 'Reportes ESG: Panorama, Tendencias y Metodologías (Standards/Doble Materialiad/Distintitvo ESG)',
      subtitle: ' Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
      color: 'blue',
      buttonColor: 'cyan',
      date: '17.01.2023',
      time: [
        '10 a.m. Ciudad de México (MEX)',
        '11 a.m. Bogotá (COL)',
        '01 p.m. Brasília (BRA)'
      ],
      logos: [
        {
          source: Cemefi,
          link: 'https://www.cemefi.org/'
        },
        {
          source: Ifrs,
          link: 'https://www.ifrs.org/'
        },
        {
          source: Report,
          link: 'https://www.gruporeport.com.br/'
        }
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
      mediacion: [
        {
          photo: stevam,
          name:'Estevam Pereira',
          group: 'Director, grupo report'
        }
      ],
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
      partners: [
        {
          name: 'CEMEFI',
          description: 
            'Cemefi es una asociación civil mexicana fundada en 1988 y dedicada a facilitar el trabajo colaborativo ' +
            'entre organizaciones de la sociedad civil, empresas y ciudadanía para promover el valor social y la ' +
            'filantropía. Actualmente, la Comunidad Cemefi está integrada por más de 1,600 miembros que son fundaciones, ' +
            'asociaciones, empresas y personas-, más de 3,000 usuarios de sus servicios y un equipo operativo formado ' +
            'por más de 50 personas. Además, la asociación cuenta con 19 Aliados Regionales que promueven sus programas ' +
            'en 20 estados del país.'
        },
        {
          name: 'IFRS Foundation',
          description: 
            'IFRS Foundation es una organización de interés público sin fines de lucro, de actuación global, establecida ' +
            'para desarrollar estándares de divulgación de sostenibilidad y contabilidad de alta calidad, comprensibles, ' +
            'exigibles y globalmente aceptados. Las directrices de los Informes Integrados (IR) y el desarrollo de los ' +
            'estándares globales del International Sustainability Standards Board (ISSB) son ejemplos de actividades ' +
            'promovidas por la IFRS.'
        }
      ]
    },
    {
      title: 'Finanzas Sostenibles & “Sustainability-linked bonds (SBL)”',
      subtitle: 'Invitados: ProCoReef',
      color: 'cyan',
      buttonColor: 'purple',
      date: '07.02.2023',
      time: [
        '10 a.m. Ciudad de México (MEX)',
        '11 a.m. Bogotá (COL)',
        '01 p.m. Brasília (BRA)'
      ],
      logos: [
        {
          source: ProCoReef,
          link: 'https://www.procoreef.com'
        },
        {
          source: Report,
          link: 'https://www.gruporeport.com.br/'
        }
      ],

      guests: [],
      mediacion: [
      
      ],

      description: [],
      partners: [
        {
          name: 'ProCoReef',
          description: 'No hay información hasta ahora '
        }
      ]
    },
    {
      title: 'Panorama y presentación de casos empresariales/sectorial',
      subtitle: '',
      color: 'red',
      buttonColor: 'yellow',
      date: 'información en breve',
      time: [],
      logos: [],
      guests: [],
      disabled: true,
      description: '',
      partners: '',
    },
    {
      title: 'Implementación de la Agenda Climática en las Empresas',
      subtitle: '',
      color: 'purple',
      buttonColor: 'cyan',
      date: 'información en breve',
      time: [],
      logos: [],
      guests: [],
      disabled: true,
      description: '',
      partners: '',
    },
    {
      title: 'Comunicación de la Sostenibilidad',
      subtitle: '',
      color: 'yellow',
      buttonColor: 'blue',
      date: 'información en breve',
      time: [],
      logos: [],
      guests: [],
      disabled: true,
      description: '',
      partners: '',
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