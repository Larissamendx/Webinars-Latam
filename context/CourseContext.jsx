import React, { createContext, useState } from "react";
import evodio from "../assets/evodio.png";
import arturo from "../assets/arturo.jpeg";

const CourseContext = createContext(undefined);
export default CourseContext;

function CourseProvider({children}) {
  
  const aboutCourses = [
    {
      title: 'Informes ESG y la doble materialidad',
      subtitle: 'Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
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
      timeMex: '10 a.m',
      timeBr: '13 p.m',
      guests: [
        {
          name: 'Evodio Sánchez',
          group: 'CEMEFI',
          photo: evodio,
        },
        {
          name: 'Arturo Rodriguez',
          group: 'IFRS',
          photo: arturo,
        }
      ]
    },
    {
      title: 'Panorama y presentación de casos empresariales/sectorial',
      subtitle: 'Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
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
      color: 'red',
      buttonColor: 'yellow',
      date: '24.01.2023',
      timeMex: '10 a.m',
      timeBr: '13 p.m',
      guests: [
        {
          name: 'Evodio Sánchez',
          group: 'CEMEFI',
          photo: evodio,
        },
        {
          name: 'Arturo Rodriguez',
          group: 'IFRS',
          photo: arturo,
        }
      ]
    },
    {
      title: 'Finanzas Sostenibles & Sustainability linked bonds(SLB)',
      subtitle: 'Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
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
      timeMex: '10 a.m',
      timeBr: '13 p.m',
      guests: [
        {
          name: 'Evodio Sánchez',
          group: 'CEMEFI',
          photo: evodio,
        },
        {
          name: 'Arturo Rodriguez',
          group: 'IFRS',
          photo: arturo,
        }
      ]
    },
    {
      title: 'Comunicación de la Sostenibilidad',
      subtitle: 'Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
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
      color: 'yellow',
      buttonColor: 'blue',
      date: '21.02.2023',
      timeMex: '10 a.m',
      timeBr: '13 p.m',
      guests: [
        {
          name: 'Evodio Sánchez',
          group: 'CEMEFI',
          photo: evodio,
        },
        {
          name: 'Arturo Rodriguez',
          group: 'IFRS',
          photo: arturo,
        }
      ]
    },
    {
      title: 'Implementación de la Agenda Climática en las Empresas',
      subtitle: 'Invitados: Arturo Rodriguez (IFRS), Evodio Sánchez (CEMEFI)',
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
      color: 'purple',
      buttonColor: 'cyan',
      date: '14.03.2023',
      timeMex: '10 a.m',
      timeBr: '13 p.m',
      guests: [
        {
          name: 'Evodio Sánchez',
          group: 'CEMEFI',
          photo: evodio,
        },
        {
          name: 'Arturo Rodriguez',
          group: 'IFRS',
          photo: arturo,
        }
      ]
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